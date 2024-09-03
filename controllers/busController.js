import busModel from '../models/busModel.js';

const bus=busModel;

export const createBus=(req,res)=>{
    const{bus_number,capacity,route_id}=req.body;
    bus.create({bus_number,capacity,route_id},(err,results)=>{
        if(err){
            return req.status(500).json({error:err.message});
        }
        res.status(201).json({message:'Bus Created successfully!',busId:results.insertId});
    });
};

export const updateBus=(req,res)=>{
    const{id}=req.params;
    const{bus_number,capacity,route_id}=req.body;
    bus.update(id,{bus_number,capacity,route_id},(err,results)=>{
        if(err){
            return req.status(500).json({error:err.message});
        }
        res.status(200).json({message:'Bus Updated successfully!'});
    });
};



