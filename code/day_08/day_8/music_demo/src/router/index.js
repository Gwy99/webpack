import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    redirect: '/layout/home',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home'),
        meta: {
          title: '首页'
        }
      },
      {
        path: 'search',
        component: () => import('@/views/Search'),
        meta: {
          title: '搜索'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
