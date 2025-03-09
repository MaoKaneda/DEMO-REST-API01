import express from 'express';
import { signup, login } from '../controllers/user.controller.js';

const router = express.Router();

// ユーザー登録のルート
router.post('/signup', signup);

// ログインのルート
router.post('/login', login);

export default router; 