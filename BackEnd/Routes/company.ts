import express from 'express';
import { createCompany, getCompanies } from '../Controllers/companyController';
const router = express.Router();
router.post('/', createCompany);
router.get('/', getCompanies);
export default router;