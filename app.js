// 必要なパッケージのインポート
import express from 'express';
import userRoutes from './routes/user.routes.js';

// Expressアプリケーションの初期化
const app = express();
// 環境変数からポート番号を取得、なければ3000を使用
const PORT = process.env.PORT || 3000;

// ミドルウェア設定
// お客様からのデータをJSONとして受け取るための設定
app.use(express.json());

// ルート設定
// /userで始まるURLはすべてuserRoutesで処理
app.use('/user', userRoutes);

// サーバー起動
// ポート3000番でサーバーを起動
app.listen(PORT, () => {
  console.log(`サーバーが起動しました - ポート ${PORT}`);
});

// アプリケーションのエクスポート（テスト用）
export default app;
