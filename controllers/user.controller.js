// 仮のユーザーデータ保存用（後でデータベースに置き換え予定）
const users = [];

export const signup = (req, res) => {
  try {
    const { email, password, username } = req.body;
    
    // 簡単な入力チェック
    if (!email || !password || !username) {
      return res.status(400).json({ 
        message: '全ての項目を入力してください' 
      });
    }

    // メールアドレスの重複チェック
    const userExists = users.find(user => user.email === email);
    if (userExists) {
      return res.status(400).json({ 
        message: 'このメールアドレスは既に登録されています' 
      });
    }

    // 新しいユーザーを作成
    const newUser = {
      email,
      password, // 注意: 実際の実装ではパスワードをハッシュ化する必要があります
      username,
      createdAt: new Date()
    };

    users.push(newUser);

    res.status(201).json({
      message: 'ユーザー登録が完了しました',
      user: {
        email: newUser.email,
        username: newUser.username
      }
    });

  } catch (error) {
    res.status(500).json({ 
      message: 'サーバーエラーが発生しました' 
    });
  }
};

export const login = (req, res) => {
  try {
    const { email, password } = req.body;

    // 簡単な入力チェック
    if (!email || !password) {
      return res.status(400).json({ 
        message: 'メールアドレスとパスワードを入力してください' 
      });
    }

    // ユーザーを探す
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      return res.status(401).json({ 
        message: 'メールアドレスまたはパスワードが間違っています' 
      });
    }

    res.status(200).json({
      message: 'ログインに成功しました',
      user: {
        email: user.email,
        username: user.username
      }
    });

  } catch (error) {
    res.status(500).json({ 
      message: 'サーバーエラーが発生しました' 
    });
  }
}; 