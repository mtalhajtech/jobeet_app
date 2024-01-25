import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
  name: { type: String, required: true,unique:true,lowercase:true},

  
});

export default mongoose.model("category", categoriesSchema, "categories");
