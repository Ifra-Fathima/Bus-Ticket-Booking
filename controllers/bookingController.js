import bookingModel from '../models/bookingModel.js';

const booking=bookingModel;

export const createBooking=(req,res)=>{
    const{ user_id, bus_id, seat_number}=req.body;
    booking.create({ user_id, bus_id, seat_number},(err,results)=>{
        if(err){
            return req.status(500).json({error:err.message});
        }
        res.status(201).json({message:'Booking Created successfully!',bookingId:results.insertId});
    });
};







