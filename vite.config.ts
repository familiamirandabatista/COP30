import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // 1. DIZ AO VITE ONDE ESTÁ O 'index.html'
  //    Agora está correto, usando 'client'
  root: path.resolve(__dirname, 'client'),

  // 2. DIZ AO VITE ONDE SALVAR O BUILD
  //    Isto já estava correto (salvando em 'SuaAjuda/dist')
  build: {
    outDir: path.resolve(__dirname, 'dist')
  },
  
  // 3. ISSO JÁ ESTAVA CORRETO (PARA O GITHUB PAGES)
  base: '/COP30/',
})