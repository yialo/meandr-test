'use strict';

const feedbackForm = document.querySelector('.feedback__form');
const fullnameField = feedbackForm
  .querySelector('.feedback__field[name=\'fullname\']');
const emailField = feedbackForm
  .querySelector('.feedback__field[name=\'email\']');
const telField = feedbackForm
  .querySelector('.feedback__field[name=\'tel\']');
const aboutField = feedbackForm
  .querySelector('.feedback__field[name=\'about\']');

const onFieldValueMissing = function feedbackFieldValueMissingHandler(field) {
  const valueMissingMessages = {
    fullname: 'Пожалуйста, укажите фамалию и имя',
    email: 'Пожалуйста, введите адрес электронной почты',
    about: 'Данное поле является обязательным',
  };
  const fieldName = field.getAttribute('name');
  const message = valueMissingMessages[fieldName];

  if (field.validity.valueMissing) {
    field.setCustomValidity(message);
  } else {
    field.setCustomValidity('');
  }
};

[fullnameField, emailField, aboutField].forEach((field) => {
  field.addEventListener('invalid', () => {
    onFieldValueMissing(field);
  });
});

const onTelFieldInvalid = function telFieldInvalidHandler() {
  const telRegexp = /\+7\s\d{3}\s\d{3}\s\d{4}/;

  if (telField.validity.valueMissing) {
    telField.setCustomValidity('Пожалуйста, укажите номер телефона');
  } else if (!telField.value.match(telRegexp)) {
    telField.setCustomValidity('Введите номер телефона в деятизначном формате: +7 XXX XXX XXXX');
  } else {
    telField.setCustomValidity('');
  }
};

telField.addEventListener('invalid', () => {
  onTelFieldInvalid();
});
