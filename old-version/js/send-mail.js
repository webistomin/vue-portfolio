function postData(formsubmission) {
  const name = encodeURIComponent(document.getElementById('name').value);
  const email = encodeURIComponent(document.getElementById('email').value);
  const message = encodeURIComponent(document.getElementById('message').value);

  // eslint-disable-next-line max-len
  // Parameters to send to PHP script. The bits in the "quotes" are the POST indexes to be sent to the PHP script.
  const params = `Name=${name}&email=${email}&message=${message}`;

  const http = new XMLHttpRequest();
  http.open('POST', 'send.php', true);

  // Set headers
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  http.send(params);
  formsubmission.preventDefault();
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.contacts__field').addEventListener('submit', postData);
});
