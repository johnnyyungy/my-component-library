import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.js'), // Entry point
      name: 'MyComponentLibrary', // Library name
      fileName: (format) => `my-component-library.${format}.js`, // Output file name
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Peer dependencies
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});