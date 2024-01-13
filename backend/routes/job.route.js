import express from "express";
import {
  getJob,
  createJob,
  getPaginatedJobsByCategory,getLatestJobs
,editJob, deleteJob} from "../controller/job.controller.js";
import upload from "../middlewares/imageuploader.js";
import validateToken from "../middlewares/validateToken.js";
const router = express.Router();

router.get("/category/:categoryId",getPaginatedJobsByCategory)
router.get('/latest-active-jobs',getLatestJobs)
router.put("/:jobId", upload.single("logo"), editJob )
router.get("/:jobId", getJob);
router.post("/post", upload.single("logo"), createJob);
router.delete("/:jobId",validateToken, deleteJob )


export default router;
