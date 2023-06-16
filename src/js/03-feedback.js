import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const dataStorage = {};
const keyStorage = 'feedback-form-state';
const savedData = JSON.parse(localStorage.getItem(keyStorage));

feedbackForm.addEventListener('input', throttle(onInput, 500));
feedbackForm.addEventListener('submit', onSubmit);

function onInput(event) {
  const { email, message } = feedbackForm.elements;

  dataStorage.email = email.value;
  dataStorage.message = message.value;

  localStorage.setItem(keyStorage, JSON.stringify(dataStorage));
}

function fillFeedbackForm() {
  if (savedData) {
    feedbackForm.elements.email.value = savedData.email || '';
    feedbackForm.elements.message.value = savedData.message || '';
  }
}

fillFeedbackForm();

function onSubmit(event) {
  event.preventDefault();

  if (
    feedbackForm.elements.email.value.length === 0 ||
    feedbackForm.elements.message.value.length === 0
  ) {
    alert('Всі поля повинні бути заповнені!');
  }
  if (
    feedbackForm.elements.email.value.length !== 0 ||
    feedbackForm.elements.message.value.length !== 0
  ) {
    console.log(JSON.parse(localStorage.getItem(keyStorage)));
  }

  localStorage.clear();
  feedbackForm.reset();
}
