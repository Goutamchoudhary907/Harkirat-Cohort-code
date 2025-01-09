function maxValue(arr:number[]){
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] > max){
            max=arr[i];
        }
    }
    return max;
}

interface User{
    firstName:string;
    lastName:string;
    age:number;
}

function filteredUsers(users:User[]){
    return users.filter( x=> x.age >=18);
}
console.log(filteredUsers([{
    firstName:"Mohan",
    lastName:"Yadav",
    age:20,
},{
    firstName:"Ram",
    lastName:"Yadav",
    age:17,
}, ]));