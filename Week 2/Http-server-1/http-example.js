const express =require("express");

const app=express();
const users=[{
    name:"John" ,
    kidneys:[{
        healthy:false
    }]
}]

app.get("/", function(req,res){
    const johnKidney= users[0].kidneys
    const numberofKidneys= johnKidney.length;
    let numberOfhealthyKidneys=0;
    for(let i=0;i<johnKidney.length;i++){
        if(johnKidney[i].healthy){
            numberOfhealthyKidneys= numberOfhealthyKidneys+1;
        }
    }
    const numberOfUnhealthyKidneys = numberofKidneys- numberOfhealthyKidneys;
    res.json({
        numberofKidneys ,
        numberOfhealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.use(express.json());
app.post("/", function(req,res){
   const isHealthy= req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done! "
    }) 
})

app.put("/", function(req,res){
    if(isThereAtleastOneUnhelthyKidney()){
        for(let i=0;i<users[0].kidneys.length;i++){
            users[0].kidneys[i].healthy=true;
        }
        res.json({msg:"done"})
    }else{
        res.status(411).json({
             msg:"You have no bad kidneys"
        })
    }
   
})

// removing all the unhealthy kidneys
app.delete("/", function(req,res){
    if(isThereAtleastOneUnhelthyKidney()){
        const newKideneys=[];
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newKideneys.push({
                    healthy:true
                })
            }
        }
        users[0].kidneys=newKideneys;
        res.json({msg:"done"})
    }else{
        res.status(411).json({
            msg:"You have no bad kidneys"
        }) 
    }
   
})

function isThereAtleastOneUnhelthyKidney(){
    let atleastOneunhelathyKidney=false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneunhelathyKidney=true;
        }
    }
    return atleastOneunhelathyKidney;
}

app.listen(3000);