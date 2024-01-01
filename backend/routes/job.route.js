import express from "express";
import {
  getJob,
  createJob,
  getPaginatedJobsByCategory,getLatestJobs,authorizeToken
} from "../controller/job.controller.js";
import upload from "../middlewares/imageuploader.js";
import { editJob } from "../repositories/JobRepository.js";
const router = express.Router();

router.get("/category/:categoryId",getPaginatedJobsByCategory)
router.get('/latest-active-jobs',getLatestJobs)
router.get("/:jobId", getJob);
router.post("/post", upload.single("logo"), createJob);
router.put("/:jobId", upload.single("logo"), editJob )
router.post("/authorizeToken", authorizeToken)

export default router;
