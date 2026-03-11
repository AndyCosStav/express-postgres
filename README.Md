# Employee API - Express + PostgreSQL

## Why I built this

I’m a .NET Engineer , and I wanted to understand how working with **SQL in a Node.js project** compares to what I’m used to in the .NET world.

A lot of my background is in building structured backend APIs with clear separation of concerns, database access layers, and maintainable code. With this project, I wanted to explore how those same ideas translate into the **Node.js + Express + PostgreSQL** ecosystem.

This project is a small learning exercise that helped me:

- get hands-on with **PostgreSQL** in a Node.js backend
- understand how to structure an Express API using patterns that feel familiar coming from .NET
- practise CRUD operations against a relational database
- add request validation using **Joi**
- compare how backend development in JavaScript differs from the conventions and tooling I’m used to in C#

## What I wanted to learn

### Backend goals

- Build a clean REST API with **Express**
- Connect a Node.js application to **PostgreSQL**
- Practise writing SQL queries directly from the application
- Add request validation using **Joi**
- Structure the project using:
  - routes
  - controllers
  - model/service-style database functions
  - middleware for error handling
- Apply the same kind of organised backend thinking I use in .NET to a JavaScript project

### Database goals

- Create and manage a simple relational table
- Perform basic CRUD operations using SQL:
  - create employee
  - get all employees
  - get employee by id
  - update employee
  - delete employee
- Learn how parameterised queries work in Node.js with PostgreSQL

## Tech stack

- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Database access:** `pg`
- **Validation:** Joi
- **Other tools:** dotenv, cors, nodemon

## Features

- Create an employee
- Get all employees
- Get a single employee by id
- Update an employee
- Delete an employee
- Request validation using Joi
- PostgreSQL connection pooling
- Basic error handling middleware
- Automatic employee table creation on startup

## API endpoints
 - POST /api/employee
 - GET /api/employee
 - GET /api/employee
 - PUT /api/employee/:id
 - DELETE /api/employee/:id

## Project structure

```bash
src/
├── config/
│   └── db.js
├── controllers/
│   └── employeeController.js
├── data/
│   └── createEmployeesTable.js
├── middleware/
│   └── errorHandler.js
├── models/
│   └── employeeModel.js
├── routes/
│   └── employeeRoute.js
├── validation/
│   └── employeeValidation.js
└── index.js
```

## Validation

This project uses **Joi** to validate incoming request bodies before they reach the database layer.

This helped me practise adding an extra layer of protection and keeping the API more predictable by rejecting invalid data early.

## What this project helped me practise

One of the main reasons I built this was to see how easily I could transfer backend habits from **.NET** into **Node.js**.

Some of the things that felt familiar:

- keeping responsibilities separated across files
- using controllers to handle request/response logic
- moving database access into its own layer
- building predictable API responses
- validating incoming data before processing it
- thinking about maintainability even in a small learning project

It was also useful for seeing where Node.js feels different:

- less structure is imposed by default
- more freedom in how you organise the project
- direct SQL usage feels lightweight and flexible compared to some ORM-heavy approaches

## Future improvements

Some things I’d add next if I continued this project:

- stronger validation error formatting
- tests for routes and database functions
- Docker Compose for app + database setup
- pagination/filtering for employees
- Swagger / OpenAPI documentation
- deployment to the cloud

## Final note

This is a small project, but it was a useful way for me to explore how my **.NET** backend experience translates into **Node.js + SQL** development.

The goal was not just to make CRUD work, but to understand the patterns, tooling, and developer experience in a different backend ecosystem while still applying the clean, structured approach I value in API development.

