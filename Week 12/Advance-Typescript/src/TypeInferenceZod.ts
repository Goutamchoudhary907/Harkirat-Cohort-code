import {string, z}  from 'zod';
import express from 'express';

const app=express()

// Defien schema for profile
const userProfileSchema=z.object({
    name:z.string().min(1) ,
    email:string().email() ,
    age:z.number().min(18).optional(),
})

type finalUserSchema=z.infer<typeof userProfileSchema>;

app.put("/user" , (req,res) =>{
    const {success} = userProfileSchema.safeParse(req.body);
    const updatedBody:finalUserSchema=req.body;

    if(!success){
        res.status(411).json({})
        return;
    }
    res.json({
        message:"User updated"
    })
})