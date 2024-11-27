const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get("/files",function(req,res){
    const directoryPath = path.join(__dirname, "files");
    fs.readdir(directoryPath, (err, files) =>{
        if(err){
          return res.status(500).json({
            error: 'Failed to retrieve files' 
           })
        }
       return res.status(200).json({
            files:files,
        })
        }) 
})


app.get("/files/:fileName", function(req,res){
    const name=req.params.fileName;
    console.log(name);
    const filePath=path.join(__dirname, 'files', name);
    fs.readFile(filePath,"utf-8",function(err,data){
        if(err){
           return res.status(404).json({
                msg:"File not found",
            })
        }
       return res.status(200).json({
            data
        })
    })
})

app.all("*" ,(req,res) =>{
    res.status(404).json({
        msg:"Route not found",
    });
})
const PORT= 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});