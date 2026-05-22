const passwordComponent = document.getElementById('password-component');
const passwordField = document.getElementById('password-field');
const passwordToggle = document.getElementById('password-toggle');

passwordToggle.addEventListener('click', () => {
    const isPassword = passwordField.type === 'password';
    passwordField.type = isPassword ? 'text' : 'password';

    passwordComponent.classList.toggle('show-password', isPassword);

    passwordToggle.setAttribute('aria-label', isPassword ? 'Ocultar contraseña' : 'Mostrar contraseña');

    passwordField.focus();
});