/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    'vue/setup-compiler-macros': true,
    browser: true,
    es2022: true,
    node: true
  },
  extends: [
    './types/.eslintrc-auto-import.json',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 'off'
    // 'no-console': 'off',
    // 'import/no-unresolved': 'off',
    // 'import/extensions': 'off',
    // 'import/no-extraneous-dependencies': 'off'
  }
}
