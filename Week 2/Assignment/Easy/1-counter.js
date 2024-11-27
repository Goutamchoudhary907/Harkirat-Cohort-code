let count=0;
console.log(count);

function counter(){
 let countt= setInterval(()=>{
    console.log(++count);
    if(count >=15){
        clearInterval(countt)
    }
 },1000)   
}
counter()