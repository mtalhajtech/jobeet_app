import express from "express";
import {
  getCategories,
  createCategory,deleteCategory, editCategory,getCategoriesByJobCount,getCategory
} from "../controller/category.controller.js";
const router = express.Router();

router.get("/all", getCategories);
router.get("/categoryByJobCount",getCategoriesByJobCount)
router.post("/create", createCategory);
router.get("/:categoryId", getCategory)
router.delete("/:categoryId", deleteCategory)
router.put ("/:categoryId", editCategory)

export default router;
