const slider = document.getElementById('volume-slider');
const valueText = document.getElementById('volume-value');
const wave1 = document.getElementById('wave-1');
const wave2 = document.getElementById('wave-2');

function updateSliderStyles() {
    const value = slider.value;
    valueText.textContent = `${value}%`;
    slider.style.background = `linear-gradient(to right, #10b981 0%, #10b981 ${value}%, #e2e8f0 ${value}%, #e2e8f0 100%)`;
    if (value == 0) {
        wave1.style.display = 'none';
        wave2.style.display = 'none';
    } else if (value > 0 && value <= 50) {
        wave1.style.display = 'block';
        wave2.style.display = 'none';
    } else {
        wave1.style.display = 'block';
        wave2.style.display = 'block';
    }
}

slider.addEventListener('input', updateSliderStyles);
updateSliderStyles();