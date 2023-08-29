import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({ 
      mockPath: "./src/mock/",
      localEnabled: true,
      supportTs: false,
      logger: true
    })
  ],
  resolve:{
    alias: {
      '@': path.resolve(__dirname, './src'),
      '*': path.resolve('')
    }
  },
  server: {
    port: 8000,
    open: true
  }
})
