const contactForm = document.getElementById('form');
const contactEmailField = document.getElementById('email');
const contactUsernameField = document.getElementById('name');
const contactMessageField = document.getElementById('textarea');

window.onload = () => {
  const isDataExist = JSON.parse(localStorage.getItem('contact-form'));
  
  if(!isDataExist) return;

  contactUsernameField.value = isDataExist?.username;
  contactEmailField.value = isDataExist?.email;
  contactMessageField.value = isDataExist?.message;
};

contactForm.oninput = () => {
  const username = contactUsernameField.value;
  const email = contactEmailField.value;
  const message = contactMessageField.value;

  localStorage.setItem('contact-form', JSON.stringify({ username, email, message }));
};