const express=require("express");
const zod=require("zod")
const app=express();

// const schema=zod.array(zod.number())
// {
//     email: string =>email,
//     password: atleast 8letters,
//     country:"IN" , "US"
// }

const schema=zod.object({
    email: zod.string(),
    password:z.string(),
    country: z.literal("IN").or(z.listen("US"),)
})
app.use(express.json())

app.post("/health-checkup", function(req,res){
    const kidneys=req.body.kidneys;
    const response=schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msg:"Input is invalid"
        })
    }else{

        res.send({response})
    }
})
app.listen(3000)