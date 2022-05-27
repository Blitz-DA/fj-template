import { createRouter, createWebHistory } from 'vue-router'
import adminRoutes from './admin/index'
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
        requiresAuth: false
      }
    },
    ...adminRoutes
  ]
})

export default router
