// eslint.config.js
const cypressPlugin = require("eslint-plugin-cypress");
const prettierPlugin = require("eslint-plugin-prettier");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "2021"
    },
    env: {
      browser: true,
      commonjs: true,
      es2021: true,
      node: true,
      "cypress/globals": true
    },
    plugins: {
      cypress: cypressPlugin,
      prettier: prettierPlugin
    },
    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "single"],
      semi: ["error", "never"],
      "no-trailing-spaces": ["error"],
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          tabWidth: 2,
          printWidth: 110,
          semi: false
        }
      ]
    }
  }
];
