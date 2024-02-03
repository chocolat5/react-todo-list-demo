import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    outDir: "docs",
    rollupOptions: {
      output: {
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "assets/images/[name]-[hash][extname]";
          }
          if (/\.css$/.test(name ?? "")) {
            return "assets/[ext]/[name]-[hash][extname]";
          }
          return "assets/[ext]/[name]-[hash][extname]";
        },
      },
    },
  },
  plugins: [react(), legacy({ targets: ["defaults"] })],
  resolve: {
    alias: {
      "@/src": "/src",
    },
  },
});
