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
        userId:string;
      };      
}>();

blogRouter.use("/*",async(c,next)=> {
    const authHeader=c.req.header("Authorization") || "";
    try {

    const user=await verify(authHeader,c.env.JWT_SECRET);
    if (user){
        c.set("userId", String(user.id));
      await  next();
    }else{
        c.status(403);
        return c.json({
            message:"You are not logged in"
        })
    }
    } catch (error) {
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
    
   const blog =await prisma.blog.create({
        data:{
            title:body.title ,
            content:body.content , 
            authorId:Number(authorId)
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

   const blog =await prisma.blog.update({
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
  
  //  Todo:add pagination 
  blogRouter.get("/bulk" , async(c) =>{
    const prisma =new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        const blogs=await prisma.blog.findMany({
            select:{
                content:true,
                title:true,
                id:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        });

        return c.json({
            blogs
        })
  })

  blogRouter.get('/:id',async (c) => {
    const prisma =new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
        }).$extends(withAccelerate());

    const id=c.req.param("id"); 
    try {
        const blog =await prisma.blog.findFirst({
            where:{
                id:Number(id)
            },
            select:{
                id:true,
                title:true,
                content:true,
                author:{
                    select:{
                        name:true
                    }
                }
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