import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import jwt from "jsonwebtoken"


export const verifyJWT = asyncHandler( async (req, res, next) => {
    try {
        const token = req.cookie?.accessToken || req.header("Athorization")?.replace("Bearer", "")
    
        if (!token) {
            throw new ApiError(401, "unathorized request")
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        const user = await UserActivation(findById(decodedToken?._id).select("-password -refreshToken"))
    
        if(!user){
            throw new ApiError(401, "invalide access token")
        }
    
        req.user = user;
        next()
    } catch (error) {
        throw new ApiError(401, error?.message  || "invalide access token")
    }
})