const contactForm = document.getElementById('form');
const contactEmailField = document.getElementById('email');
const contactUsernameField = document.getElementById('name');
const contactMessageField = document.getElementById('textarea');

contactForm.oninput = () => {
  const username = contactUsernameField.value;
  const email = contactEmailField.value;
  const message = contactMessageField.value;

  localStorage.setItem('contact-form', JSON.stringify({ username, email, message }));
};