import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
  name: { type: String, required: true},
 
  nameLowercase: {
    type: String,
    unique: true,
    lowercase: true,
    select: false, 
    
  }
});

categoriesSchema.pre('save', function(next) {
  if (this.name) {
    this.nameLowercase = this.name.toLowerCase();
  }
  next();
});

categoriesSchema.pre('findOneAndUpdate', function (next) {
  if (this._update.name) {
    this._update.nameLowercase = this._update.name.toLowerCase();
  }
  next();
});
export default mongoose.model("category", categoriesSchema, "categories");
