const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

function saveFormData(formData) {
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function fillUpForm() {
  const savedData = localStorage.getItem(localStorageKey);

  if (savedData) {
    const savedFormData = JSON.parse(savedData);
    form.elements.email.value = savedFormData.email;
    form.elements.message.value = savedFormData.message;
  }
}

fillUpForm();

form.addEventListener('input', () => {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value.trim(),
  };
  saveFormData(formData);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value.trim(),
  };

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log('Form:', formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});
