import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Esta é a linha mais importante!
  // Ela diz ao Vite que seu projeto será servido a partir do subdiretório /COP30/
  base: '/COP30/',
})