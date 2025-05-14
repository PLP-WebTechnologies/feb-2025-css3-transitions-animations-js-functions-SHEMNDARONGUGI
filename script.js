// Store and apply user's color preference
function saveColor() {
  const color = document.getElementById('color').value;
  localStorage.setItem('buttonColor', color);
  applyColor(color);
}

function applyColor(color) {
  const btn = document.getElementById('animateBtn');
  btn.style.backgroundColor = color;
}

// Animate button on click
function triggerAnimation() {
  const btn = document.getElementById('animateBtn');
  btn.classList.add('animate');

  // Remove animation class after it completes
  setTimeout(() => {
    btn.classList.remove('animate');
  }, 600);
}

// Apply saved color on page load
window.onload = () => {
  const savedColor = localStorage.getItem('buttonColor');
  if (savedColor) {
    document.getElementById('color').value = savedColor;
    applyColor(savedColor);
  }
};