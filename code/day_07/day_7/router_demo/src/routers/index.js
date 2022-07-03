import VueRouter from 'vue-router'
import { NotFound } from '@/views/NotFound'
import Vue from 'vue'
Vue.use(VueRouter)

const routes = [
  {
    name: '发现音乐',
    path: '/find',
    component: () => import('@/views/DiscoveryMusic')
  },
  {
    name: '我的音乐',
    path: '/my/:musicName',
    component: () => import('@/views/MyMusic')
  },
  {
    name: '我的朋友', // 必须写name属性
    path: '/part', // params传参，对象形式不需要路由占位
    redirect: '/part/lisi',
    component: () => import('@/views/MyFriends'),
    children: [
      {
        path: '/part/lisi',
        component: () => import('@/views/LiSi')
      },
      {
        path: '/part/zhangsan',
        component: () => import('@/views/ZhangSan')
      }
    ]
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const isLogin = false
router.beforeEach((to, from, next) => {
  if (!isLogin && to.path === '/my') {
    next(false)
  } else {
    next()
  }
})
export default router
