const form = document.getElementById('form');
const emailField = document.getElementById('email');
const error = document.querySelector('.form-error');
const usernameField  = document.getElementById('name');

const showErrorMessage = (message) => {
  const htmlEle = `
    <p>${message}</p>
  `;
  error.style.display = 'block';
  error.insertAdjacentHTML('beforeend', htmlEle);
}

const resetError = () => {
  error.style.display = 'none';
  error.textContent = '';
}

const validateEmail = (text) => {
  const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
  if (!emailPattern.test(text)) {
    showErrorMessage("Email is invalid!");
    return false;
  }

  if (/[A-Z]/.test(text)) {
    showErrorMessage("Email must be in lowercase letters!");
    return false;
  }

  return true;
}

const validateUsername = (text) => {
  const username = text.trim()
  const usernamePattern = /[0-9a-zA-Z\W]+/
  
  if (!usernamePattern.test(username)) {
    showErrorMessage("Please use only letters and numbers in username field!");
    return false;
  }

  if (username.length > 30) {
    showErrorMessage("Username must be less than 30 characters");
    return false;
  }

  return true;
}


form.onsubmit = (ev) => {
  //debugger
  ev.preventDefault();
  validateUsername(usernameField.value);
  validateEmail(emailField.value);
}

form.oninput = resetError;