(function () {
  // Feature Test
  if ('querySelector' in document && 'addEventListener' in window && Array.prototype.forEach) {
    // Function to animate the scroll
    const smoothScroll = function (anchor, duration) {
      // Calculate how far and how fast to scroll
      const startLocation = window.pageYOffset;
      const endLocation = anchor.offsetTop;
      const distance = endLocation - startLocation;
      const increments = distance / (duration / 16);
      let stopAnimation;

      // Scroll the page by an increment, and check if it's time to stop
      const animateScroll = function () {
        window.scrollBy(0, increments);
        stopAnimation();
      };

      // If scrolling down
      if (increments >= 0) {
        // Stop animation when you reach the anchor OR the bottom of the page
        stopAnimation = function () {
          const travelled = window.pageYOffset;
          if ((travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight)) {
            clearInterval(runAnimation);
          }
        };
      }
      // If scrolling up
      else {
        // Stop animation when you reach the anchor OR the top of the page
        stopAnimation = function () {
          const travelled = window.pageYOffset;
          if (travelled <= (endLocation || 0)) {
            clearInterval(runAnimation);
          }
        };
      }

      // Loop the animation function
      var runAnimation = setInterval(animateScroll, 16);
    };

    // Define smooth scroll links
    const scrollToggle = document.querySelectorAll('.scroll');

    // For each smooth scroll link
    [].forEach.call(scrollToggle, (toggle) => {
      // When the smooth scroll link is clicked
      toggle.addEventListener('click', (e) => {
        // Prevent the default link behavior
        e.preventDefault();

        // Get anchor link and calculate distance from the top
        const dataID = toggle.getAttribute('href');
        const dataTarget = document.querySelector(dataID);
        const dataSpeed = toggle.getAttribute('data-speed');

        // If the anchor exists
        if (dataTarget) {
          // Scroll to the anchor
          smoothScroll(dataTarget, dataSpeed || 500);
        }
      }, false);
    });
  }
}());
