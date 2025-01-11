import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();

async function insertUser(username:string,password:string,firstName:string, lastName:string){
 const res=await prisma.user.create({
    data:{
        email:username,
        password,
        firstName,
        lastName
    }
 })
 console.log(res);   
}
insertUser("Goutam@gmail.com" , "123456" , "Goutam", "Choudhary")
insertUser("ram@gmail.com" , "987654" , "Ram", "Singh")
insertUser("mohan@gmail.com" , "1478963" , "Mohan", "Singh")

interface UpdateParams{
    firstName:string;
    lastName:string;
}

async function updateUser(username:string,{
    firstName,
    lastName
}:UpdateParams) {
  const res= await prisma.user.update({
        where:{email:username},
        data:{
            firstName,
            lastName
        }
    })
    console.log(res);
}

updateUser('Goutam@gmail.com',{
    firstName:"Goutam11" ,
    lastName:"Choudhary"
})