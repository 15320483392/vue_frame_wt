import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/routes'
import store from '@/store'

Vue.use(Router);

// 路由配置
const RouterConfig = {
  routes
};

const router = new Router(RouterConfig);

router.beforeEach((to, from, next) => {
  // 是否需要登陆
  console.log('=====>' + to.meta.requireAuth + '--->' + to.path);
  if (to.path !== '/login') {
    // 是否已经登陆
    if (store.state.Login.token) {
      next();
    } else {
      next({
        path: '/login',
        // 将跳转的路由path作为参数，登录成功后跳转到该路由
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next();
  }
});

export default router
