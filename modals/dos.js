const drawerModal = document.getElementById('drawer-modal');
const openDrawerBtn = document.getElementById('open-drawer-btn');
const closeDrawerBtn = document.getElementById('close-drawer-btn');
const cancelDrawerBtn = document.getElementById('cancel-drawer-btn');

openDrawerBtn.addEventListener('click', () => {
    drawerModal.showModal();
});

const closeDrawerModal = () => {
    drawerModal.close();
};

closeDrawerBtn.addEventListener('click', closeDrawerModal);
cancelDrawerBtn.addEventListener('click', closeDrawerModal);

drawerModal.addEventListener('click', (e) => {
    if (e.target === drawerModal) {
        closeDrawerModal();
    }
});