const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../Models/userModel');

const SECRET = process.env.JWT_SECRET || 'secret';

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    
    // Check if user already exists
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user in database
    const newUser = await User.create({
      email,
      password: hashedPassword
    });

    // Create token with the new user's ID
    const token = jwt.sign({ id: newUser.id }, SECRET, { expiresIn: '1d' });
    
    res.status(201).json({ 
      token,
      user: {
        id: newUser.id,
        email: newUser.email
      }
    });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
};

const login = (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      console.error('Login error:', err);
      return res.status(500).json({ message: 'Login failed', error: err.message });
    }
    
    if (!user) {
      return res.status(400).json({ message: info.message || 'Invalid credentials' });
    }
    
    // Generate JWT token
    const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '1d' });
    
    res.status(200).json({
      token,
      user: {
        id: user.id,
        email: user.email
      }
    });
  })(req, res, next);
};

module.exports = {
  register,
  login
};