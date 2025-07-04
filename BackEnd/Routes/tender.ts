import express from 'express';
import { createTender, getTenders } from '../Controllers/tenderController';
const router = express.Router();
router.post('/', createTender);
router.get('/', getTenders);
export default router;