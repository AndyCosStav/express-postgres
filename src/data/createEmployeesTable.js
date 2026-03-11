import pool from "../config/db.js"

const createUserTable = async () => { 
    const queryText = `CREATE TABLE IF NOT EXISTS employees (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    department VARCHAR(100) NOT NULL,
    created_on TIMESTAMP DEFAULT NOW()
)
    `;

    try{
        pool.query(queryText);
        console.log("table created");
    } catch(err){
        console.log("table not created", err);
    }
};

export default createUserTable;