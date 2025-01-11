import { Client } from "pg";

const client=new Client({
    connectionString:"postgresql://neondb_owner:iV3hB7IlKwEH@ep-floral-wind-a5m5034k.us-east-2.aws.neon.tech/neondb?sslmode=require"
})

async function Joins(){
    try {
      await client.connect();
      const res=await client.query(`
        SELECT u.id , u.username, u.email, a.country, a.street, a.pincode
        FROM users u
        JOIN addresses a ON u.id=a.user_id
        WHERE u.id= '1'
        `);
        console.log(res);
    } catch (error) {
      console.error("Error during Join", error);
    }
  }

  Joins();