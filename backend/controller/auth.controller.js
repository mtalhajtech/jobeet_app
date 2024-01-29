import User from "../models/user.js";
import Jwt from "jsonwebtoken";
import hashPassword from "../helpers/hashpassword.js";
import bcrypt from 'bcrypt'

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET
const accessTokenExpiry = process.env.ACCESS_TOKEN_LIFE
const refreshTokenExpiry = process.env.REFRESH_TOKEN_LIFE


const register = async (req,res)=>{
      
     const {userName,firstName,lastName,password,email,role} = req.body
     console.log(req.body)
     if(!userName || !firstName || !lastName || !password || !email  ){
       return res.status(400).json({message:" Please fill all mandatory fields "})
      }
try {
    const userExists = await User.find({email:email})
    console.log(userExists)

    if(userExists.length>0){
        return res.status(400).json({message:'User already exists.Please use different Email'})
    }
     
    
    const hashedPassword = await hashPassword(password)
    
    const createdUser = await User.create({
        userName,firstName,lastName,password:hashedPassword,email,userRole:role
    })
    // const {password,...rest} = createdUser
    return res.status(200).json({message:'User Created Successfully',data:createdUser})
} catch (error) {
    return res.status(500).json({message:'User Creation Failed' + error,data:[]})
}
      
}


const login = async (req,res)=>{
  const {email,password} = req.body
  const user = await User.find({email:email})
   
   if(user.length==0 || user==null){
    return res.status(400).json({message:'User account not found'})
   }
 
  
   const {password:hashedPassword,userName,userRole,email:userEmail,hasAffiliate} = user[0]
   console.log(user[0])
   console.log('hasAffiliateValue', hasAffiliate)
   const isPasswordValid = await bcrypt.compare(password,hashedPassword)
   if(!isPasswordValid){
        return res.status(401).json({message:'Invalid Credentials'})
   }
   console.log(userRole,userName)
   let tokenData = {userId:user[0]._id,userName:userName,userEmail:userEmail}
    
    const accessToken = Jwt.sign(tokenData,accessTokenSecret,{expiresIn:accessTokenExpiry})
    const refreshToken = Jwt.sign(tokenData, refreshTokenSecret, { expiresIn: refreshTokenExpiry });
    console.log(accessTokenExpiry,refreshTokenExpiry)
    res.cookie('refreshToken', refreshToken, {
        httpOnly: false, 
        secure: false, 
        sameSite: 'strict', 
        maxAge: 1 * 24 * 60 * 60 * 1000
      });
    
    return res.status(200).json({message:'User Logged in Successfully ',data :{accessToken,userName,userRole,hasAffiliate,userId:tokenData.userId}})
}

const refreshAccessToken = (req,res)=>{
   
    const refreshToken = req.cookies.refreshToken;
     console.log('refreshtoken is ',refreshToken)
    if(!refreshToken)
    {
        return res.status(401).send({message:"Token Not Present"})
    }
    try {
        const decodeUser = Jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET)
        const user = decodeUser.userId
        const newAccessToken = Jwt.sign({user},accessTokenSecret,{expiresIn:accessTokenExpiry})
        console.log(newAccessToken)
        return res.status(200).send({accessToken:newAccessToken})
    } catch (error) {
        return res.status(401).send({message:"Refresh Token Expired"})
    }
    
    

      
}
const logout =  (req, res) => {
    res.cookie('refreshToken', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
    path:'/'
    });
    
    res.status(200).send('Logged out');
  };
export {register, login,refreshAccessToken,logout}