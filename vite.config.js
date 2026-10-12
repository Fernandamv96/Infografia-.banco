import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// En GitHub Pages el sitio vive en /Infografia-.banco/; en local se sirve desde la raíz.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' && process.env.GITHUB_PAGES ? '/Infografia-.banco/' : '/',
}))
