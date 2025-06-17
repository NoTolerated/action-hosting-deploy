// eslint.config.js
import js from "@eslint/js";

/** @type {import("eslint").FlatESLintConfigItem[]} */
export default [
  // 1. Start from the recommended JS config
  js.configs.recommended,

  // 2. Then override (or extend) with languageOptions
  {
    // You can scope this to specific files if you like:
    // files: ["**/*.{js,jsx,ts,tsx}"],

    languageOptions: {
      // allow trailing commas in places like function params, imports, etc.
      allowTrailingCommas: true,
    },

    // If you have rule tweaks, put them here too:
    rules: {
      // example: enforce trailing commas in multiline structures
      "comma-dangle": ["error", "always-multiline"],
    },
  },
];
