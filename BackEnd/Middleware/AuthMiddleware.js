const passport = require('passport');

const authenticateToken = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: 'Authentication error', error: err.message });
    }
    
    if (!user) {
      return res.status(401).json({ message: 'Access token missing or invalid' });
    }
    
    req.user = user;
    next();
  })(req, res, next);
};


module.exports = authenticateToken;