import User from "../models/user.js";
import Jwt from "jsonwebtoken";
import hashPassword from "../helpers/hashpassword.js";
import bcrypt from 'bcrypt'

const tokenSecret = process.env.SECERET_TOKEN
const expiryTime =process.env.TOKEN_LIFE
const register = async (req,res)=>{
      
     const {userName,firstName,lastName,password,email} = req.body
     if(!userName || !firstName || !lastName || !password || !email  ){
       return res.status(403).json({message:" Please fill all mandatory fields "})
      }
try {
    const userExists = await User.find({email:email})
    console.log(userExists)
    if(userExists.length>0){
        return res.status(403).json({message:'User already exists'})
    }
     
    
    const hashedPassword = await hashPassword(password)
    
    const createdUser = await User.create({
        userName,firstName,lastName,password:hashedPassword,email
    })
    // const {password,...rest} = createdUser
    return res.status(200).json({message:'User Created Successfully',data:createdUser})
} catch (error) {
    return res.status(500).json({message:'User Creation Failed' + error,data:[]})
}
      
}


const login = async(req,res)=>{
  const {email,password} = req.body
  
   const user = await User.find({email:email})

   if(user.length==0 || user==null){
    return res.status(403).json({message:'User account not found'})
   }
 
   const hashedPassword = user[0].password
   const isPasswordValid = await bcrypt.compare(password,hashedPassword)
   if(!isPasswordValid){
        return res.status(401).json({message:'Invalid Credentials'})
   }

   let tokenData = {userId:user[0]._id,userEmail:user[0].email}
    
    const accessToken = Jwt.sign(tokenData,tokenSecret,{expiresIn:expiryTime})
    return res.status(200).json({message:'User Logged in Successfully ',data :{accessToken,user}})
}

 

export {register, login}