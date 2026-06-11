document.addEventListener('click', (e) => {
    const modal = document.querySelector('dialog');
    const btn = e.target.closest('.btn-electric');

    if (btn) {
        btn.classList.add('active');
        if (modal) {
            modal.showModal();
        } else {
            console.error("Error: No se encontró ninguna etiqueta <dialog> en el HTML.");
        }
    }

    if (e.target.closest('.modal-close-btn') || e.target.closest('#cancel-modal-btn')) {
        if (modal) modal.close();
        const activeBtn = document.querySelector('.btn-electric.active');
        if (activeBtn) activeBtn.classList.remove('active');
    }

    if (e.target.nodeName === 'DIALOG') {
        modal.close();
        const activeBtn = document.querySelector('.btn-electric.active');
        if (activeBtn) activeBtn.classList.remove('active');
    }
});