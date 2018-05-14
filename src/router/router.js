import Vue from 'vue'
import login from '../component/common/login.vue';
import register from '../component/common/register.vue';
import admin from 'admin/main.vue';
import custom from 'custom/main.vue';
import bookListAdmin from 'admin/book/book-list';
import userList from 'admin/user/user-list';
import categoryList from 'admin/category/category-list';
import orderList from 'admin/order/order-list';
import categoryDetail from 'admin/category/category-detail';
import bookDetailAdmin from 'admin/book/book-detail';
import userDetail from 'admin/user/user-detail';
import orderDetail from 'admin/order/order-detail';
import operations from 'admin/operation-list';
import bookListCustom from 'custom/book/book-list';
import bookInfoCustom from 'custom/book/book-info';
import userInfo from 'custom/user/user-info';
import mainPage from 'custom/main-page';
import orderListCustom from 'custom/order/order-list';
import orderOrderCustom from 'custom/order/order-info';
import Router from 'vue-router';
import app from '../app.vue';

Vue.use(Router);
export default new Router({
    mode: 'hash',
    routes: [
        { path: '/' ,component: app ,children:[
            { path: '' ,component: login },
            { path: '/login' ,component: login },
            { path: '/register' ,component: register },
            { path: '/admin' ,component: admin, children:[
                { path: 'books' ,component: bookListAdmin },
                { path: 'book' ,component: bookDetailAdmin },
                { path: 'operations' ,component: operations },
                { path: 'users' ,component: userList },
                { path: 'user' ,component: userDetail },
                { path: 'categories' ,component: categoryList },
                { path: 'category' ,component: categoryDetail },
                { path: 'orders' ,component: orderList },
                { path: 'order' ,component: orderDetail },
            ] },
            { path: '/custom' ,component: custom, children:[
                { path: '', component: mainPage },
                { path: 'main', component: mainPage },
                { path: 'books' ,component: bookListCustom },
                { path: 'user' ,component: userInfo },
                { path: 'orders' ,component: orderListCustom },
                { path: 'book', component: bookInfoCustom },
                { path: 'order', component: orderOrderCustom }
            ] },
        ]},
    ]
})