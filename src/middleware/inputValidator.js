import Joi from 'joi';

const employeeSchema = Joi.object({
    firstname: Joi.string().min(3).required(),
    lastname: Joi.string().min(3).required(),
    department: Joi.string().min(3).required(),
});

const validateEmployee = (req, res, next) => { 
    const {error} = employeeSchema.validate(req.body);
    if(error) return res.status(400).json({
        status:400,
        message: error.details[0].message
    });
    next();
};

export default validateEmployee;