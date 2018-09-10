import Vue from 'vue'
import Vuex from 'vuex'

// vuex模块引入
import login from '@/store/moudles/login'
import user from '@/store/moudles/user'
import menu from '@/store/moudles/menu'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    User: user,
    Login: login,
    Menu: menu
  }
})
