import mongoose from "mongoose";

const categoriesSchema= new mongoose.Schema({
    name:{type:String,
    required:true},

})

export default mongoose.model('category', categoriesSchema, 'categories')