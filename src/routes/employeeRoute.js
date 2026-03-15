import express from 'express';
import { createEmployee, deleteEmployee, getEmployeeById, getEmployeeData, getEmployees, updateEmployee } from '../controllers/employeeController.js';
import validateEmployee from '../middleware/inputValidator.js';
import { getAllEmployeesAndDepartments } from '../models/employeeModel.js';

const router = express.Router();

router.post("/employee", validateEmployee, createEmployee);
//excuse bad naming convention just wanted to play aroind with JOIN statements
router.get("/employeedata", getEmployeeData);
router.get("/employee", getEmployees);
router.get("/employee/:id", getEmployeeById);
router.put("/employee/:id", validateEmployee, updateEmployee);
router.delete("/employee/:id", deleteEmployee);


export default router;