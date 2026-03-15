CREATE TABLE IF NOT EXISTS employees (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    department VARCHAR(100) NOT NULL,
    created_on TIMESTAMP DEFAULT NOW()
);


    CREATE TABLE IF NOT EXISTS departments (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL UNIQUE
    );


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