import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// router setup
import routes from './routes/routes'

Vue.use(VueRouter)

import './assets/css/main.css'

Vue.config.productionTip = false

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
