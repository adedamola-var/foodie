const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
  alert('You are about to logout');
  window.location='signin.html';
  
});