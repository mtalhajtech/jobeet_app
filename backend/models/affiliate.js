import mongoose from "mongoose";

const affiliateSchema = new mongoose.Schema({
  url: { type: String },
  email: { type: String },
  token: { type: String },
  active: { type: Boolean },
  createdAt: { type: Date },
});
export default mongoose.model("affiliate", affiliateSchema, "affiliates");

affliateCatogory.pre("save", function (next) {
  let currentTime = Date.now();
  this.createdAt = currentTime;
  next();
});
