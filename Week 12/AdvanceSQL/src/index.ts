import { Client } from "pg";
const client=new Client({
    connectionString:"postgresql://postgres:mysecretpassword@localhost/postgres"
})

async function createTable(){
    await client.connect();
    const result=await client.query(`
       CREATE TABLE users2 (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);    
 `)
 console.log(result);
}
// createTable();

async function insertUserData(username:string,password:string, email:string){
    await client.connect();
    const result=client.query(`
        INSERT INTO users (username,password,email) 
        VALUES ('${username}' , '${password}' , '${email}');
        `)
}
insertUserData("harkirat", "123", "harki1@gmail.com")


async function insertUserData2(username:string,password:string, email:string){
    await client.connect();
    const result=client.query(`
        INSERT INTO users (username,password,email) 
        VALUES ($1,$2,$3);
        `,[])
}