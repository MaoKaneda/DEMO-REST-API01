import express from 'express';
import userRoutes from './routes/user.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// ミドルウェアの設定
app.use(express.json());

// ルートの設定
app.use('/user', userRoutes);

// サーバーの起動
app.listen(PORT, () => {
  console.log(`サーバーが起動しました - ポート ${PORT}`);
});

export default app;
