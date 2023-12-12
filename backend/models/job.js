import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    company: { type: String, required: true },
    logo: { type: String, },
    url: { type: String, },
    position: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    howToApply: { type: String, required: true },
    token: { type: String, required: true },
    Public: { type: Boolean, require: true },
    isActive: { type: Boolean, required: true },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: [true, "Email address already taken"],
    },
    expiresAt: { type: Date },
    categoryId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Job", jobSchema, "jobs");
