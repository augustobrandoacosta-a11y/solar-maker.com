function showScreen(screenId) {
  // Hide all screens
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => {
    screen.style.display = 'none';
  });

  // Show the requested screen
  document.getElementById(screenId).style.display = 'block';
}
const canvas = document.getElementById('planetCanvas');
const ctx = canvas.getContext('2d');
let drawing = false;

canvas.addEventListener('mousedown', () => drawing = true);
canvas.addEventListener('mouseup', () => drawing = false);
canvas.addEventListener('mousemove', draw);

function draw(e) {
  if (!drawing) return;
  
  // This draws a small circle where your mouse is
  ctx.lineWidth = 10;
  ctx.lineCap = 'round';
  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}
