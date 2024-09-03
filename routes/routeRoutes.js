import express from 'express';
import {createRoute, updateRoute} from '../controllers/routeController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import adminMiddleware from '../middleware/adminMiddleware.js';

const router=express.Router();

router.post('/routes',authMiddleware,adminMiddleware,createRoute);
router.put('/routes/:id',authMiddleware,adminMiddleware,updateRoute);

export default router;