import { createRouter, createWebHistory } from 'vue-router'
import adminRoutes from './admin/index'
import setupPermissionGuard from './permission'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      meta: {
        // 是否需要登录
        requiresAuth: false
      }
    },
    ...adminRoutes,
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/views/not-found/index.vue'),
      meta: {
        requiresAuth: false
      }
    }
  ]
})
setupPermissionGuard(router)

export default router
