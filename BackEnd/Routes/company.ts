import express from 'express';
import { createCompany, getCompanies } from '../Controllers/companyController';
import { authenticateToken } from '../Middleware/AuthMiddleware';

const router = express.Router();

// Apply authentication middleware to company creation
router.post('/', authenticateToken, createCompany);
router.get('/', getCompanies);

export default router;