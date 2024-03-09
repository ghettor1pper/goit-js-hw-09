const feedbackForm = document.querySelector('.feedback-form');
const submitButton = document.querySelector('.submit');
function handleClick(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
};