const x:number=1;
console.log(x);
// need to specify type in functions also
function greet(firstName :string){
    console.log("Hello" +firstName);
}

greet("Goutam");

function sum(a:number,b:number){
   return a+b; 
}
console.log(sum(1,2));

// optional to give return type to funtion
function isLegal(age:number):boolean{
    if(age>=18){
    return true;
    }else{
        return false;
    }
}
console.log(isLegal(18));

// Return type void and it takes no argumentss
function runAfter1s(fn: () => void){
    setTimeout(fn,1000);
}

runAfter1s(function(){
console.log("hi there");

})