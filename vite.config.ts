import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: path.join(__dirname, 'src/vite'),
  base: `/${path.join(__dirname, 'out')}/`,
  build: {
    outDir: '../../out',
    emptyOutDir: true
  },
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
      styles: 'none' // Error on expose
    })
  ]
})
