import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    roles?: string[] // Controls roles that have access to the page
    requiresAuth: boolean // Whether login is required to access the current page (every route must declare)
    icon?: string // The icon show in the side menu
    locale?: string // The locale name show in side menu and breadcrumb
    order?: number // Sort routing menu items. If set key, the higher the value, the more forward it is·
    ignoreCache?: boolean // if set true, the page will not be cached
  }
}
