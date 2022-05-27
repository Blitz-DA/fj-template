import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import useUserStore from './auth'

const pinia = createPinia()
pinia.use(piniaPersist)

export { useUserStore }
export default pinia
