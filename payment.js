document.getElementById('pay-btn')?.addEventListener('click', () => {
  // Dummy payment logic
  localStorage.setItem('paidUser', 'true');
  window.location.href = '/members.html';
});
