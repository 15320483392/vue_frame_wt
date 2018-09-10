import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // 引入监听模块
import iView from 'iview' // 引入iviewUI
import 'iview/dist/styles/iview.css' // 引入iview css
import Vuex from 'vuex' // 引入vuex
import './config/axios'

Vue.use(Vuex); // 引用vuex

Vue.config.productionTip = false;

Vue.use(iView); // 引用UI控件

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
