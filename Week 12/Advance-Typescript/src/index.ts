interface User{
    id:string;
    name:string;
    age:number;
    email:string;
    password:string;
}

//Pick is Used to pick values from type or interface
type UpdateProps=Pick<User, "name" | "age" | "email">

// Partial make keys optional
type UpdatePropsOptional=Partial<UpdateProps>


// readonly to make values constant you can't change values once assigned
type Obj={
   readonly name:string;
   readonly age:number;
}

const obj:Obj={
   name:"John" ,
   age:21
}
// obj.age=12;            can't do this 

function displayUserProfile(user:UpdateProps){
    console.log(`Name ${user.name} , Email: ${user.email}`);
}
const userProfile: UpdateProps = {
    name: "John Doe",
    age: 25,
    email: "john.doe@example.com"
};

displayUserProfile(userProfile);
