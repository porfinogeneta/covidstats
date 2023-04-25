import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Get the correct base URL depending on the build mode
  const base = mode === 'production' ? '/yourprojectname/' : '/';

  return {
    base: '/<REPO>/',
    plugins: [react()]
  };
});
