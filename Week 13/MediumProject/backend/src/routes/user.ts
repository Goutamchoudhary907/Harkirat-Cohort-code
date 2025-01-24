import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign} from 'hono/jwt'


export const userRouter=new Hono<{
    Bindings:{
        DATABASE_URL:string;
        JWT_SECRET:string
      }
}>();
 

userRouter.post('/signup', async (c) => {
    const prisma =new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body=await c.req.json();
    console.log("Request body:", body); 
  try {
    const user= await prisma.user.create({
      data:{
        email:body.email,
        password:body.password,
      }
    })
    console.log("User created:", user);  // Log user creation details
   
    
    const token=await sign({id:user.id},c.env.JWT_SECRET)
    return c.json({
      jwt:token
    })
  } catch (error) {
    console.log(error);
    c.status(411);
    return c.text("Invalid")
  }
  })
  
  userRouter.post('/api/v1/signin',async (c) => {
   const prisma=new PrismaClient({
    datasourceUrl:c.env?.DATABASE_URL,
   }).$extends(withAccelerate());
  
   const body=await c.req.json();
  
   try {
    const user=await prisma.user.findUnique({
      where:{
        email:body.email ,
        password:body.password
      }
     });
    
     if(!user){
      c.status(403);
      return c.json({error:"user not found"})
     }
    
     const jwt=await sign({
      id:user.id
    },c.env.JWT_SECRET);
  
     return c.json({jwt}); 
   } catch (error) {
    c.status(411);
    return c.text("Invalid") 
   }
   
  })