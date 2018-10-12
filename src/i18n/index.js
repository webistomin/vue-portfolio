import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    pageHeader: {
      desc: 'Frontend developer',
    },
    mainNav: {
      firstLink: 'About me',
      secondLink: 'Portfolio',
      thirdLink: 'Contacts',
    },
    intro: {
      title: 'Hello',
      text: 'My name is Alexey, I\'m a junior frontend developer, currently focusing on Vue.js',
      link: 'Hire me',
    },
    about: {
      title: 'About me',
      firstText: 'I create crossbrowser responsive HTML page layouts and make it live using native JavaScript or Vue.js framework.',
      secondText: 'I can help you with converting website design to HTML templates, developing frontend for your project and optimizing existing code.',
      thirdText: 'These skills help me along the way:',
      fourthText: 'All the things: responsive, adaptive, mobile-first.',
      fifthText: 'By default support Edge and modern version of Chrome, Mozilla Firefox, Opera, Safari.',
      sixthText: 'All that depends on me must works fast. Css-sprites, svg symbols, webp pictures, responsive images, efficient code, optimization and minification. Clean markup reach 90+ on Google Tests.',
      seventhText: 'I have some backend programming experience and think as a backend programmer will think when working with my code.',
      titleSecond: 'Education',
      degree: 'Bachelor\'s degree with honors',
      place: 'State University of Humanities and Technology,\n' +
        'Orekhovo-Zuyevo',
    },
    portfolio: {
      title: 'Portfolio',
      caption: 'Project',
      firstBtn: 'Live Demo',
      secondBtn: 'View source',
      thirdBtn: 'View all projects',
    },
    pageFooter: {
      title: 'Contacts',
      firstInfo: 'E-mail',
      secondInfo: 'Skype',
      thirdInfo: 'CV',
      name: 'Alexey Istomin',
      secondTitle: 'Thanks',
      text: 'You’ve just spent\n' +
        '<span id="minutes"></span> minutes and <span id="seconds"></span>\n' +
        'seconds looking at my homepage. Time is the most important thing we have, and unfortunately you will never\n' +
        'get it back, so thank you very much for sharing it with me. Please feel free to contact me for freelance\n' +
        'projects and collaboration.',
      firstLabel: 'Your name',
      secondLabel: 'Your e-mail',
      thirdLabel: 'Your message',
      btn: 'Send',
      copyright: '©2018 ALL RIGHTS RESERVED. Alexey Istomin - junior frontend developer based in Russia.',
    },
  },
  ru: {
    pageHeader: {
      desc: 'Фронтенд разработчик',
    },
    mainNav: {
      firstLink: 'Обо мне',
      secondLink: 'Портфолио',
      thirdLink: 'Контакты',
    },
    intro: {
      title: 'Привет',
      text: 'Меня зовут Алексей, я джуниор фронтенд разработчик. В настоящее время работаю с Vue.js',
      link: 'Написать мне',
    },
    about: {
      title: 'Обо мне',
      firstText: 'Я создаю кроссбраузерные, отзывчивые HTML интерфейсы и оживляю их с помощью нативного JavaScript или Vue.js',
      secondText: 'Я могу сверстать сайт из PSD или любого другого веб-дизайна, разработать фронтенд для вашего проекта, а также оптимизировать существующую верстку.',
      thirdText: 'Мои навыки:',
      fourthText: 'Все разработанные сайты отзывчивые и адаптивные, с применением подхода Mobile First',
      fifthText: 'Обычно сайты корректо отображаются во всех современных браузерах (Chrome, Opera, Firefox, Safari, Edge). IE может дорабаваться отдельно.',
      sixthText: 'Все что зависит от меня стараюсь делать максимально быстрым. Применяю css и svg спрайты, изображения webp, минифицирую картинки, стили, скрипты и т.д. Разработанные сайты часто получают зеленую зону в Google Speed (90+)',
      seventhText: 'У меня есть небольшой опыт в разработке серверной части, поэтому стараюсь писать код, который смогут использовать бэкендеры.',
      titleSecond: 'Образование',
      degree: 'Диплом бакалавра с отличием',
      place: 'Государственный Гуманитарно-Технологический Университет,\n' +
        'Орехово-Зуево',
    },
    portfolio: {
      title: 'Портфолио',
      caption: 'Проект',
      firstBtn: 'Демо',
      secondBtn: 'Исходный код',
      thirdBtn: 'Все проекты',
    },
    pageFooter: {
      title: 'Контакты',
      firstInfo: 'Почта',
      secondInfo: 'Скайп',
      thirdInfo: 'Резюме',
      name: 'Алексей Истомин',
      secondTitle: 'Спасибо',
      text: 'Вы уже потратили' +
        '<span id="minutes"></span> minutes and <span id="seconds"></span>\n' +
        'изучая мою страничку. Время — это самое важное, что может потратить человек в своей жизни. Оно не возвращается и мы должны научиться использовать его с умом. Пожалуйста, не стесняйтесь обращаться ко мне по какому-либо вопросу. Буду рад нашему знакомству и сотрудничеству в дальнейшем.',
      firstLabel: 'Ваше имя',
      secondLabel: 'Ваш e-mail',
      thirdLabel: 'Ваше сообщение',
      btn: 'Отправить',
      copyright: '©2018 Все права защищены. Алексей Истомин - джуниор фронтенд разработчик из России',
    },
  },
};

const i18n = new VueI18n({
  locale: 'ru', // set locale
  messages, // set locale messages
});

Object.defineProperty(Vue.prototype, '$locale', {
  get() {
    return i18n.locale;
  },
  set(locale) {
    i18n.locale = locale;
  },
});

export default i18n;
