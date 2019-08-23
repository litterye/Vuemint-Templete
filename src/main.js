import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './utils/rem' // rem适配
Vue.use(mint)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
