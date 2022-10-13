const contactForm = document.getElementById('form');
const contactEmailField = document.getElementById('email');
const contactUsernameField = document.getElementById('name');
const contactMessageField = document.getElementById('textarea');

function isLocaleStorageAvailable() {
  try {
    const x = 'test__localStorage';
    localStorage.setItem(x, x);
    localStorage.removeItem(x);
    return true;
  } catch (err) {
    return false;
  }
}

window.onload = () => {
  if (!isLocaleStorageAvailable()) return;

  const isDataExist = JSON.parse(localStorage.getItem('contact-form'));

  if (!isDataExist) return;

  contactUsernameField.value = isDataExist?.username;
  contactEmailField.value = isDataExist?.email;
  contactMessageField.value = isDataExist?.message;
};

contactForm.oninput = () => {
  if (!isLocaleStorageAvailable()) return;

  const username = contactUsernameField.value;
  const email = contactEmailField.value;
  const message = contactMessageField.value;

  localStorage.setItem('contact-form', JSON.stringify({ username, email, message }));
};