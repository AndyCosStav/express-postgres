import { createEmployeeService, deleteEmpoyeeService, getAllEmployeesService, getEmployeeByIDService, updateEmployeeService } from "../models/employeeModel.js";

const handleReponse = (res, status,message, data = null) => { 
    res.status(status).json({
        status,
        message, 
        data
    });
};

export const createEmployee = async (req , res, next) => {
    const {firstname, lastname, department } = req.body;

    console.log(firstname, lastname, department );

    try{
        const newEmployee = await createEmployeeService(firstname,lastname, department);
        handleReponse(res, 201, "User created Successfully", newEmployee);
    } catch (err){
        //apassing to error handling middleware
        next(err);
    }
}

export const getEmployees = async (req , res, next) => {
    try{
        const employees = await getAllEmployeesService();
        handleReponse(res, 200, "Employees", employees);
    } catch (err){
        //apassing to error handling middleware
        next(err);
    }
}

export const getEmployeeById = async (req , res, next) => {
    try{
        
        const employee = await getEmployeeByIDService(req.params.id);
        handleReponse(res, 200, "Employee fetched sucessfully", employee);
    } catch (err){
        //apassing to error handling middleware
        next(err);
    }
}

export const updateEmployee = async (req , res, next) => {
    const {firstname, lastname, department} = req.body;
    try{
        
        const employee = await updateEmployeeService(firstname, lastname, department,req.params.id);
        if (!employee) return handleReponse(res, 404, "Employee not found");

        handleReponse(res, 200, "Employee updated sucessfully", employee);
    } catch (err){
        //apassing to error handling middleware
        next(err);
    }
}

export const deleteEmployee = async (req , res, next) => {
    try{
        
        const employee = await deleteEmpoyeeService(req.params.id);
        if (!employee) return handleReponse(res, 404, "Employee not found");

        handleReponse(res, 200, "Employee deleted sucessfully", employee);
    } catch (err){
        //apassing to error handling middleware
        next(err);
    }
}



