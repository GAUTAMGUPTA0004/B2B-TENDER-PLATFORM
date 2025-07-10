const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('../config/passport');
require('dotenv').config();

// Import associations to establish relationships
require('../Models/associations');

// Route imports
const authRoutes = require('../Routes/auth');
const companyRoutes = require('../Routes/company');
const tenderRoutes = require('../Routes/tender');
const applicationRoutes = require('../Routes/application');
const searchRoutes = require('../Routes/search');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Session configuration for Passport
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set to true in production with HTTPS
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/company', companyRoutes);
app.use('/api/tender', tenderRoutes);
app.use('/api/application', applicationRoutes);
app.use('/api/search', searchRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;