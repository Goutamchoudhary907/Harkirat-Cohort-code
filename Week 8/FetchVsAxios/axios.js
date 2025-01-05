const axios=require("axios")

async function main(){
    const response=await axios.get("http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5");
    console.log(response.data);
    
}
// main()

// only specify request type in axios. and no need to specify data type 
async function postMethod(){
    const response=await axios.post("https://www.postb.in/1735836174228-5991195125970" ,
        {
            username:"Goutam",          //way to send body in request
        },
        {
            headers:{
                Authorization:"Bearer 123"           // way to send headers 
            }
        }
    )
    console.log(response.data);
    
}

postMethod()