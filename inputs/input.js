const wrapper = document.getElementById('searchWrapper');
const input = document.getElementById('searchInput');

wrapper.addEventListener('click', () => {
    if (!wrapper.classList.contains('active')) {
        wrapper.classList.add('active');
        input.focus();
    }
});

input.addEventListener('blur', () => {
    if (input.value.trim() === "") {
        wrapper.classList.remove('active');
    }
});
input.addEventListener('click', (e) => {
    e.stopPropagation();
});
