// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    // No languageOptions.allowTrailingCommas here

    rules: {
      // Allow trailing commas only when multiline
      "comma-dangle": ["error", "always-multiline"],
    },
  },
];
