import  Jwt  from "jsonwebtoken";

const validateToken = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(authHeader){
       const token =  authHeader.split(' ')[1]
       console.log('token is ', token)
       if(token)
       {
          
          Jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,async (error,decoded)=>{
          if(error){
            res.status(401).json({message:"You are not Authorized"})
          }
           req.user=decoded
           next()
          })
         
       }
       else{
        res.status(401).json({message:"You are not Authorized"})
       }   
     

    }
    else {
        res.status(401).json({message:"You are not Authorized"})
    }
}

export default validateToken