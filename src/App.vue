<template>
  <div id="app">
    <transition name="fade" mode="out-in">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted() {
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      const send = document.getElementById('contact-submit');
      const btnText = document.getElementById('btn-text');
      const plane = document.getElementById('plane-btn');
      const planeAbsolute = document.getElementById('plane-btn-absolute');

      send.onclick = () => {
        if (nameInput.validity.valid && emailInput.validity.valid && messageInput.validity.valid) {
          planeAbsolute.classList.remove('contacts__icon--hidden');
          planeAbsolute.classList.add('contacts__icon--visible');
          planeAbsolute.classList.add('fly');
          btnText.classList.add('fade');
          btnText.innerHTML = 'Sent';
          plane.innerHTML = '<use x="0" y="0" xlink:href="#icon-check"></use>';
        }
      };
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
    },
  };
</script>

<style>
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 0.3s ease;
  }
  .fade-leave {
  }
  .fade-leave-active {
    transition: opacity 0.3s ease;
    opacity: 0;
  }
</style>
