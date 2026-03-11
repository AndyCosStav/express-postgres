import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from "./config/db.js"
import employeeRoutes from "./routes/employeeRoute.js"
import errorHandler from './middleware/errorHandler.js';
import createUserTable from './data/createEmployeesTable.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api", employeeRoutes);


//Error handling 
app.use(errorHandler);

//create table before we do anything
createUserTable();

//testing pg
app.get("/", async( req, res) => {
    const result = await pool.query("SELECT current_database()");
    res.send(`the database name is ${result.rows[0].current_database}`);
})

//server running
app.listen(port, () => { 
    console.log(`server is running on http://localhost:${port}`);
})