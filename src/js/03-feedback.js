import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

populateFormFields();

function onFormSubmit(evt) {
  evt.preventDefault();

  if (refs.input.value === '' || refs.textarea.value === '') {
    return alert('All fields are required to be completed');
  }

  console.log(formData);

  formData = {};

  evt.currentTarget.reset();
  refs.textarea.textContent = '';
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
  const { name, value } = evt.target;
  formData[name] = `${value}`;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormFields() {
  const savedFormFields = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedFormFields) {
    formData = savedFormFields;
    refs.input.value = savedFormFields.email || '';
    refs.textarea.textContent = savedFormFields.message || '';
  }
}
