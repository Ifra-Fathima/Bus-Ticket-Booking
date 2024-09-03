import express, { Router } from 'express';
import {createBus, updateBus} from '../controllers/busController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import adminMiddleware from '../middleware/adminMiddleware.js';

const router=express.Router();

router.post('/buses',authMiddleware,adminMiddleware,createBus);
router.put('/buses/:id',authMiddleware,adminMiddleware,updateBus);

export default router;