export default[
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
