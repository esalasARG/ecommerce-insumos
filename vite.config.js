import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/ecommerce-insumos/", // 👈 Agregado para que GitHub Pages cargue bien los archivos
  plugins: [react()],
})