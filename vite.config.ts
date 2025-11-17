import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This matches your GitHub repository name.
  // URL will be: https://ranjeetk12.github.io/venue-match/
  base: '/venue-match/', 
  build: {
    outDir: 'dist',
  }
});