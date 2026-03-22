import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({

  plugins: [react()],
  base: '/Pr_13/' // тут название репозитория 
}) 