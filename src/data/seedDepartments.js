import pool from "../config/db.js";

const seedDepartmentsTable = async () => {
  const queryText = `
INSERT INTO departments (name)
VALUES
  ('Engineering'),
  ('IT'),
  ('Human Resources'),
  ('Finance'),
  ('Marketing'),
  ('Sales'),
  ('Customer Support'),
  ('Operations'),
  ('Legal'),
  ('Product Management')
ON CONFLICT (name) DO NOTHING;
  `;

  try {
    await pool.query(queryText);
    console.log("dummy data inserted ");
  } catch (err) {
    console.log("dummy data NOT inserted ", err);
  }
};

export default seedDepartmentsTable;