let count=0;

function counter(){
    if(count>15) return;

    console.log(count++);
    setTimeout(counter,1000);
}

counter()