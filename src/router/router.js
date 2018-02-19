import Vue from 'vue'
import login from '../component/common/login.vue';
import register from '../component/common/register.vue';
import admin from '../component/admin/main.vue';
import custom from '../component/custom/main.vue';
import Router from 'vue-router'
import app from '../app.vue';

Vue.use(Router);
export default new Router({
    routes: [
        { path: '' ,component: app },
        { path: '/login' ,component: login },
        { path: '/register' ,component: register },
        { path: '/admin' ,component: admin },
        { path: '/custom' ,component: custom },
    ]
})