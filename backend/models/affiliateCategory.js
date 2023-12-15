import mongoose from "mongoose";

const affiliateCategorySchema = new mongoose.Schema({
  categoryId: { type: mongoose.Types.ObjectId, required: true },
  affiliateId: { type: mongoose.Types.ObjectId, required: true },
});

export default model.mongoose(
  "affiliateCategory",
  affiliateCategorySchema,
  "affiliateCategories",
);
