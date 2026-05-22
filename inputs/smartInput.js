const container = document.getElementById('otp-container');
const inputs = container.querySelectorAll('.otp-field-input');

inputs.forEach((input, index) => {
    // Avanzar automáticamente y limpiar si no es número
    input.addEventListener('input', (e) => {
        const value = e.target.value;

        if (!/^[0-9]$/.test(value)) {
            e.target.value = '';
            return;
        }

        if (value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    // Borrar hacia atrás con Backspace
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            inputs[index - 1].focus();
        }
    });

    // Soporte para pegar código completo
    input.addEventListener('paste', (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').trim().replace(/[^0-9]/g, '');

        inputs.forEach((inputField, i) => {
            if (pastedData[i]) {
                inputField.value = pastedData[i];
                if (i === inputs.length - 1 || i === pastedData.length - 1) {
                    inputs[i].focus();
                }
            }
        });
    });
});