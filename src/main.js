import Vue from 'vue'
// import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import store from './store'
import 'assets/less/reset.less'
import './antdComponents'
import VueI18n from 'vue-i18n'
import './directives'
// import 'ant-design-vue/dist/antd.css';
// import './rule'
Vue.use(VueI18n)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
