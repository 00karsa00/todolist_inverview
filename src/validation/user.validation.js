import Joi from "joi"; 

export const userRegisterValidate = async (req, res, next) => {
    try {
        const bodySchema = Joi.object({
            name: Joi.string().min(2).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(3).required(),
            phone: Joi.string().min(3).required(),
            address: Joi.string().min(1).required()
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


export const userUpdateValidate = async (req, res, next) => {
    try {
        const bodySchema = Joi.object({
            name: Joi.string().min(2).max(30).optional(),
            phone: Joi.string().min(3).optional(),
            address: Joi.string().min(1).optional()
        });
        if(!Object.keys(req.body).length) {
            return next({status: 400,message: "Minimun one of the params required" })
        }
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

export const userLoginValidate = async (req, res, next) => {
    try {
        const bodySchema = Joi.object({
            email: Joi.email().min(2).max(30).required(),
            password: Joi.string().min(3).required(),
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

export const checkUserIdValidate = async (req, res, next) => {
    try {
        const bodySchema = Joi.object({
            userId: Joi.string().min(2).max(30).required(),
        });
        const { error } = await bodySchema.validate(req.params);
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
