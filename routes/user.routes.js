import express from 'express';
import { signup, login } from '../controllers/user.controller.js';

const router = express.Router();

// ユーザー登録のルート
// このルートでは：
// 1. 新しいユーザーがアプリに登録する時に使います
// 2. ユーザー名やパスワードなどの情報を送ってもらいます
// 3. POSTというのは、データを送信する方法の一つです（手紙を投函するようなイメージ）
router.post('/signup', signup);

// ログインのルート
// このルートでは：
// 1. すでに登録済みのユーザーがアプリを使い始める時に使います
// 2. ユーザー名とパスワードを確認して、本人確認を行います
// 3. これは、お店のメンバーカードを提示して入店するようなものです
router.post('/login', login);

export default router; 