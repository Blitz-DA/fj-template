import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Unocss from 'unocss/vite'
import unocssOption from './config/plugins/unocss.js'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      resolvers: [ElementPlusResolver()], // 第三方组件库的解析器
      dts: 'types/auto-imports.d.ts', // tsconfig.json => include: ["types/**/*.ts", "types/**/*.d.ts"]
      eslintrc: {
        enabled: true, // Default `false`
        filepath: 'types/.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    Components({
      resolvers: [ElementPlusResolver()], // 解析的 UI 组件库
      dirs: ['src/components/'], // dirs 指定组件所在位置
      extensions: ['vue', 'js', 'ts'], // 配置需要将哪些后缀类型的文件进行自动按需引入
      dts: 'types/components.d.ts',
      directoryAsNamespace: true // 组件名称包含目录，防止同名组件冲突
    }),
    Unocss(unocssOption)
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0'
  }
})
