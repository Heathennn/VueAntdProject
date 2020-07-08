import Vue from 'vue'
// import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import store from './store'
import 'assets/less/reset.less'
import './antdComponents'
// import 'ant-design-vue/dist/antd.css';
// import './rule'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
