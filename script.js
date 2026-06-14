/**
 * Swaps between the Menu, Planet Studio, and System Studio
 * @param {string} screenId - The ID of the div to show
 */
function showScreen(screenId) {
  // 1. Get all elements that have the class 'screen'
  const screens = document.querySelectorAll('.screen');
  
  // 2. Loop through them and hide all of them
  screens.forEach(screen => {
    screen.style.display = 'none';
  });

  // 3. Find the one specific screen we want and show it
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.style.display = 'block';
  }
}
