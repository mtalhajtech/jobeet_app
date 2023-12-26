import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    company: { type: String, required: true },
    logo: { type: String },
    url: { type: String },
    position: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    howToApply: { type: String, required: true },
    token: { type: String, required: true },
    isPublic: { type: Boolean, require: true },
    isActive: { type: Boolean, default: true },
    email: {
      type: String,
      required: [true, "Please enter your email"],
     
    },
    expiresAt: { type: Date, required: true },
    categoryId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
export default mongoose.model("Job", jobSchema, "jobs");
