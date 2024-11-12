export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: require("eslint-plugin-react"),
    },
    rules: {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
