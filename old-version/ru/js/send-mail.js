
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('.contacts__field').addEventListener("submit", postData);
});

function postData(formsubmission) {

  var name = encodeURIComponent(document.getElementById("name").value);
  var email = encodeURIComponent(document.getElementById("email").value);
  var message = encodeURIComponent(document.getElementById("message").value);

  // Parameters to send to PHP script. The bits in the "quotes" are the POST indexes to be sent to the PHP script.
  var params = "Name=" + name + "&email=" + email + "&message=" + message;

  var http = new XMLHttpRequest();
  http.open("POST", "send.php", true);

  // Set headers
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http.send(params);
  formsubmission.preventDefault();
}
