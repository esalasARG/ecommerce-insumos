import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/ecommerce-insumos/", // 👈 Agregado para que GitHub Pages cargue bien los archivos
  plugins: [react()],
})