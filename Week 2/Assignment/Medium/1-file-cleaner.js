const fs=require("fs")

function removeWhiteSpaces(){
    fs.readFile("Week 2/Assignment/Medium/a.txt" , "utf-8", function(err,data){
     if(err){
        console.error("Error in opening file" , err)
     }else{
        const updatedData = data.replace(/\s+/g, "");

        fs.writeFile("Week 2/Assignment/Medium/a.txt", updatedData, function(writeErr){
            if(writeErr){
                console.error("Error while writing file", writeErr);
            }else{
                console.log("Spaces removed successfully!");
            }
        })
     }
    })
}

removeWhiteSpaces()