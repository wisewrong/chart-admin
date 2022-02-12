const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react-hooks', 'unused-imports'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  env: {
    'browser': true,
    'node': true,
  },
  rules: {
    '@typescript-eslint/no-empty-function': WARNING,
    'no-unused-vars': WARNING,
    'no-debugger': WARNING,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};