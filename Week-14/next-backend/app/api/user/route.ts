//  /api/user is the route 

import { NextRequest } from "next/server";
import client from '@/db'

// Post method as it is a post method
export async function POST(req:NextRequest){
    const body=await req.json();
   console.log(body);
   
   await client.user.create({
        data:{
            username:body.username,
            password:body.password
        }
    })
    return Response.json({
     message:"You are logged in"
    })
}