import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('../view/index.vue')
const Test = () => import('../view/test.vue')

Vue.use(Router)

let router = new Router({
  base: '/track',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/',
      name: 'Test',
      component: Test
    }
  ]
})

// 前置
router.beforeEach((to, from, next) => {
  next()
})
// 后置
router.afterEach((to, from) => {
})

export default router
