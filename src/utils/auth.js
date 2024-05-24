
import { userInfoRepo } from '../repository/users.repository.js';
import { verifyJWTToken } from "../utils/common.js";

export const verifyToken = async (req, res, next) => {
    try {
        let decoded = await verifyJWTToken(req.headers.authorization)
        let userInfo = await userInfoRepo({email:decoded.email});
        if (!userInfo) {
            return next({ message: "invalid user token" })
        }
        req.userInfo = userInfo;
        next();
    } catch (e) {
        console.log("Error => ", e)
        console.trace();
        return next({ message: "invalid token" })
    }

};
