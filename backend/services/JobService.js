import {
  createJob,
  getJob,
  getActiveJobByCategory,
  getLatestJobs,
} from "../repositories/JobRepository.js";
import { v4 as uuidv4 } from "uuid";

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
        statusCode: 404,
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
const getActiveJobByCategoryService = async (res) => {
  const currentDate = new Date();
  try {
    //  const {page} = req.query
    //  const {categoryId} =  req.params
    const jobsByCategory = await getActiveJobByCategory(currentDate);

    if (jobsByCategory.length === 0)
    {
      return {
        error: true,
        statusCode: 404,
        message: " Error : " + error.message,
      };
    }

    // res.status(200).json({error:false,statusCode: 200,data:jobsByCategory})
    return { error: false, statusCode: 200, data: jobsByCategory };
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
  getActiveJobByCategoryService,
  getLatestJobsService,
};
