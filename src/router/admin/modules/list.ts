export default [
  {
    path: 'list/seach',
    name: 'admin:list:seach',
    component: () => import('@/views/admin/list/index.vue'),
    meta: {
      requiresAuth: true,
      roles: ['*']
    }
  }
]
