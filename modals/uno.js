const modal = document.getElementById('custom-modal');
const openBtn = document.getElementById('open-modal-btn');
const closeBtn = document.getElementById('close-modal-btn');
const cancelBtn = document.getElementById('cancel-modal-btn');

// Abrir modal
openBtn.addEventListener('click', () => {
    modal.showModal();
});

// Cerrar modal
const closeModal = () => {
    modal.close();
};

closeBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);

// Cerrar al hacer clic en el backdrop externo
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});