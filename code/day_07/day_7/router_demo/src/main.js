import Vue from 'vue'
import App from './App.vue'
import router from '@/routers'
import vant from '@/plugins/vant'
Vue.use(vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
