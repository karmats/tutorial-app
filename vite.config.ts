/// <reference types="vitest" />
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3000,
    hmr: {
      port: 3001,
    },
  },
  test: {
    deps: {
      inline: ["vuetify"],
    },
    globals: true,
    environment: "jsdom",
    coverage: { provider: "c8" },
  },
});
