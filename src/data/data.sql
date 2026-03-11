CREATE TABLE IF NOT EXISTS employees (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    department VARCHAR(100) NOT NULL,
    created_on TIMESTAMP DEFAULT NOW()
);