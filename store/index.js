export const state = () => ({
  locales: ['en', 'ru'],
  locale: 'ru',
});

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  },
};
