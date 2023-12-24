import express from "express";
import {
  getJob,
  createJob,
} from "../controller/job.controller.js";
import upload from "../middlewares/imageuploader.js";
const router = express.Router();

router.get("/:categoryId", getJob);
router.post("/post", upload.single("logo"), createJob);

export default router;
