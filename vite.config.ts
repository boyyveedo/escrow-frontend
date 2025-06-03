// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// // import basicSsl from "@vitejs/plugin-basic-ssl";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   // plugins: [react(), basicSsl()],
//   server: {
//     host: true,
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
