import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig(({ command }) => ({
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
    }),
  ],

  base: '/',
  server: {
    proxy: {
      '/vrc-api': {
        target: 'https://vrc.tl',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/vrc-api/, ''),
      },
      '/vrc-images': {
        target: 'https://vrc.tl',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/vrc-images/, ''),
      },
    },
  },
}))