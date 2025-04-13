import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 🛠 Add define option:
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': '"development"',
  },
})
