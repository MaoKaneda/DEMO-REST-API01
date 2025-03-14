import express from 'express';
import { signup, login } from '../controllers/user.controller.js';

const router = express.Router();

// 新規ユーザー登録用のエンドポイント
router.post('/signup', signup);

// ユーザーログイン用のエンドポイント
router.post('/login', login);

export default router; 