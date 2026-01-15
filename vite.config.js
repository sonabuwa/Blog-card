import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // remove if not using React

export default defineConfig({
  base: '/Blog-card/', // <-- important for project sites on GitHub Pages
  plugins: [react()]
})
