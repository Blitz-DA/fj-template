import type {
  Router,
  LocationQueryRaw,
  RouteLocationNormalized,
  RouteRecordRaw
} from 'vue-router'
import { useUserStore } from '@/store'
// import NProgress from 'nprogress' // progress bar

export default function setupPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore()

    async function crossroads() {
      function accessRouter(route: RouteLocationNormalized | RouteRecordRaw) {
        return (
          !route.meta?.requiresAuth ||
          !route.meta?.roles ||
          route.meta?.roles?.includes('*') ||
          route.meta?.roles?.includes(userStore.uesrInfo?.role)
        )
      }
      if (accessRouter(to)) next()
      else {
        next({
          name: 'notFound'
        })
      }
    }

    if (userStore.token) {
      if (userStore.uesrInfo?.role) {
        crossroads()
      } else {
        try {
          await userStore.getmenuList()
          crossroads()
        } catch (error) {
          next({
            name: 'login',
            query: {
              redirect: to.name,
              ...to.query
            } as LocationQueryRaw
          })
        }
      }
    } else {
      if (to.name === 'login') {
        next()
        return
      }
      next({
        name: 'login',
        query: {
          redirect: to.name,
          ...to.query
        } as LocationQueryRaw
      })
    }
  })
}
