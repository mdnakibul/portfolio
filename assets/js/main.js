
$(document).ready(function () {

  $('.skillbar').skillBars({
    from: 0,
    speed: 4000,
    interval: 100,
    decimals: 0,
  });

});

const scriptURL = 'https://script.google.com/macros/s/AKfycbw92b-1es8mpfnXHmfgPe5wqz-aRrBf0b5hd7z3WIn50To74P9ArQWfTd4UNi-zw4RyxA/exec'
const form = document.forms['portfolio-form']

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log('Hit Submit');
  document.getElementById('timestamp').value = new Date();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})