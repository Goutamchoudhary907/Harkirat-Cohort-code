interface User{
    firstName:string,
    lastName:string,
    age:number ,
    email?:string         //optional
};

function legal(user:User){
 if(user.age >18){
    return true
 }else{
    return false;
 }
}

console.log(legal({
    firstName:"Nick",
    lastName:"Doe",
    age:20
}));
