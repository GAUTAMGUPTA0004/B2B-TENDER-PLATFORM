import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import sequelize from '../utils/db';



const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ PostgreSQL connected successfully.');
    
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