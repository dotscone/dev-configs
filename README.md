# 🛠️ Dev Configs

React + TypeScript + Vite プロジェクト用の開発環境設定テンプレート

## 📁 構成

```
dev-configs/
├── .prettierrc              # Prettier設定
├── eslint.config.js         # ESLint設定（厳密・改行ルール付き）
├── tsconfig.template.json   # TypeScript設定テンプレート
└── vscode-settings.json    # VS Code設定（手動フォーマット優先）
```

## ✨ 特徴

### ESLint設定
- **厳密なTypeScript**：no-explicit-any、厳しい未使用変数チェック
- **美しい改行ルール**：padding-line-between-statements で自動改行
- **Prettier連携**：Format Document (Shift+Alt+F) で改行ルールも適用
- **React最適化**：react-hooks/exhaustive-deps でhooks依存関係チェック

### VS Code設定
- **手動フォーマット優先**：自動保存フォーマットは無効、手動実行時のみ
- **CRLF/LF問題解決**：endOfLine: "auto" で環境依存問題を回避
- **デバッガー対応**：Chrome/Edge両対応、ソースマップ有効

### TypeScript設定
- **厳密化**：noImplicitReturns、noImplicitOverride
- **現実的バランス**：過度に厳しくせず、開発体験を重視
- **Vite最適化**：bundler mode、isolatedModules対応

## 🚀 使用方法

### Git Submoduleとして使用
```bash
git submodule add git@github.com:<github-user-id>/dev-configs.git dev-configs
```

### 手動コピーで使用
1. 必要なファイルを新プロジェクトにコピー
2. プロジェクトに合わせて設定を微調整
3. `npm install` で依存関係をインストール

## 📦 必要な依存関係

```bash
npm install -D eslint typescript-eslint @eslint/js globals
npm install -D eslint-plugin-react-hooks eslint-plugin-react-refresh
npm install -D eslint-plugin-prettier eslint-config-prettier prettier
```

## 💡 設計思想

- **品質と開発体験のバランス**：厳しすぎず、緩すぎない設定
- **手動フォーマット優先**：開発者の意図を尊重し、必要な時にのみ実行
- **環境依存問題の解決**：Windows/Mac/Linux対応、改行コード自動調整
- **デバッガー重視**：VS Codeでの快適なデバッグ体験

---
*Generated from Chaos Cafe project by コピちゃん 🤖*
