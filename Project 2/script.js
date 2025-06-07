// Select elements
const card = document.getElementById('card');
const toggleBtn = document.getElementById('toggleBtn');

// Add event listener
toggleBtn.addEventListener('click', () => {
  card.classList.toggle('animate'); // Dynamically add/remove CSS class
});
