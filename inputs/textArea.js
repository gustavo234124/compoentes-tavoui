const textarea = document.getElementById('santa-letter');
const counter = document.getElementById('letter-counter');

textarea.addEventListener('input', (e) => {
    const currentLength = e.target.value.length;
    counter.textContent = `${currentLength} / 500 caracteres`;
});