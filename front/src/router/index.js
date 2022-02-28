import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/store-manager',
    name: 'StoreManagerPage',
    component: () => import(/* webpackChunkName: "StoreManagerPage" */ '../views/StoreManagerPage.vue')
  },
  {
    path: '/rse-manager',
    name: 'RSEManagerPage',
    component: () => import(/* webpackChunkName: "RSEManagerPage" */ '../views/RSEManagerPage.vue')
  },
  {
    path: '/test',
    name: 'TestPage',
    component: () => import(/* webpackChunkName: "TestPage" */ '../views/TestPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
