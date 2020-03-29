const message = document.getElementById('message');
const submitButton = document.getElementById('submit-button');

message.addEventListener('input', () => {
  if (message.value.length > 0) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

submitButton.addEventListener('click', () => {
  message.value = "";
  submitButton.disabled = true;
});