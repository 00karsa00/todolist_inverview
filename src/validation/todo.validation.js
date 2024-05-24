import Joi from "joi"; 

export const todoCreateValidate = async (req, res, next) => {
    try {
        const bodySchema = Joi.object({
            title: Joi.string().min(2).max(30).required(),
            description: Joi.string().min(2).required(),
            priority: Joi.string().valid('low', 'medium', 'high').required(),
            date: Joi.string().min(3).required(),
        });
        const { error } = await bodySchema.validate(req.body);
        if(error) {
            return next({status: 400,message: error.details[0].message })
        }
        next();
    } catch (error) {
        console.log("Error => ", error);
        console.trace();
        next({ message: "Internal Error" })
    }
}

export const todoUpdateValidate = async (req, res, next) => {
    try {
        const bodySchema = Joi.object({
            title: Joi.string().min(2).max(30).optional(),
            description: Joi.string().min(2).optional(),
            priority: Joi.string().valid('low', 'medium', 'high').optional(),
            date: Joi.string().min(3).optional(),
        });
        const { error } = await bodySchema.validate(req.body);
        if(error) {
            return next({status: 400,message: error.details[0].message })
        }
        next();
    } catch (error) {
        console.log("Error => ", error);
        console.trace();
        next({ message: "Internal Error" })
    }
}

export const todoListValidate = async (req, res, next) => {
    try {
        const bodySchema = Joi.object({
            title: Joi.string().optional(),
            description: Joi.string().optional(),
            priority: Joi.array().items(Joi.string()).optional(),
            date: Joi.object({
                from: Joi.date().iso().required(),
                to: Joi.date().iso().required()
            }).optional(),
            page: Joi.number().integer().optional(),
            limit: Joi.number().integer().optional(),
        });
        const { error } = await bodySchema.validate(req.body);
        if(error) {
            return next({status: 400,message: error.details[0].message })
        }
        next();
    } catch (error) {
        console.log("Error => ", error);
        console.trace();
        next({ message: "Internal Error" })
    }
}

