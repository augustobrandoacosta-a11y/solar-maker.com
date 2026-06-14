function showScreen(screenId) {
  // Hide all screens
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => {
    screen.style.display = 'none';
  });

  // Show the selected screen
  document.getElementById(screenId).style.display = 'block';
}
