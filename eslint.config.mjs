import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintConfigPrettier from "eslint-config-prettier";

import tseslint from "typescript-eslint";
import eslint from "@eslint/js";

// Выносим общие правила
const commonRules = {
  "no-empty": ["error", { allowEmptyCatch: true }],
  "no-useless-escape": "off",
};

// Правила для TypeScript
const tsRules = {
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      args: "all",
      argsIgnorePattern: "^_",
      caughtErrors: "all",
      caughtErrorsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      ignoreRestSiblings: true,
    },
  ],
};

export default tseslint.config(
  // Базовые конфигурации
  eslint.configs.recommended,
  {
    ignores: ["**/dist/*", "**/.husky/*"],
  },
  ...tseslint.configs.recommended,
  // TypeScript файлы
  {
    files: ["**/*.ts"],

    plugins: {
      "@typescript-eslint": tseslint.plugin,
      prettier: eslintPluginPrettierRecommended,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {},
    },
    rules: {
      ...commonRules,
      ...tsRules,
    },
  },

  // JavaScript файлы
  {
    files: ["**/*.js"],
    rules: commonRules,
  },

  // Prettier в конце
  eslintConfigPrettier,
);
