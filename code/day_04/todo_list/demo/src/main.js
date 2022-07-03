import Vue from 'vue'
import App from './App.vue'

// 1.0 样式引入
import './styles/base.css'
import './styles/index.css'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
