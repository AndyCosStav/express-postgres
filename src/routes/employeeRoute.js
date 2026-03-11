import express from 'express';
import { createEmployee, deleteEmployee, getEmployeeById, getEmployees, updateEmployee } from '../controllers/employeeController.js';
import validateEmployee from '../middleware/inputValidator.js';

const router = express.Router();

router.post("/employee", validateEmployee, createEmployee);
router.get("/employee", getEmployees);
router.get("/employee/:id", getEmployeeById);
router.put("/employee/:id", validateEmployee, updateEmployee);
router.delete("/employee/:id", deleteEmployee);


export default router;