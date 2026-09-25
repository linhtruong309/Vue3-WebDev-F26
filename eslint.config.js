import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import markdown from '@eslint/markdown';
import css from '@eslint/css';

export default [
  {
    ignores: ['node_modules', 'dist', 'flashword/dist'],
  },
  // JavaScript files
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.browser,
    },
    ...pluginJs.configs.recommended,
  },
  // Vue files (.vue), JavaScript files (.js), and HTML files (.html) with Vue code.
  // - Parser config (index 1) is extended to handle .html in addition to .vue.
  // - Rules config (index 2) is scoped to .vue, .js, and .html files.
  ...pluginVue.configs['flat/strongly-recommended'].map((config) => {
    if (config.files) {
      // Parser / processor config: extend to HTML so vue-eslint-parser handles it
      return { ...config, files: [...config.files, '**/*.html'] };
    }
    if (config.rules) {
      // Rules config: scope to .vue, .js, and .html
      return { ...config, files: ['**/*.vue', '**/*.js', '**/*.html'] };
    }
    // Global language options (index 0): keep unrestricted
    return config;
  }),
  // Enforce v-bind: and v-on: longform instead of : and @ shortcuts
  {
    files: ['**/*.vue', '**/*.js', '**/*.html'],
    rules: {
      'vue/v-bind-style': ['error', 'longform'],
      'vue/v-on-style': ['error', 'longform'],
    },
  },
  // Markdown files (checks JavaScript code blocks)
  ...markdown.configs.recommended,
  // CSS files
  {
    files: ['**/*.css'],
    language: 'css/css',
    plugins: { css },
    rules: {
      ...css.configs.recommended.rules,
    },
  },

  // Configuration for the flashword-vite project
  {
    files: ['web-projects/flashword-vite/**/*.vue'],
    rules: {
      'vue/require-v-for-key': 'off',
      'vue/html-self-closing': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/v-on-event-hyphenation': 'off',
    },
  },

  // Configuration for the flashword-vite project Cypress tests
  {
    files: [
      'web-projects/flashword-vite/**/*.cy.js',
      'web-projects/flashword-vite/cypress.config.js',
    ],
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off',
    },
  },
];
