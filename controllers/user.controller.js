// 一時的なユーザーデータ保存用の配列
const users = [];

export const signup = (req, res) => {
  try {
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

    // 新規ユーザーデータの作成
    const newUser = {
      email,
      password,
      username,
      createdAt: new Date()
    };

    users.push(newUser);

    // 登録成功レスポンス
    res.status(201).json({
      message: 'ユーザー登録が完了しました',
      user: {
        email: newUser.email,
        username: newUser.username
      }
    });

  } catch (error) {
    // エラー発生時の処理
    res.status(500).json({ 
      message: 'サーバーエラーが発生しました' 
    });
  }
};

export const login = (req, res) => {
  try {
    const { email, password } = req.body;

    // 必須項目の入力チェック
    if (!email || !password) {
      return res.status(400).json({ 
        message: 'メールアドレスとパスワードを入力してください' 
      });
    }

    // ユーザー認証
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      return res.status(401).json({ 
        message: 'メールアドレスまたはパスワードが間違っています' 
      });
    }

    // ログイン成功レスポンス
    res.status(200).json({
      message: 'ログインに成功しました',
      user: {
        email: user.email,
        username: user.username
      }
    });

  } catch (error) {
    // エラー発生時の処理
    res.status(500).json({ 
      message: 'サーバーエラーが発生しました' 
    });
  }
}; 