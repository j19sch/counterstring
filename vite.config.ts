/// <reference types="vitest/config" />

import { defineConfig } from "vite";
// import { defineConfig } from 'vitest/config'  // creates issue with preact() plugin

import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  base: "/counterstring/",
  test: {
    // works, despite overload complaint
    globals: true, // testing-library cleanup by vitest
    environment: "jsdom",
    setupFiles: ["src/vitest-setup.ts"],
  },
});
