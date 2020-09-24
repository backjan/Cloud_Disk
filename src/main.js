import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import './assets/js/slide/slide'
import './assets/js/main/main'
import './assets/font/iconfont.css'
import './assets/js/file/item_base'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')