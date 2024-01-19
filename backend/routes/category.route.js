import express from "express";
import {
  getCategories,
  createCategory,deleteCategory, editCategory,getCategoriesByJobCount,getCategory
} from "../controller/category.controller.js";
const router = express.Router();

router.get("/all", getCategories);
router.get("/:categoryId", getCategory)
router.post("/create", createCategory);
router.delete("/:categoryId", deleteCategory)
router.put ("/:categoryId", editCategory)
router.get("/categoryByJobCount",getCategoriesByJobCount)
export default router;
