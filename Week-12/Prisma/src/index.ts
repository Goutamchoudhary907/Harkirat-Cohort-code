import { PrismaClient } from "@prisma/client";
import dotenv from 'dotenv';
dotenv.config({path:'../.env'});


const prisma=new PrismaClient();
 async function insertUserData(username:string, password:string, firstName:string ,lastName:string){
    const response=await prisma.user.create({
        data:{
            username,
            password,
            firstName,
            lastName
        }
    })
    console.log(response);
 }

// insertUserData('Shyam@gmail.com','123456','Shyam','Singh') 

async function createtodo(title:string, description:string, userId:number){
  const res=  await prisma.todo.create({
        data:{
            title,
            description,
            userId
        }
    })
    console.log(res);
}
// createtodo("Go to gym", "Go at 5 pm", 1);

async function getTodosAndUserDeatils(userId:number){
    const res=await prisma.todo.findMany({
        where:{
            userId:userId
        }, 
        select:{
            id:true,
            title:true,
            description:true,
            user:true
        }
    })
    console.log(res);
}
getTodosAndUserDeatils(1);