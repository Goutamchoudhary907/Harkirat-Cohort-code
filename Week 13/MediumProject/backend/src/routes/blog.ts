import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from "hono/jwt";

export const blogRouter=new Hono<{
    Bindings:{
        DATABASE_URL:string;
        JWT_SECRET:string
      },
      Variables: {
        userId: number;
      };      
}>();

blogRouter.use("/*",async(c,next)=> {
    const authHeader=c.req.header("Authorization") || "";
    const user=await verify(authHeader,c.env.JWT_SECRET);

    if (user){
        c.set("userId", user.id as number);
      await  next();
    }else{
        c.status(403);
        return c.json({
            message:"You are not logged in"
        })
    }
   
})

blogRouter.post('/', async(c) => { 
 const prisma =new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    
    const body=await c.req.json(); 
    const authorId=c.get("userId");
    console.log("Author ID:", authorId);
    
   const blog =await prisma.post.create({
        data:{
            title:body.title ,
            content:body.content , 
            authorId:String(authorId)
        }
    })
    return c.json({
        id:blog.id
    })
  })
  
  blogRouter.put('/', async(c) => {
    
 const body=await c.req.json();  
 const prisma =new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate());

   const blog =await prisma.post.update({
    where:{
        id:body.id
    } ,
        data:{
            title:body.title ,
            content:body.content , 
        }
    })
    return c.json({
        id:blog.id 
    })
  })
  
  blogRouter.get('/:id',async (c) => {
    const prisma =new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
        }).$extends(withAccelerate());

    const id=c.req.param("id"); 
    try {
        const blog =await prisma.post.findFirst({
            where:{
                id:String(id)
            }
            })
            return c.json({
                blog
            })
    } catch (error) {
        c.status(411);
        return c.json({
            message:"Error while fetching blog post"
        })
    }
  })

//  Todo:add pagination 
  blogRouter.get("/bulk" , async(c) =>{
    const prisma =new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        const blogs=await prisma.post.findMany();

        return c.json({
            blogs
        })
  })