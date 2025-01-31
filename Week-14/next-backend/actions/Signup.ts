//  server actions 
//  Single function can be used in both client and server components
//  Gives you types of the furtion response on the frontend (very similar to trpc)

"use server"

import client from "@/db"
export async function signup(username:string,password:string){
    try {
        await client.user.create({
            data:{
                username:username ,
                password:password
            }
        });
        return true;
    } catch (error) {
        console.log("Error while signup");
        return false;
    }
}