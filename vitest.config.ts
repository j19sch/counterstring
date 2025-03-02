import { defineConfig, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default defineConfig(() =>
  mergeConfig(
    viteConfig,
    defineConfig({
      test: {
        include: ["**/*.test.ts?(x)"],
        globals: true, // testing-library cleanup by vitest
        environment: "jsdom",
        setupFiles: ["src/vitest-setup.ts"],
      },
    }),
  ),
);
