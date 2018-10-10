
var name1 = document.getElementById('name');
var email1 = document.getElementById('email');
var message1 = document.getElementById('message');
var send = document.getElementById('contact-submit');
var btnText = document.getElementById('btn-text');
var plane = document.getElementById('plane-btn');
var planeAbsolute = document.getElementById('plane-btn-absolute');

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





