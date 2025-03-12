# Demo REST API

シンプルなユーザー認証機能を持つRESTful APIのデモアプリケーションです。

## 機能

- ユーザー登録（/user/signup）
- ユーザーログイン（/user/login）

## 必要な環境

- Node.js (v18以上推奨)
- npm (Node.jsに付属)

## セットアップ方法

1. 依存パッケージのインストール:
```bash
npm install
```

2. 環境変数の設定:
`.env`ファイルに以下の設定を行います：
```
PORT=3000
```

## 起動方法

### 開発モード（自動再起動あり）
```bash
npm run dev
```

### 本番モード
```bash
npm start
```

## APIエンドポイント

### ユーザー登録
- URL: POST /user/signup
- ボディ:
```json
{
  "email": "user@example.com",
  "password": "password123",
  "username": "testuser"
}
```

### ログイン
- URL: POST /user/login
- ボディ:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
``` 