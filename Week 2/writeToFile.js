const fs=require("fs");

function putCopyRightToFile(cb){
    fs.readFile("Week 2/a.txt","utf-8", function(err,data){
        if (err) {
            console.error('Error reading file:', err);
        } else {
            data=data+ "Copyright 2024 Goutam";
        fs.writeFile("Week 2/a.txt",data, function(writeErr){
            if(writeErr){
                console.error("Error writing the file", writeErr);
            }else{
                cb();
            }
        })
        }  
    })
}

putCopyRightToFile(function(){
    console.log("Copyright has been put");  
})