const form = document.getElementById('form');
const emailField = document.getElementById('email');
const usernameField = document.getElementById('name');

const showErrorMessage = (message, containerEl) => {
  const errorEl = `<p class="form-error">${message}</p>`;
  containerEl.parentElement.insertAdjacentHTML('beforeend', errorEl);
};

const hideErrorMessages = () => {
  emailField.parentElement.querySelectorAll('.form-error')?.forEach((error) => error.remove());
  usernameField.parentElement.querySelectorAll('.form-error')?.forEach((error) => error.remove());
};

const validateEmail = (text) => {
  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailPattern.test(text)) {
    showErrorMessage('Email is invalid!', emailField);
    return false;
  }

  if (/[A-Z]/.test(text)) {
    showErrorMessage('Email must be in lowercase letters!', emailField);
    return false;
  }

  return true;
};

const validateUsername = (text) => {
  const username = text.trim();
  const invalidCharactersPattern = /[\\/:"'*?<>@|&$,%!§;.]+/;

  if (invalidCharactersPattern.test(username)) {
    showErrorMessage('Please use only letters and numbers in username field!', usernameField);
    return false;
  }

  if (username.length > 30) {
    showErrorMessage('Username must be less than 30 characters', usernameField);
    return false;
  }

  return true;
};

form.onsubmit = (ev) => {
  ev.preventDefault();

  hideErrorMessages();

  const isUsernameValid = validateUsername(usernameField.value);
  const isEmailValid = validateEmail(emailField.value);

  return isUsernameValid && isEmailValid ? form.submit() : false;
};

form.oninput = hideErrorMessages;