import { defineConfig as defineViteConfig, mergeConfig } from "vite";
import { configDefaults, defineConfig as defineVitestConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

const viteConfig = defineViteConfig({
  plugins: [react()],
});

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    exclude: [...configDefaults.exclude, "e2e/*"],
  },
});

export default mergeConfig(viteConfig, vitestConfig);
