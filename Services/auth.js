const jwt = require('jsonwebtoken');
const secret = 'Harsh123';

function setUser(user){
  return jwt.sign({
    _id : user._id, 
    email : user.email,
    role : user.role
  }, secret);
}

function getUser(token){
  if(!token) return null;
  try{
    return jwt.verify(token, secret);
  }catch(exception){
    return null;
  }
}

module.exports = { 
  setUser, 
  getUser
};