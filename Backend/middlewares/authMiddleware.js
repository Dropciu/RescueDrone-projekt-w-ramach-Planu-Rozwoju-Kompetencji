const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(403).json({ message: 'Not authenticated' });

  jwt.verify(token, process.env.JWT_SECRET, (err, userSession) => {

    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.session = userSession;
    next();
  });
};

module.exports = { verifyToken };
