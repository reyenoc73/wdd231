const messageEl = document.getElementById('visitMessage');
const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;

const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
  // First visit
  messageEl.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysPassed = Math.floor((now - Number(lastVisit)) / MILLISECONDS_IN_A_DAY);

  if (daysPassed < 1) {
    messageEl.textContent = "Back so soon! Awesome!";
  } else if (daysPassed === 1) {
    messageEl.textContent = "You last visited 1 day ago.";
  } else {
    messageEl.textContent = `You last visited ${daysPassed} days ago.`;
  }
}

// Store the current visit time
localStorage.setItem('lastVisit', now);

