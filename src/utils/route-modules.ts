import type { RouteRecordRaw } from 'vue-router'

export default function RouteModul(modules) {
  const routes: RouteRecordRaw[] = []
  Object.keys(modules).forEach((key) => {
    const defaultModule = modules[key].default
    if (!defaultModule) return
    const moduleList = Array.isArray(defaultModule)
      ? [...defaultModule]
      : [defaultModule]
    routes.push(...moduleList)
  })
  return routes
}
