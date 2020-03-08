import sal from 'sal.js';

if (window.matchMedia('(min-width: 1024px)').matches) {
  sal({
    selector: '[data-animation]',
    animateClassName: 'animated',
    threshold: 0.01,
    once: true,
  });
}

document.addEventListener('sal:in', ({ detail }) => {
  const { target } = detail;
  setTimeout(() => {
    target.classList.remove('will-change');
    target.removeAttribute('data-animation');
  }, 1000);
});
