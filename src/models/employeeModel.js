import pool from "../config/db.js";

export const getAllEmployeesService = async () => {
  const result = await pool.query("SELECT * FROM employees");
  return result.rows;
};

export const createEmployeeService = async (firstname, lastname, department) => {
  const result = await pool.query(
    "INSERT INTO employees (firstname, lastname, department) VALUES ($1, $2, $3) RETURNING *",
    [firstname, lastname, department]
  );
  return result.rows[0];
};

export const getEmployeeByIDService = async (id) => {
  const result = await pool.query("SELECT * FROM employees WHERE id = $1", [id]);
  return result.rows[0];
};

export const updateEmployeeService = async (firstname, lastname, department, id) => {
  const result = await pool.query(
    "UPDATE employees SET firstname = $1, lastname = $2, department = $3 WHERE id = $4 RETURNING *",
    [firstname, lastname, department, id]
  );
  return result.rows[0];
};

export const deleteEmpoyeeService = async (id) => {
  const result = await pool.query(
    "DELETE FROM employees WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};