import Layout from '@/layout/index.vue'

const modules = import.meta.globEager('./modules/**/*.ts')
import routes from '@/utils/route-modules'

const adminRoutes = [
  {
    path: '/admin',
    name: 'admin',
    component: Layout,
    redirect: '/admin/index',
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'index',
        name: 'admin:index',
        component: () => import('@/views/admin/index.vue'),
        meta: {
          requiresAuth: true
        }
      },
      ...routes(modules)
    ]
  }
]
export default adminRoutes
