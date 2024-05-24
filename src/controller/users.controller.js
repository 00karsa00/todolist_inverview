import { insetUserRepo, userInfoRepo, userUpdateRepo, userListRepo, userCount } from "../repository/users.repository.js";
import { createHashPassword, createToken, comparePassword } from "../utils/common.js";

export const userRegister = async (req, res, next) => {
    try {
        let { name, email, password, phone, address } = req.body;
        let userInfo = await userInfoRepo({ email });
        if (userInfo) {
            return next({ status: 200, message: "User Already exisit" });
        }
        let hashPassword = await createHashPassword(password)
        await insetUserRepo({ name, email, password: hashPassword, phone, address });
        res.status(200).json({
            error: false,
            message: "Register successfully"
        });
    } catch (error) {
        console.log("Error => ", error)
        console.trace();
        next({ message: "Internal Error" })
    }
};

export const userInfo = async (req, res, next) => {
    try {
        let { userId } = req.params;
        let userInfo = await userInfoRepo({ _id: userId });
        if (!userInfo) {
            return next({ status: 200, message: "Userid is not found" });
        }
        res.status(200).json({
            error: false,
            message: "fetch data successfully",
            userInfo: userInfo
        });
    } catch (error) {
        console.log("Error => ", error)
        console.trace();
        next({ message: "Internal Error" })
    }
};

export const updateUserInfo = async (req, res, next) => {
    try {
        let { userId } = req.params;
        let { name, email, password, phone, address } = req.body;
        let userInfo = await userInfoRepo({ _id: userId });
        if (!userInfo) {
            return next({ status: 200, message: "Userid is not found" });
        }
        let updateData = {};
        name ? updateData.name = name : "";
        email ? updateData.email = email : "";
        password ? updateData.password = password : "";
        phone ? updateData.phone = phone : "";
        address ? updateData.address = address : "";
        await userUpdateRepo({ filter: { _id: userId }, updateData });
        res.status(200).json({
            error: false,
            message: "Updated successfully"
        });
    } catch (error) {
        console.log("Error => ", error)
        console.trace();
        next({ message: "Internal Error" })
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        let { userId } = req.params;
        let userInfo = await userInfoRepo({ _id: userId });
        if (!userInfo) {
            return next({ status: 200, message: "User is not found" });
        }
        
        await userUpdateRepo({ filter: { _id: userId }, updateData:{ isDelete: true }});
        res.status(200).json({
            error: false,
            message: "Updated successfully"
        });
    } catch (error) {
        console.log("Error => ", error)
        console.trace();
        next({ message: "Internal Error" })
    }
};

export const getUserList = async (req, res, next) => {
    try {
        let { name, email, phone, address, page, limit } = req.body;
        let [userlist, totalUsers] = await Promise.all([
            userListRepo({ name, email, phone, address, page, limit }),
            userCount({ name, email, phone, address })
        ])
        res.status(200).json({
            error: false,
            message: "fetch data successfully",
            totalUsers,
            userlist
        });
    } catch (error) {
        console.log("Error => ", error)
        console.trace();
        next({ message: "Internal Error" })
    }
};

export const userLogin = async (req, res, next) => {
    try {
        let { email, password } = req.body;
        let userInfo = await userInfoRepo({ email });
        if (!userInfo) {
            return next({ status: 200, message: "email is not found" });
        }
        let hashPassword = await comparePassword(password, userInfo.password)
        if(hashPassword) {
            let token = await createToken({ userId: userInfo._id, email})
            console.log("token => ",token)
            return res.status(200).json({
                error: false,
                message: "Login Successfully",
                token
            });
        } 
        return next({ status: 200, message: "Password was wrong" });
    } catch (error) {
        console.log("Error => ", error)
        console.trace();
        next({ message: "Internal Error" })
    }
};
