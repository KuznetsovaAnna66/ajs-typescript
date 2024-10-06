module.exports = {
  env: {
    browser: true, // браузерное окружение
    node: true, // окружение node.js
    es2023: true, // стандарт ECMAScript 2023 (ES14)
    jest: true, // для корректной работы ESLint с Jest
  },
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript/base",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    "no-console": "off", // для отладки
    // добавление нижнего подчеркивания перед приватными свойствами класса:
    // 'no-underscore-dangle': ['error', { allowAfterThis: true }],
  },
};
