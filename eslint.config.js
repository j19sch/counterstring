import globals from "globals";
import pluginJs from "@eslint/js";
// import eslint from '@eslint/js';
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{ts,tsx}"] },
  { ignores: ["dist/"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  // ...tseslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
];

// export default tseslint.config(
//   eslint.configs.recommended,
//   // tseslint.configs.recommended,
//   tseslint.configs.strict,
// );
