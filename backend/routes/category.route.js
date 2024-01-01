import express from "express";
import {
  getCategories,
  createCategory,deleteCategory, editCategory
} from "../controller/category.controller.js";
const router = express.Router();

router.get("/all", getCategories);
router.post("/create", createCategory);
router.delete("/:jobId", deleteCategory)
router.put ("/:jobId", editCategory)
export default router;
