const message = document.getElementById('message');
const name = document.getElementById('name');
const submitButton = document.getElementById('submit-button');
const myForm = document.getElementById("my-form");
let messageFlag = false;
let nameFlag = false;

message.addEventListener('input', () => {
  messageFlag = (message.value.length > 0) ? true : false;
  submitButton.disabled = (messageFlag || nameFlag) ? false : true;
});

name.addEventListener('input', () => {
  nameFlag = (name.value.length > 0) ? true : false;
  submitButton.disabled = (messageFlag|| nameFlag) ? false : true;
});

submitButton.addEventListener('click', () => {
  submitButton.disabled = true;
  myForm.submit();
  message.value = "";
  name.value = "";
});