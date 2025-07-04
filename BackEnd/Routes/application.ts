import express from 'express';
import { applyTender, getApplicationsByTender } from '../Controllers/applicationController';
const router = express.Router();
router.post('/', applyTender);
router.get('/:id', getApplicationsByTender);
export default router;
