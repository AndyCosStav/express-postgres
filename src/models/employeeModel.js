import pool from "../config/db.js";

export const getAllEmployeesService = async () => {
  const result = await pool.query("SELECT * FROM employees");
  return result.rows;
};

export const createEmployeeService = async (firstname, lastname, departmentId) => {
  const result = await pool.query(
    `INSERT INTO employees (firstname, lastname, department_id)
     VALUES ($1, $2, $3)
     RETURNING id, firstname, lastname, department_id`,
    [firstname, lastname, departmentId]
  );

  return result.rows[0];
};

export const getEmployeeByIDService = async (id) => {
  const result = await pool.query("SELECT * FROM employees WHERE id = $1", [id]);
  return result.rows[0];
};

export const updateEmployeeService = async (firstname, lastname, departmentId, id) => {
  const result = await pool.query(
    `UPDATE employees
     SET firstname = $1, lastname = $2, department_id = $3
     WHERE id = $4
     RETURNING *`,
    [firstname, lastname, departmentId, id]
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


export const getAllEmployeesAndDepartments = async () => {
  const result = await pool.query(`
    SELECT
      e.id,
      e.firstname,
      e.lastname,
      e.created_on,
      d.id AS department_id,
      d.name AS department
    FROM employees e
    JOIN departments d
      ON e.department_id = d.id
    ORDER BY e.id;
  `);

  return result.rows;
};