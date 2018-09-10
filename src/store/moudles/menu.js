import router from '@/router'
import {datas} from '@/components/common/js/outreach'

const state = {
  menu: JSON.parse(sessionStorage.getItem('menu')) || [], // 主菜单
  menuActive: sessionStorage.getItem('menuActive') || '/', // 激活主菜单
  menuOpened: sessionStorage.getItem('menuOpened') || '' // 展开子菜单
};

const getters = {
  getMenu: state => state.menu,
  getMenuActive: state => state.menuActive,
  getMenuOpened: state => state.menuOpened
};

const mutations = {
  // 获取菜单
  MENU: (state, data) => {
    state.menu = data; // 获取菜单
    sessionStorage.setItem('menu', JSON.stringify(data))
  },
  // 选择菜单
  MENU_SELECT: (state, data) => {
    router.push(data.path); // 路由跳转
    state.menuActive = data.menuActive; // 选择菜单
    state.menuOpened = data.menuOpened; // 展开菜单
    sessionStorage.setItem('menuActive', data.menuActive);
    sessionStorage.setItem('menuOpened', data.menuOpened);
  },
  // 重置菜单
  MENU_RESET: (state) => {
    router.push('/login'); // 路由跳转
    state.menu = [];
    state.menuActive = '1';
    state.menuOpened = '1-1';
    sessionStorage.clear()
  }
};

const actions = {
  handleMenu: ({commit}) => {
    commit('MENU', datas.Items);
    let data = {
      path: '/main_min',
      menuActive: '1-1',
      menuOpened: '1'
    };
    commit('MENU_SELECT', data);
  }
};

export default {state, getters, mutations, actions}
