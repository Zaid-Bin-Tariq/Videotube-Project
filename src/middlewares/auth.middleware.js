import { ACCESS_TOKEN_SECRET } from "../../config.js";
import { ApiErrors } from "../utils/ApiErrors.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async(req, _, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        
        // console.log(token);
        if (!token) {
            throw new ApiErrors(401, "Unauthorized request")
        }
    
        const decodedToken = jwt.verify(token, ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
        console.log(user);
        
    
        if (!user) {
            
            throw new ApiErrors(401, "Invalid Access Token")
        }
    
        req.user = user;
        next()
    } catch (error) {
        throw new ApiErrors(401, error?.message || "Invalid access token")
    }
    
})



