const scriptURL = 'https://script.google.com/macros/s/AKfycbxugvP_WRehbzhcbjbvjmmImrmi9i_-KUbu4PH8_HaLB5vyz3bAhhehNW-c2mA-nA-Lfw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>alert('Enviado!', response))
    .catch(error => console.error('Error!', error.message))
})