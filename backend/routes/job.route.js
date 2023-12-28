import express from "express";
import {
  getJob,
  createJob,
  getPaginatedJobsByCategory,getLatestJobs
} from "../controller/job.controller.js";
import upload from "../middlewares/imageuploader.js";
const router = express.Router();

router.get("/category/:categoryId",getPaginatedJobsByCategory)
router.get('/latest-active-jobs',getLatestJobs)
router.get("/:jobId", getJob);
router.post("/post", upload.single("logo"), createJob);


export default router;
