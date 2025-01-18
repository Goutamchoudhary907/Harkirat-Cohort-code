
// Record is used to construct a type with set of properties
type Users=Record<string, {age:number; name:string}>;

const users:Users={
    "id1" :{age:21 , name:"Harkirat"} ,
    "id2" :{age:33 , name:"raman"},
}

// Map is used make key value pairs like c++ or java
const user=new Map()
user.set("id1", {age:21 , name:"Harkirat"})
user.set("id2", {age:33 , name:"raman"})

console.log(user);


// Can also give type of key and value in map
type NewUser={
name:string;
age:number;
emai:string;
}

const newUser=new Map<string,NewUser>()
newUser.set("id1", {age:21 , name:"Harkirat", emai:"abc@gmail.com"})
newUser.set("id2", {age:33 , name:"raman" ,emai:"example@gmail.com"})
console.log(newUser);