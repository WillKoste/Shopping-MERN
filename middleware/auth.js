const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('x-auth-token');

  if(!token){
    return res.status(401).json({success: false, data: 'Authorization Denied'});
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = decoded.user;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({success: false, data: 'Token is not valid'});
  }
}

module.exports = auth;