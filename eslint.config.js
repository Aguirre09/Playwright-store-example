import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [
  {
    files: ["**/*.ts"], // Solo revisa archivos TypeScript
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "semi": ["error", "always"], // Obliga a usar punto y coma
      "no-unused-vars": "warn",    // Avisa si hay variables sin usar
      "@typescript-eslint/no-explicit-any": "warn", // Avisa si usas 'any'
    },
  },
];