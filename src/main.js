import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/index.css'
import router from './router'
import Axios from 'axios'
Vue.prototype.$http = Axios
Axios.defaults.baseURL = "http://localhost:3000";

new Vue({
  el: '#app',
  router, //挂载
  render: h => h(App)
})
