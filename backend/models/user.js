import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{type:String, required:true},
    firstName:{type:String, required: true},
    lastName: {type:String, required: true},
    password:{type:String, required: true},
    email:{type:String, required: true, unique:true},
    userRole:{type:String,default:'user'}
})
export default mongoose.model("user",userSchema,"users")