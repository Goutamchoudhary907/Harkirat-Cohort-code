type input=number | string;

function firstElement(arr:input[]){
return arr[0];
}
const value=firstElement(["harkirat", "singh"])
// value.toUppercase();        can not call this as input is either string or number

function identity<T>(arg:T){
return arg;
}

let output1=identity<number>(100);
let output2=identity<string>("myString");
console.log(output1);
console.log(output2);
console.log(output2.toUpperCase());