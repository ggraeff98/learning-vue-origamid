import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

// Vue.config.productionTip = false
/* eslint-disable no-new */

Vue.use(VueRouter)

const router = new VueRouter({

})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
