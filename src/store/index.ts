import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import useUserStore from './auth'

const pinia = createPinia()
// 数据可持续化插件 pinia-plugin-persist
pinia.use(piniaPersist)

export { useUserStore }
export default pinia
