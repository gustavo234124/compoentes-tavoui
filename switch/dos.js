document.addEventListener('DOMContentLoaded', () => {
    const flipToggle = document.getElementById('flip-toggle');

    flipToggle.addEventListener('click', () => {
        const isActive = flipToggle.classList.toggle('active');
        flipToggle.setAttribute('aria-checked', isActive ? 'true' : 'false');
    });
});