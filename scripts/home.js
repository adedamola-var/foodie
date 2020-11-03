  // sign up the user
  const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  const confirm_password = signupForm['signup-confirm_password'].value;

  if (password != confirm_password){
     alert('password didnt match try again');
     return false
   }
   else
      return auth.createUserWithEmailAndPassword(email, password).then(cred => {
        
    console.log(cred.user);
    window.location='signin.html';
   
  
     }); 
    });

