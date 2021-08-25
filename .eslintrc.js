module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "max-classes-per-file": ["error", 4],
    "no-shadow": "off",
    "no-restricted-syntax": "off",
    "no-undef": "off",
    "no-return-assign": "off",
    "no-console": "off",
  },
};
