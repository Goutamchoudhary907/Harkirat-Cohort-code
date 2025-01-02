function main(){
    fetch("http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5" )
    .then(async (res) =>{
        const json= await res.json();
        console.log(json);               
    })
}

async function main2(){
    const res=await fetch ("http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5")
    const json= await res.json();
    console.log(json);
}
// main2();

// need to mention request type and also specify type of data endpoint gives 
async function postMethod() {
    const response=await fetch("https://www.postb.in/1735836174228-5991195125970" ,{
        method:"POST"
    })
    const textData=await response.text();
    console.log(textData);
    
}

postMethod()