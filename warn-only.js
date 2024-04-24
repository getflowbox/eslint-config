module.exports = {
  extends: [
    './rules/best-practices-warn',
    './rules/errors-warn',
    './rules/node-warn',
    './rules/style-warn',
    './rules/variables-warn',
    './rules/es6-warn',
    './rules/imports-warn',
    './rules/react-warn',
    './rules/react-a11y-warn',
    './rules/eslint-comments-warn',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    strict: 'warn'
  },
}
