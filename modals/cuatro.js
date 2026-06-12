document.addEventListener('click', (e) => {
    const modal = document.getElementById('split-modal');
    const btn = e.target.closest('#trigger-btn');

    if (btn && modal) {
        modal.showModal();
    }

    if (e.target.closest('#close-split-btn') || e.target === modal) {
        if (modal) {
            modal.close();
        }
    }
});