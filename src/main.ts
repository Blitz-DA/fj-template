import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/base.scss'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import 'element-plus/es/components/message/style/css'

import '@/api/interceptor'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
