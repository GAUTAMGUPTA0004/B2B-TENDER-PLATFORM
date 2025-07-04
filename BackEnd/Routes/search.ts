import express from 'express';
import { searchCompanies } from '../Controllers/searchController';
const router = express.Router();
router.get('/', searchCompanies);
export default router;
