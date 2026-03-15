import pool from "../config/db.js";

const createDepartmentsTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS departments (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL UNIQUE
    );
  `;

  try {
    await pool.query(queryText);
    console.log("table created");
  } catch (err) {
    console.log("table not created", err);
  }
};

export default createDepartmentsTable;