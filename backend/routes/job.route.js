import express from "express";
import {
  getJob,
  createJob,
  getPaginatedJobsByCategory,getLatestJobs,getPaginatedJobs
,editJob, deleteJob} from "../controller/job.controller.js";
import upload from "../middlewares/imageuploader.js";
import validateToken from "../middlewares/validateToken.js";
const router = express.Router();

router.get("/category/:categoryId",getPaginatedJobsByCategory)
router.get('/latest-active-jobs',getLatestJobs)
router.get('/all',getPaginatedJobs)
router.post("/post",validateToken, upload.single("logo"), createJob);
router.delete("/:jobId",validateToken, deleteJob )
router.put("/:jobId",validateToken, upload.single("logo"), editJob )
router.get("/:jobId",validateToken, getJob);
export default router;
