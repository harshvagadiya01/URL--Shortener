const { getUser } = require('../Services/auth.js');

function checkForAuthentication(req, res, next) {
  const tokenCookie = req.cookies?.token;
  req.user = null;
  if (!tokenCookie) {
    return next();
  }
 
  const token = tokenCookie;
  const user = getUser(token);
  req.user = user;
  return next();
}

function restrictTo(roles){
  return (req, res, next) => {
    if(!req.user) {
      return res.redirect('/login');
    }

    if(!roles.includes(req.user.role)){
      return res.end("You are Unauthorized to access");
    }

    next();
  }
}

module.exports = { checkForAuthentication , restrictTo };