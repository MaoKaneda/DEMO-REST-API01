import express from 'express';
import userRoutes from './routes/user.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// ミドルウェアの設定
// ミドルウェアとは：
// 1. アプリケーションの中で、リクエスト（お客様からの要求）を受け取ってから
// 2. 応答を返すまでの間に実行される機能のことです
// 3. ここでは、お客様から送られてくるデータをJSONという形式で簡単に扱えるようにしています
app.use(express.json());

// ルートの設定
// ルートとは：
// 1. ウェブサイトのURLのようなもので、お客様がアクセスできる場所を決めます
// 2. 例えば、/userというURLにアクセスすると、ユーザー関連の機能が使えます
// 3. これは、お店でいうと「商品コーナー」や「レジ」のような場所を決めるのと同じです
app.use('/user', userRoutes);

// サーバーの起動
// サーバーとは：
// 1. このプログラムが実際に動く場所です
// 2. PORTは、お客様がアクセスするための入り口の番号です（お店の住所のようなもの）
// 3. ここでは3000番という入り口を使って、プログラムを動かしています
app.listen(PORT, () => {
  console.log(`サーバーが起動しました - ポート ${PORT}`);
});

export default app;
