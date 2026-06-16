document.addEventListener('click', (e) => {
    const themeBtn = e.target.closest('#theme-toggle');

    if (themeBtn) {
        themeBtn.classList.toggle('active');

        const isDark = themeBtn.classList.contains('active');
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }
});