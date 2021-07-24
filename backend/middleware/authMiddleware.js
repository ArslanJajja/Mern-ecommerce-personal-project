import Jwt from "jsonwebtoken";
import User from "../modals/userModal.js";
import asyncHandler from 'express-async-handler'

const protect=asyncHandler(async(req,res,next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
       try {
           token=req.headers.authorization.split(" ")[1]
           const decoded=jwt.verify(token,process.env.JWT_SECRET)
       } catch (error) {
           
       }
    };
    if(!token){
        res.status(401)
        throw new Error('Not authorized, No token')
    }

    next()
}
)
export {protect}