require('dotenv').config();

const app = require('./app');
const sequelize = require('../utils/db');

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ PostgreSQL connected successfully.');
    
    // Fix existing NULL createdAt values before sync
    await sequelize.query(`
      UPDATE users 
      SET "createdAt" = COALESCE("createdAt", NOW()),
          "updatedAt" = COALESCE("updatedAt", NOW())
      WHERE "createdAt" IS NULL OR "updatedAt" IS NULL;
    `);
    console.log('✅ Fixed NULL timestamp values.');
    
    // Sync database models with relationships
    await sequelize.sync({ alter: true }); // Use alter: true to modify existing tables
    console.log('✅ Database models synchronized.');
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Unable to connect to the database:', err);
    process.exit(1);
  }
})();