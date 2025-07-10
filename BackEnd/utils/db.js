const { Sequelize } = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DATABASE_URL) {
  // Render or production environment
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Only for Render
      },
    },
    logging: false,
  });
  console.log('Using DATABASE_URL for connection.');
} else {
  // Local development
  const dbConfig = {
    database: process.env.DB_NAME || 'tender_management',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || '',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    dialect: 'postgres',
    logging: false,
  };

  console.log('Database Configuration:', {
    database: dbConfig.database,
    username: dbConfig.username,
    host: dbConfig.host,
    port: dbConfig.port,
    passwordSet: !!dbConfig.password,
  });

  sequelize = new Sequelize(
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
}

module.exports = sequelize;

