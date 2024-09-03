import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';

const User=userModel;

export const registerUser = (req, res) => {
    const { name, email, password, is_admin } = req.body;
    User.create({name,email,password,is_admin},(err,results)=>{
        if(err){
            return res.status(500).json({error:err.message});
        }
        res.status(201).json({message:'User created sucessfully!',user_id:results.insertId});
    });
};

export const login =(req,res)=>{
    const {email,password}=req.body;
    User.findbyEmail(email,(err,results)=>{
    if(err || results.length===0) {
        return res.status(400).json({message:'Invalid email or password'});
    }

    const user=results[0];
    if(password!==user.password){
        res.status(400).json({message:'Invalid email or password'});
    }
    const token=jwt.sign({id:user.id,is_admin:user.is_admin},process.env.JWT_SECRET);
    res.json({token});
});
};   

