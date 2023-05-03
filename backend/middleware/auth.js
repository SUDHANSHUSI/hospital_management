const express=require('express');
const jwt=require('jsonwebtoken');
const auth=(req,res,next)=>{
    try {
        // console.log(req.headers);
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];
        }
        // let token=req.headers.token;
        if(token){
            // token=token.split(" ")[1];
            let user=jwt.verify(token,process.env.JWT_SECRETKEY);
           
            req.userId=user.id;
            if(!req.userId){
                return res.status(404).json({
                   message:"User Not Exist.."
                 })
               }
            console.log('Authentication Sucessfully');
        }else{
         return  res.status(401).json({message:"Unauthorized User"})
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({message:"Unauthorized User"})
    }
    next()
}

module.exports=auth;