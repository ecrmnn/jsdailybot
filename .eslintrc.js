module.exports = {
  extends: 'airbnb-base',
  parserOptions: {
    sourceType: 'script',
  },
  plugins: [
    'import',
  ],
  rules: {
    'curly': [
      'error',
      'all',
    ],
    'brace-style': [
      'error',
      '1tbs',
      { 'allowSingleLine': false },
    ],
    'no-console': 'error',
    'no-ternary': 'error',
    'newline-before-return': 'error',
  },
};
