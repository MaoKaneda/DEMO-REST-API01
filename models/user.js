// ユーザーデータをモデル化する関数
const modelUser = (userData) => {

  console.log('creating user', userData);
  return { id: 'someUniqueId', ...userData };    

}

// メールアドレスからユーザーを検索する関数
//今からテスト
const findUserByEmail = (email) => {

  console.log('finding user by email', email);
  return { id: 'someUniqueId', email: email };
}

module.exports = {
  createUser,
  findUserByEmail,
}