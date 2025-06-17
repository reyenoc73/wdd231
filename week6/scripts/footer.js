
  const now = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  document.getElementById('current-date').textContent = now.toLocaleDateString('en-US', options);
  document.getElementById('year').textContent = now.getFullYear();
