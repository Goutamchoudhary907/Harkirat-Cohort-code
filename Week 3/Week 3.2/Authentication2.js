const jwt=require("jsonwebtoken")

const value={
    name:"harkirat",
    accountNumber:123123123
}

// this token is generated using this secret and hence this token an only be verified using this secret
const token=jwt.sign(value,"secret")
console.log(token);
