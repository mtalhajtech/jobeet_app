import express from "express";
import {
  getCategories,
  createCategory,
} from "../controller/categorie.controller.js";
const router = express.Router();

router.get("/all", getCategories);
router.post("/create", createCategory);

export default router;
