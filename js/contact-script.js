const message = document.getElementById('message');
const email = document.getElementById('email');
const submitButton = document.getElementById('submit-button');
let messageFlag = false;
let emailFlag = false;

message.addEventListener('input', () => {
  messageFlag = (message.value.length > 0) ? true : false;
  submitButton.disabled = (messageFlag || emailFlag) ? false : true;
});

email.addEventListener('input', () => {
  emailFlag = (email.value.length > 0) ? true : false;
  submitButton.disabled = (messageFlag|| emailFlag) ? false : true;
});

submitButton.addEventListener('click', () => {
  message.value = "";
  email.value = "";
  submitButton.disabled = true;
});