import express from "express";
import {
  getCategories,
  createCategory,deleteCategory, editCategory,getCategoriesByJobCount,getCategory
} from "../controller/category.controller.js";
import validateToken from "../middlewares/validateToken.js";
const router = express.Router();

router.get("/all", getCategories);
router.get("/categoryByJobCount",getCategoriesByJobCount)
router.post("/create",validateToken, createCategory);
router.get("/:categoryId", getCategory)
router.delete("/:categoryId",validateToken, deleteCategory)
router.put ("/:categoryId",validateToken, editCategory)

export default router;
