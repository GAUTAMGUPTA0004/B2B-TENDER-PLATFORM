const { Sequelize } = require('sequelize');

// Load environment variables
require('dotenv').config();

// Database configuration with fallbacks
const dbConfig = {
  database: process.env.DB_NAME || 'tender_management',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || '', // Ensure it's always a string
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  dialect: 'postgres',
  logging: false,
};

// Debug: Log the configuration (without password for security)
console.log('Database Configuration:', {
  database: dbConfig.database,
  username: dbConfig.username,
  host: dbConfig.host,
  port: dbConfig.port,
  passwordSet: !!dbConfig.password
});

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    logging: dbConfig.logging,
  }
);

module.exports = sequelize;