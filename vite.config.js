import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  // Get the correct base URL depending on the build mode

  return {
    base: '/covidstats/',
    plugins: [react()]
  };
});
