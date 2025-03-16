// データの一時保存用
// 本番環境ではデータベースを使用する
const users = [];

// ユーザー登録処理
export const signup = (req, res) => {
  try {
    // リクエストボディからユーザー情報を取得
    const { email, password, username } = req.body;
    
    // 必須項目の入力チェック
    if (!email || !password || !username) {
      return res.status(400).json({ 
        message: '全ての項目を入力してください' 
      });
    }

    // メールアドレスの重複確認
    const userExists = users.find(user => user.email === email);
    if (userExists) {
      return res.status(400).json({ 
        message: 'このメールアドレスは既に登録されています' 
      });
    }

    // 新規ユーザーデータの作成と保存
    const newUser = {
      email,
      password, // 本番環境ではハッシュ化が必要
      username,
      createdAt: new Date()
    };

    // 配列にユーザーを追加
    users.push(newUser);

    // 登録成功レスポンスの送信
    res.status(201).json({
      message: 'ユーザー登録が完了しました',
      user: {
        email: newUser.email,
        username: newUser.username
      }
    });

  } catch (error) {
    // エラー発生時のエラーレスポンス送信
    res.status(500).json({ 
      message: 'サーバーエラーが発生しました' 
    });
  }
};

// ユーザーログイン処理
export const login = (req, res) => {
  try {
    // リクエストボディからログイン情報を取得
    const { email, password } = req.body;

    // 必須項目の入力チェック
    if (!email || !password) {
      return res.status(400).json({ 
        message: 'メールアドレスとパスワードを入力してください' 
      });
    }

    // ユーザー認証（メールアドレスとパスワードの検証）
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      return res.status(401).json({ 
        message: 'メールアドレスまたはパスワードが間違っています' 
      });
    }

    // ログイン成功レスポンスの送信
    res.status(200).json({
      message: 'ログインに成功しました',
      user: {
        email: user.email,
        username: user.username
      }
    });

  } catch (error) {
    // エラー発生時のエラーレスポンス送信
    res.status(500).json({ 
      message: 'サーバーエラーが発生しました' 
    });
  }
}; 