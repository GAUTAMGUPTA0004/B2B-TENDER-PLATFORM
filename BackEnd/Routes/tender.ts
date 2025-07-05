import express from 'express';
import { authenticateToken} from '../Middleware/AuthMiddleware';
import { createTender, getTenders } from '../Controllers/tenderController';


const router = express.Router();


router.post('/', authenticateToken, createTender);
router.get('/', getTenders);

export default router;