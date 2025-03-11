// データの一時保存場所
// 1. usersという配列（箱）を用意して、ユーザーの情報を一時的に保存します
// 2. 実際のアプリでは、データベース（大きな倉庫のようなもの）を使います
// 3. これは練習用の簡単な保存方法です
const users = [];

export const signup = (req, res) => {
  try {
    const { email, password, username } = req.body;
    
    // 入力内容の確認
    // 1. 必要な情報（メール、パスワード、ユーザー名）が全部あるか確認します
    // 2. これは、申込書の必須項目が全部埋まっているか確認するようなものです
    if (!email || !password || !username) {
      return res.status(400).json({ 
        message: '全ての項目を入力してください' 
      });
    }

    // メールアドレスの重複チェック
    // 1. 同じメールアドレスで既に登録されていないか確認します
    // 2. これは、同じ人が二重に登録するのを防ぐためです
    const userExists = users.find(user => user.email === email);
    if (userExists) {
      return res.status(400).json({ 
        message: 'このメールアドレスは既に登録されています' 
      });
    }

    // 新しいユーザーの作成
    // 1. 入力された情報を使って、新しいユーザーの情報をまとめます
    // 2. createdAtは、ユーザーが作られた日時を記録します
    // 3. 実際のアプリでは、パスワードは暗号化して保存する必要があります
    const newUser = {
      email,
      password,
      username,
      createdAt: new Date()
    };

    users.push(newUser);

    // 登録完了の応答
    // 1. 201は「新しい情報が作られました」という意味のステータスコードです
    // 2. ユーザーに登録完了のメッセージと、登録された情報の一部を返します
    res.status(201).json({
      message: 'ユーザー登録が完了しました',
      user: {
        email: newUser.email,
        username: newUser.username
      }
    });

  } catch (error) {
    // エラー処理
    // 1. プログラムの実行中に問題が起きた場合の対応です
    // 2. 500は「サーバーで問題が起きました」という意味のステータスコードです
    res.status(500).json({ 
      message: 'サーバーエラーが発生しました' 
    });
  }
};

export const login = (req, res) => {
  try {
    const { email, password } = req.body;

    // ログイン情報の確認
    // 1. メールアドレスとパスワードが入力されているか確認します
    // 2. これは、お店に入る時に会員カードを持っているか確認するようなものです
    if (!email || !password) {
      return res.status(400).json({ 
        message: 'メールアドレスとパスワードを入力してください' 
      });
    }

    // ユーザー認証
    // 1. 入力されたメールアドレスとパスワードが正しいか確認します
    // 2. これは、会員カードが本物かチェックするようなものです
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      return res.status(401).json({ 
        message: 'メールアドレスまたはパスワードが間違っています' 
      });
    }

    // ログイン成功の応答
    // 1. 200は「リクエストが成功しました」という意味のステータスコードです
    // 2. ログイン成功のメッセージと、ユーザーの基本情報を返します
    res.status(200).json({
      message: 'ログインに成功しました',
      user: {
        email: user.email,
        username: user.username
      }
    });

  } catch (error) {
    // エラー処理
    // 1. 予期せぬ問題が起きた時の対応です
    // 2. ユーザーにエラーメッセージを返します
    res.status(500).json({ 
      message: 'サーバーエラーが発生しました' 
    });
  }
}; 