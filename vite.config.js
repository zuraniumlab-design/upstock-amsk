import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import clsx from 'clsx'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), clsx()],
})
