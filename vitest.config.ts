import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import viteConfig from "./vite.config";

export default defineConfig({
  ...viteConfig,
  plugins: [
    vue({
      /*template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("v-"),
        },
      },*/
    }),
  ],
  test: {
    setupFiles: "vitest.setup.ts",
    deps: {
      inline: ["vuetify"],
    },
    globals: true,
    environment: "jsdom",
    coverage: { provider: "c8" },
  },
});
