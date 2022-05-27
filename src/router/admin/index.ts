import Layout from '@/layout/index.vue'
const adminRoutes = [
  {
    path: '/admin',
    name: 'admin',
    component: Layout,
    redirect: '/admin/index',
    children: [
      {
        path: 'index',
        name: 'admin:index',
        component: () => import('@/views/admin/index.vue'),
        meta: {}
      }
    ]
  }
]
export default adminRoutes
