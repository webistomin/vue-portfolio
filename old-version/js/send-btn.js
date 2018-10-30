const name1 = document.getElementById('name');
const email1 = document.getElementById('email');
const message1 = document.getElementById('message');
const send = document.getElementById('contact-submit');
const btnText = document.getElementById('btn-text');
const plane = document.getElementById('plane-btn');
const planeAbsolute = document.getElementById('plane-btn-absolute');

send.onclick = function () {
  if (name1.validity.valid && email1.validity.valid && message1.validity.valid) {
    planeAbsolute.classList.remove('contacts__icon--hidden');
    planeAbsolute.classList.add('contacts__icon--visible');
    planeAbsolute.classList.add('fly');
    btnText.classList.add('fade');
    btnText.innerHTML = 'Sent';
    plane.innerHTML = '<use x="0" y="0" xlink:href="#icon-check"></use>';
  }
};

