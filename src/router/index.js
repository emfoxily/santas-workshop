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
    path: '/',
    name: 'Login/Sign Up',
    component: LoginPage,
  }, {
    path: '/home',
    name: 'Home',
    component: HomePage,
  }, {
    path: '/team',
    name: 'Meet The Team',
    component: TeamPage,
  }, {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
  }],
});
