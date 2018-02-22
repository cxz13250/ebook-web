import Vue from 'vue';
import App from './app';
import router from './router/router'

import 'css/main.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'admin-lte/dist/js/adminlte.min.js'
import 'datatables.net-bs/js/dataTables.bootstrap.js'
import 'datatables/media/js/jquery.dataTables.min.js'
// import 'admin-lte/dist/js/adminlte.js'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'datatables.net-bs/css/dataTables.bootstrap.css'

// import './assets/img/login_bg.jpg'

Vue.config.debug = true;//开启错误提示
// Vue.config.productionTip = false

router.beforeEach((to,from,next) => {
    if(to.path == '/login' || to.path == '/register') {
        next()
    }
    else if(!window.localStorage.getItem('user')){
        next('/login')
    }else {
        next()
    }
})

new Vue({
    router,
    el: '#app',
    // template: '<App/>',
    // components: {App},
    render: h => h(App)
});