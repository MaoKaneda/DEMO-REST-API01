// 必要なパッケージとコントローラーのインポート
import express from 'express';
import { signup, login } from '../controllers/user.controller.js';

// Expressルーターの初期化
const router = express.Router();

// ユーザー関連のエンドポイント設定
// 新規ユーザー登録用のエンドポイント（POST /user/signup）
router.post('/signup', signup);

// ユーザーログイン用のエンドポイント（POST /user/login）
router.post('/login', login);

// ルーターのエクスポート
export default router; 