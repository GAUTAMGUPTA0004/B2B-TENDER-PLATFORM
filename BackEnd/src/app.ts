import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Route imports
import authRoutes from '../Routes/auth';
import companyRoutes from '../Routes/company';
import tenderRoutes from '../Routes/tender';
import applicationRoutes from '../Routes/application';
import searchRoutes from '../Routes/search';

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/company', companyRoutes);
app.use('/api/tender', tenderRoutes);
app.use('/api/application', applicationRoutes);
app.use('/api/search', searchRoutes);

app.get('/', (_req, res) => {
  res.send('API is running...');
});

export default app;