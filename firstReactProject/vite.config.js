import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Only if you're using Tailwind's Vite plugin

export default defineConfig({
  plugins: [tailwindcss(), react()],
})
