type User2={
    firstName:string,
    lastName:string,
    age:number ,
    email?:string
}
// union of more than one type
type argType=number | string;

function Greet(id:argType){
console.log("Hi there"+id);
}
Greet(1);
Greet("One")


type Employeee={
name:string;
startDate:Date;
};
type Manager={
   name:string;
   department:string; 
};
// intersection of two types
type TeamLead=Employeee & Manager;

const t:TeamLead={
    name: "Ram",
    startDate:new Date(),
    department:"SDE"
};
console.log(t);