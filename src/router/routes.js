export default[
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: resolve => {
      require(['@/components/HelloWorld'], resolve)
    }
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      requireAuth: false
    },
    component: resolve => {
      require(['@/components/login'], resolve)
    }
  },
  {
    path: '/',
    name: 'index',
    component: resolve => {
      require(['@/components/index'], resolve)
    }
  }
]
