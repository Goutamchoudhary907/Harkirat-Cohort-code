
function time(){
    const date=new Date();
    console.log(date.toLocaleTimeString());
    setTimeout(time,1000);
}
time()