import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import ProjectsPage from '../components/ProjectsPage';
import NotFound from '../components/NotFound';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/projects-page',
      component: ProjectsPage,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});
