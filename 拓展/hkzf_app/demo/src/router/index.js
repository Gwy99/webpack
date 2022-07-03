import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'layout'
  },
  {
    path: '/layout',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/',
        component: () => import('@/views/Home')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
