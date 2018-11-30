import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import LoginPage from '../login/LoginPage.vue';
import TeamPage from '../meetTheTeam/TeamPage.vue';
import ContactPage from '../contact/ContactPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/login',
    name: 'login',
    component: LoginPage,
  }, {
    path: '/',
    name: 'home',
    component: HomePage,
  }, {
    path: '/team',
    name: 'team',
    component: TeamPage,
  }, {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
  }],
});
