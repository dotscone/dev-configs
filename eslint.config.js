/**
 * 汎用ESLint設定 - React + TypeScript プロジェクト用
 * Chaos Cafeで検証済みの設定を汎用化
 */

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(
  { ignores: ['dist', 'build', 'node_modules'] },
  {
    extends: [
      js.configs.recommended, 
      ...tseslint.configs.recommended,
      prettierConfig, // Prettierとの競合ルールを無効化
    ],
    files: ['**/*.{ts,tsx}'],
    ignores: ['vite.config.ts', 'eslint.config.js'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettier, // Prettier連携
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      
      // ✨ Prettier連携 - Format Documentで改行ルールも適用
      'prettier/prettier': 'error',
      
      // 🔥 厳しめTypeScript設定
      '@typescript-eslint/no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/no-array-constructor': 'error',
      
      // 🎯 React/JSX厳密化
      'react-hooks/exhaustive-deps': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'no-console': 'warn',
      
      // 💄 コード品質
      'eqeqeq': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      
      // ✨ 改行・フォーマット（美しいコード用）
      'padding-line-between-statements': [
        'error',
        // const/let/var ブロック前後に改行
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        
        // return前に改行
        { blankLine: 'always', prev: '*', next: 'return' },
        
        // 関数定義前後に改行
        { blankLine: 'always', prev: '*', next: 'function' },
        { blankLine: 'always', prev: 'function', next: '*' },
        
        // import文後に改行
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'any', prev: 'import', next: 'import' },
        
        // export文前に改行
        { blankLine: 'always', prev: '*', next: 'export' },
        
        // ディレクティブ後に改行
        { blankLine: 'always', prev: 'directive', next: '*' },
      ],
      
      // クラスメンバー間に改行
      'lines-between-class-members': ['error', 'always'],
    },
  },
)
