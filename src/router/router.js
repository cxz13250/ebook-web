import Vue from 'vue'
import login from '../component/common/login.vue';
import register from '../component/common/register.vue';
import admin from 'admin/main.vue';
import custom from 'custom/main.vue';
import bookListAdmin from 'admin/book/book-list';
import operations from 'admin/operation-list';
import bookListCustom from 'custom/book-list';
import Router from 'vue-router'
import app from '../app.vue';

Vue.use(Router);
export default new Router({
    routes: [
        { path: '/' ,component: app ,children:[
            { path: '' ,component: login },
            { path: '/login' ,component: login },
            { path: '/register' ,component: register },
            { path: '/admin' ,component: admin, children:[
                { path: '/admin/books' ,component: bookListAdmin },
                { path: '/admin/operations' ,component: operations },
            ] },
            { path: '/custom' ,component: custom, children:[
                { path: '/custom/books' ,component: bookListCustom },
            ] },
        ]},
    ]
})