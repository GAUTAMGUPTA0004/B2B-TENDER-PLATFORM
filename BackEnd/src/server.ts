import express from 'express';
const app=express();
import sequelize from "../utils/db";


const PORT = process.env.PORT ;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ PostgreSQL connected successfully.');
    await sequelize.sync(); // Or use { force: true } for development only
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('❌ Unable to connect to the database:', err);
  }
})();