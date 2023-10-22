const content = document.querySelector('.content');

function swipeLeft() {
  content.classList.add('slide-left');
  // Set a timeout to load the new page after the transition completes
  setTimeout(() => {
    window.location.href = 'portfolio.html';
  }, 500); // Matches the transition duration
}

content.addEventListener('click', swipeLeft);