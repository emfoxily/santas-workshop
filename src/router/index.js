import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import LoginPage from '../login/LoginPage.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/home',
        name: 'Home',
        component: HomePage,
    }, {
        path:'/',
        name: 'Login/Sign Up',
        component: LoginPage,
    }],
})