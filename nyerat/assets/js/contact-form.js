const contactForm = document.forms.namedItem('contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const contactData = new FormData(contactForm);
  const plainFormData = Object.fromEntries(contactData.entries());
  const formDataJsonString = JSON.stringify(plainFormData);

  fetch('https://api.staticforms.xyz/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: formDataJsonString,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw Error(response.statusText);
    })
    .then((jsonResponse) => {
      const success = document.querySelector('.email-sent');
      success.innerText = jsonResponse.message;
      success.classList.remove('hidden');
    })
    .catch((error) => {
      const failed = document.querySelector('.email-failed');
      failed.innerText = error;
      failed.classList.remove('hidden');
    });
});
