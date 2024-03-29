import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    userId:{ type: String, required: true },
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
      type: mongoose.Types.ObjectId,
      required: true,
      
    },
  },
  {
    timestamps: true,
  },
  
);
jobSchema.index({ location: 'text', position: 'text',company:'text' })
export default mongoose.model("Job", jobSchema, "jobs");
