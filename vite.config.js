import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Get the correct base URL depending on the build mode
  const base = mode === 'production' ? '/yourprojectname/' : '/';

  return {
    base,
    plugins: [react(), reactRefresh()],
    build: {
      outDir: 'docs',
      assetsDir: '',
      rollupOptions: {
        input: '/src/index.html',
      },
    },
  };
});
