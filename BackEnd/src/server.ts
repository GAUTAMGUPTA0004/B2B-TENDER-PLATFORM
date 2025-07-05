import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import sequelize from '../utils/db';

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ PostgreSQL connected successfully.');
    
    // Sync database models
    await sequelize.sync(); // Or use { force: true } for development only
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Unable to connect to the database:', err);
  }
})();