import { Hono } from 'hono'
import {verify } from 'hono/jwt'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import {cors} from 'hono/cors'
const app = new Hono<{
// Giving type to databse url globally 
  Bindings:{
    DATABASE_URL:string;
    JWT_SECRET:string
  }
}>();
app.use('/*',cors({
  origin: ['http://localhost:5173'], 
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
  allowHeaders: ['Content-Type', 'Authorization'],
  exposeHeaders:['content-length'],
  maxAge:600,
  credentials:true
}))
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

// Middleware
app.use('/api/v1/*', async (c,next) =>{
  const header=c.req.header("Authorization") || "";

  const response=await verify(header, c.env.JWT_SECRET)
  if(response.id){
    next()
  }else{
    c.status(403)
    return c.json({error:"unathorized"})
  }
})
export default app