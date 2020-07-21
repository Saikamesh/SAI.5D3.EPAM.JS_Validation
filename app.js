console.log('hello');
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // Getting input values
  const usernamevalue = username.value.trim();
  const emailvalue = email.value.trim();
  const passwordvalue = password.value.trim();
  const password2value = password2.value.trim();

  if (usernamevalue === '') {
    // show error
    //add error class
    setErrorFor(username, 'Username field is required');
  } else {
    //add succes class
    setSuccessFor(username);
  }

  if (emailvalue === '') {
    setErrorFor(email, 'Choose a Email address');
  } else if (!isEmail(emailvalue)) {
    setErrorFor(email, 'Email is not Valid!');
  } else {
    setSuccessFor(email);
  }

  if (passwordvalue === '') {
    setErrorFor(password, 'Password cannot be Empty');
  } else {
    setSuccessFor(password);
  }

  if (password2value === '') {
    setErrorFor(password2, 'Feild cannot be Empty');
  } else if (passwordvalue !== password2value) {
    setErrorFor(password2, "Those passwords didn't match. Try again.");
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  //add error message inside small
  small.innerText = message;

  //add Error class
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
