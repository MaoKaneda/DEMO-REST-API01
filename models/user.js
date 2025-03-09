const modelUser = (userData) => {

  console.log('creating user', userData);
  return { id: 'someUniqueId', ...userData };    

}

const findUserByEmail = (email) => {

  console.log('finding user by email', email);
  return { id: 'someUniqueId', email: email };
}

module.exports = {
  createUser,
  findUserByEmail,
}

#これより下を削除してかくの始める
what i want to do is
Cursorで書いてもらったものがUdemyと自分ので違うから
現在差分を確認



module.exports = {
  createUser,
  findUserByEmail,
} 

const createUser = (userData) => {
  console.log('creating user', userData);
  return { id: 'someUniqueId', ...userData };    
}

const findUserByEmail = (email) => {
  console.log('finding user by email', email);  
  return { id: 'someUniqueId', email: email };
}

module.exports = {
  createUser,
  findUserByEmail,
}

const createUser = (userData) => {
  console.log('creating user', userData);
  return { id: 'someUniqueId', ...userData };    
}



