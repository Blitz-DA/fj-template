export default [
  {
    path: 'form',
    name: 'admin:form',
    component: () => import('@/views/admin/form/index.vue'),
    meta: {
      requiresAuth: true,
      roles: ['*']
    }
  }
]
