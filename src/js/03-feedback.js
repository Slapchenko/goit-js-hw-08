import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const formData = {};

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

  updateFormData();

  console.log(formData);

  clearStorageAndForm();
}

function onTextareaInput(evt) {
  updateFormData();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormFields() {
  const savedFormFields = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedFormFields) {
    refs.input.value = savedFormFields.email;
    refs.textarea.value = savedFormFields.message;
  }
}

function updateFormData(evt) {
  formData.email = refs.input.value;
  formData.message = refs.textarea.value;
}

function clearStorageAndForm() {
  refs.form.reset();
  localStorage.removeItem(STORAGE_KEY);
}
