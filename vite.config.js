import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
<<<<<<< HEAD
import tailwindcss from '@tailwindcss/vite'; // Importe o plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), 
  ],
});
=======

export default defineConfig({
  plugins: [react()],
});


>>>>>>> 27f5083 (feat: setup inicial com carrossel animado e correções de layout)
