import {
  createJob,
  getJob,
  getLatestJobs,
} from "../repositories/JobRepository.js";
import { v4 as uuidv4 } from "uuid";
import Job from "../models/job.js";
const createJobService = async (jobData) => {
  let response = {};
  console.log(jobData);
  const {
    type,
    company,
    position,
    location,
    description,
    howToApply,
    isPublic,
    categoryId,
    email,
  } = jobData;

  if (
    !type ||
    !company ||
    !position ||
    !location ||
    !description ||
    !howToApply ||
    !isPublic ||
    !categoryId ||
    !email
  ) {
    return {
      error: true,
      statusCode: 400,
      message: "Please send complete information for job creation",
    };
  }

  const currentDate = new Date();
  const expiresAt = currentDate.setDate(currentDate.getDate() + 30);
  const jobtoken = uuidv4();
  const jobDetails = { ...jobData, jobtoken, expiresAt };

  console.log(jobDetails);
  try {
    const createdJob = await createJob(jobDetails);
    response.token = createdJob.token;
    response["token"] = createdJob.token;
    response["url"] =
      `${process.env.FRONTEND_BASE_URL}/edit-job/${createdJob._id}`;
    return { error: false, statusCode: 200, data: response };
  } catch (error) {
    return {
      error: true,
      statusCode: 500,
      message: "Error creating job in service: " + error.message,
    };
  }
};
const getJobService = async (req) => {
  const currentDate = Date.now().toLocaleString;
  const JobId = req.params.jobId;
  try {
    const jobs = await getJob(JobId, currentDate);
    if (jobs.length === 0) {
      return {
        error: true,
        statusCode: 401,
        message: " Error Getting Job " + error.message,
      };
    }

    res.status(200).json({ error: false, statusCode: 200, data: jobs });
  } catch (error) {
    return {
      error: true,
      statusCode: 500,
      message: " Error Getting Job " + error.message,
    };
  }
};
const getPaginatedJobByCategoryService = async (page, categoryId, limit) => {
  let data = {}
  const currentDate = new Date();
  try {
    const skip = (page - 1) * limit;
    const jobsByCategory = await Job.find({
      categoryId: categoryId,
      expiresAt: { $gt: currentDate },
      isActive: true,
    }).skip(skip)
      .limit(limit)
      .exec();
      
    const totaljobs = await Job.countDocuments({
      categoryId: categoryId,
      expiresAt: { $gt: currentDate },
      isActive: true,
    });

    if (jobsByCategory.length === 0) {
      return {
        error: false,
        statusCode: 200,
        message: "Jobs for this category not found",
        data: null,
      };
    }

     data.jobs = jobsByCategory
     data.totaljobs = totaljobs
    
    return { error: false, statusCode: 200, data: data };
  } catch (error) {
    return {
      error: true,
      statusCode: 500,
      message: " Error : " + error.message,
    };
  }
};
const getLatestJobsService = async (res) => {
  try {
    const latestJobs = await getLatestJobs();

    if (latestJobs.length === 0) {
      return {
        error: true,
        statusCode: 204,
        message: "Error No content found ",
      };
    }

    // res.status(200).json({error:false,statusCode: 200,data:jobsByCategory})
    return { error: false, statusCode: 200, data: latestJobs };
  } catch (error) {
    return {
      error: true,
      statusCode: 500,
      message: " Error : " + error.message,
    };
  }
};

export {
  createJobService,
  getJobService,
  getPaginatedJobByCategoryService,
  getLatestJobsService,
};
