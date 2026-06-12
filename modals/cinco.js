
document.addEventListener('click', (e) => {
    const modal = document.getElementById('player-modal');

    if (e.target.closest('#trigger-profile')) {
        modal?.showModal();
    }

    if (e.target.closest('#close-profile-btn') || e.target === modal) {
        modal?.close();
    }
});