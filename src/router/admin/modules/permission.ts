export default [
  {
    path: 'permission',
    name: 'admin:permission',
    component: () => import('@/views/admin/form/index.vue'),
    meta: {
      requiresAuth: true,
      roles: ['super']
    }
  }
]
