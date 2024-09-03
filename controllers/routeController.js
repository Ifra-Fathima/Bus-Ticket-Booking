import routeModel from '../models/routeModel.js';

const route=routeModel;

export const createRoute=(req,res)=>{
    const{origin, destination, departure_time, arrival_time}=req.body;
    route.create({origin, destination, departure_time, arrival_time},(err,results)=>{
        if(err){
            return req.status(500).json({error:err.message});
        }
        res.status(201).json({message:'Route Created successfully!',routeId:results.insertId});
    });
};

export const updateRoute=(req,res)=>{
    const{id}=req.params;
    const{origin, destination, departure_time, arrival_time}=req.body;
    route.update(id,{origin, destination, departure_time, arrival_time},(err,results)=>{
        if(err){
            return req.status(500).json({error:err.message});
        }
        res.status(200).json({message:'Route Updated successfully!'});
    });
};



