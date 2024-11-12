import reactPlugin from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/react-in-jsx-scope": "off", // React 17+ doesn't need React import
      "react/jsx-no-undef": "error",
      "react/jsx-key": "error",
      "react/jsx-no-duplicate-props": "error",
    },
  },
];
