import { Client } from "pg";
const client=new Client({
    connectionString:"postgresql://postgres:mysecretpassword@localhost/postgres"
})

async function Joins(){
    try {
      await client.connect();
// Inner join return rows when there is at least one match in both tables , it is same as JOIN   
      const res=await client.query(`
        SELECT u.id , u.username, u.email, a.country, a.street, a.pincode
        FROM users u
       INNER JOIN addresses a ON u.id=a.user_id
        WHERE u.id= '1'
        `);
        console.log(res);
    } catch (error) {
      console.error("Error during Join", error);
    }
  }
//   Joins();

async function LeftJoin(){
    try {
      await client.connect();
// Left join return all rows from the left table and matched rows from right table   
      const res=await client.query(`
        SELECT u.id , u.username, u.email, a.country, a.street, a.pincode
        FROM users u
       LEFT JOIN addresses a ON u.id=a.user_id
        WHERE u.id= '2'
        `);
        console.log(res.rows);
    } catch (error) {
      console.error("Error during Join", error);
    }
  }
// LeftJoin();

async function FullJoin(){
    try {
      await client.connect();
// Full join combines both Left and Right Join   
      const res=await client.query(`
        SELECT u.id , u.username, u.email, a.country, a.street, a.pincode
        FROM users u
       FULL JOIN addresses a ON u.id=a.user_id
        `);
        console.log(res.rows);
    } catch (error) {
      console.error("Error during Join", error);
    }
  }
  FullJoin()