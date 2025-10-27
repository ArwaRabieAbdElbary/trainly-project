import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: [".vscode/**", "node_modules/**", "dist/**", "functions/node_modules/**", "src/**/*.vue", "src/**/*.css"] },
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    ...js.configs.recommended,
    languageOptions: { 
      globals: globals.browser,
      sourceType: "module"
    } 
  },
  {
    files: ["functions/**/*.js"],
    languageOptions: {
      globals: {
        require: "readonly",
        exports: "readonly",
        module: "readonly",
      },
      sourceType: "script",
    },
  },
];
