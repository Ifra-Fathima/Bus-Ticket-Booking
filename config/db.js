import mysql2 from 'mysql2';
import dotenv from 'dotenv';


const mysql=mysql2;

dotenv.config();

const db=mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
})

db.connect((err)=>{
    if(err){
        console.error("Error connecting to the database:",err.message);
        return;
    }
    console.log("Connected to the databse successfully");
});


export default db;