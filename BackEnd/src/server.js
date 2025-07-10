require('dotenv').config();

const app = require('./app');
const sequelize = require('../utils/db');

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ PostgreSQL connected successfully.');
    
    // Sync database models with relationships FIRST
    await sequelize.sync({ alter: true }); // Use alter: true to modify existing tables
    console.log('✅ Database models synchronized.');
    
    // Fix existing NULL createdAt values AFTER tables exist
    try {
      await sequelize.query(`
        UPDATE users 
        SET "createdAt" = COALESCE("createdAt", NOW()),
            "updatedAt" = COALESCE("updatedAt", NOW())
        WHERE "createdAt" IS NULL OR "updatedAt" IS NULL;
      `);
      console.log('✅ Fixed NULL timestamp values.');
    } catch (updateError) {
      console.log('ℹ️  Timestamp update skipped (table may be new):', updateError.message);
    }
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Unable to connect to the database:', err);
    process.exit(1);
  }
})();
