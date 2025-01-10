import { Client } from "pg";

const client=new Client({
    connectionString:"postgresql://neondb_owner:iV3hB7IlKwEH@ep-floral-wind-a5m5034k.us-east-2.aws.neon.tech/neondb?sslmode=require"
})

async function createUsersTable(){
    try {
        await client.connect();
        const result= await client.query(`
           CREATE TABLE users(
           id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP );
        `);
    console.log(result);      
    } catch (error) {
        console.error("Error creating table:", error);   
    }
     
}

// createUsersTable();

async function insertData(){
    try {
        await client.connect();
        const insertQuery= "INSERT INTO users(username,email,password) VALUES ('username2','user3@example.com' ,'user_password')";
        const res=await client.query(insertQuery);
        console.log('Insertion Success', res);     
    } catch (error) {
        console.error("Error during insertion", error);
    }
}

// insertData();

// secure way to insert data, prevent sql injection
async function insertData2(username: string, email: string, password: string){
    try {
        await client.connect();
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
        const values = [username, email, password];
        const res = await client.query(insertQuery, values);
        console.log('Insertion success:', res);
      } catch (err) {
        console.error('Error during the insertion:', err);
      } finally {
        await client.end();
      }
}

// insertData2('username5', 'user5@example.com', 'user_password').catch(console.error);


async function getUser(email: string) {
    try {
      await client.connect();
      const query = 'SELECT * FROM users WHERE email = $1';
      const values = [email];
      const result = await client.query(query, values);
  
      if (result.rows.length > 0) {
        console.log('User found:', result.rows[0]);
        return result.rows[0];
      } else {
        console.log('No user found with the given email.');
        return null;
      }
    } catch (err) {
      console.error('Error during fetching user:', err);
      throw err;
    } finally {
      await client.end();
    }
  }
  
//   getUser('user3@example.com').catch(console.error);
// (async () => {
//     try {
//         await client.connect();
//         const select = await client.query('SELECT * FROM users');
//         console.log(select);
//     } catch (error) {
//         console.error('Error during selection:', error);
//     } finally {
//         await client.end();
//     }
// })();

async () =>{
  try {
    await client.connect();
    const res=await client.query(`CREATE TABLE addresses(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL ,
    city varchar(100) NOT NULL ,
    country varchar(100) NOT NULL ,
    street varchar(255) NOT NULL ,
    pincode varchar(20) ,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP ,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    )`);
  } catch (error) {
    console.error("Error during create address table", error);
  }
};