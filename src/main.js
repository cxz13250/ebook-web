import Vue from 'vue';
import App from './app';
import router from './router/router'

import 'css/main.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// import './assets/img/login_bg.jpg'

Vue.config.debug = true;//开启错误提示
// Vue.config.productionTip = false

new Vue({
    router,
    el: '#app',
    // template: '<App/>',
    // components: {App},
    render: h => h(App)
});