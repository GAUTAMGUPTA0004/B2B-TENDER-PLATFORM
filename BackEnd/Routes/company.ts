import express from 'express';
import { authenticateToken } from '../Middleware/AuthMiddleware';
import { createCompany, getCompanies } from '../Controllers/companyController';


const router = express.Router();

// Apply authentication middleware to company creation
router.post('/', authenticateToken, createCompany);
router.get('/', getCompanies);

export default router;