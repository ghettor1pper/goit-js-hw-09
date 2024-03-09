const feedbackForm = document.querySelector('.feedback-form');
const feedbackStateKey = 'feedback-form-state';
const feedbackState = localStorage.getItem(feedbackStateKey);
if (feedbackState) {
  const stateObj = JSON.parse(feedbackState);
  if (stateObj.email) {
    feedbackForm.elements.email.value = stateObj.email;
  }
  if (stateObj.message) {
    feedbackForm.elements.message.value = stateObj.message;
  }
}

function handleInput(event) {
  const email = feedbackForm.elements.email.value;
  const message = feedbackForm.elements.message.value;
  const feedbackData = { email, message };
  const feedbackDataJson = JSON.stringify(feedbackData);
  localStorage.setItem(feedbackStateKey, feedbackDataJson);
}
function handleSubmit(event) {
  event.preventDefault();
  const email = feedbackForm.elements.email.value;
  const message = feedbackForm.elements.message.value;
  const feedbackData = { email, message };
  console.log(feedbackData);
  localStorage.removeItem(feedbackStateKey);
  feedbackForm.reset();
}

feedbackForm.addEventListener('submit', handleSubmit);
feedbackForm.addEventListener('input', handleInput);
