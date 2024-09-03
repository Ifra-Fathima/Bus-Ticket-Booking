import express from "express";
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import busRoutes from './routes/busRoutes.js';
import bookingRoutes from "./routes/bookingRoutes.js";
import routeRoutes from './routes/routeRoutes.js';
import './config/db.js';

dotenv.config();
const app=express();

app.use(express.json());

app.use('/api',userRoutes);
app.use('/api',busRoutes);
app.use('/api',bookingRoutes);
app.use('/api',routeRoutes);

const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});


