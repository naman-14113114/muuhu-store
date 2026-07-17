const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    "next/core-web-vitals",
  ],
  env: {
    node: true,
    browser: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off"
  },
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
};
