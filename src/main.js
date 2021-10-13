import Vue from 'vue'
import VueSimpleAlert from "vue-simple-alert";
import config from "../config";
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";


Vue.use(VueSimpleAlert);

Vue.config.productionTip = false

// Axios

axios.defaults.baseURL = config.apiBaseUrl;

import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.VUE_APP_WEBSOCKETS_KEY,
    wsHost: process.env.VUE_APP_WEBSOCKETS_SERVER,
    wsPort: 6001,
    forceTLS: false,
    disableStats: true
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
