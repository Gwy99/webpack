import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vant from './plugins/vant'

// 引入css
import '@/styles/reset.css'
Vue.use(vant)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
