import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routes from './routes/routes'

Vue.use(VueRouter)

import './assets/css/main.css'

import axios from 'axios'
Vue.prototype.$http = axios

Vue.prototype.$appUrl = 'http://localhost:8080'

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')