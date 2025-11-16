import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // 1. ONDE ESTÁ O 'index.html' (Correto)
  root: path.resolve(__dirname, 'client'),

  // 2. ONDE SALVAR O BUILD (Corrigido)
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    // Adiciona esta linha para corrigir o aviso e limpar a pasta 'dist'
    emptyOutDir: true,
  },
  
  // 3. 'base' PARA O GITHUB PAGES (Correto)
  base: '/COP30/',

  // 4. ATUALIZADO: Corrige os aliases
  resolve: {
    alias: {
      // O atalho '@' aponta para a pasta 'client/src'
      '@': path.resolve(__dirname, 'client/src'),
      // ATUALIZADO: O atalho '@assets' aponta para 'attached_assets'
      '@assets': path.resolve(__dirname, 'attached_assets'),
    },
  },
})