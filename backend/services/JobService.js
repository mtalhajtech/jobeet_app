import {
  createJob,
  getJob,
  getLatestJobs,editJob,deleteJob
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
    email,userId
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
    !email || !userId
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
    // response.token = createdJob.token;
    // response.url =
    //   `${process.env.FRONTEND_BASE_URL}/edit-job/${createdJob._id}`;
    return { error: false, statusCode: 200, data: response };
  } catch (error) {
    return {
      error: true,
      statusCode: 500,
      message: "Error creating job in service: " + error.message,
    };
  }
};


const editJobService = async (jobData,jobId)=>{
  
  try {
    const editedJob = await editJob(jobData,jobId);
    return { error: false, statusCode: 200, data: editedJob,message: "Job is Updated Successfully" };

  } catch (error) {
    return {
      error: true,
      statusCode: 500,
      message: "Error in Updating Job: " + error.message,
    };
  }


}

const deleteJobService = async (jobId)=>{
  try {
    const deletedJob = await deleteJob(jobId)
    return { error: false, statusCode: 200, data: deletedJob,message: "Job is deleted Successfully" }
  } catch (error) {
    return{
      error: true,
      statusCode: 500,
      message: "Error in Deleting Job: " + error.message,
    };
  }
}


const getJobService = async (req) => {
  const currentDate = new Date()
  const JobId = req.params.jobId;
 
  try {
    const jobs = await getJob(JobId, currentDate);
   
    if (jobs.length === 0) {
      return {
        error: false,
        statusCode: 200,
        message: "No Job Found",data:[]
      };
    }

   return  { error: false, statusCode: 200, data: jobs };
  } catch (error) {
    console.log(error.message)
    return {
      error: true,
      statusCode: 500,
      message: " Error Getting Job " + error.message,
    };
  }
};



const getPaginatedJobByCategoryService = async (page, categoryId, limit, searchQuery) => {
  let data = {};
  const currentDate = new Date();
  try {
    const skip = (page - 1) * limit;
    const regexPattern = new RegExp(searchQuery, "i");

    // Use an array to dynamically build the $and conditions
    const conditions = [
      {
        $or: [
          { 'location': { $regex: regexPattern } },
          { 'position': { $regex: regexPattern } },
          { 'company': { $regex: regexPattern } }
        ]
      },
      { 'expiresOn': { $gt: currentDate } },
      { 'categoryId': categoryId },
      { 'isActive': true },
    ];

    const jobsByCategory = await Job.find({ $and: conditions })
      .skip(skip)
      .limit(limit)
      .exec();

    // Dynamic countDocuments query based on conditions
    const totaljobs = await Job.countDocuments({ $and: conditions });

    if (jobsByCategory.length === 0) {
      return {
        error: false,
        statusCode: 200,
        message: "Jobs for this category not found",
        data: null,
      };
    }

    data.jobs = jobsByCategory;
    data.totaljobs = totaljobs;

    return { error: false, statusCode: 200, data: data };
  } catch (error) {
    return {
      error: true,
      statusCode: 500,
      message: "Error: " + error.message,
    };
  }
};



const getPaginatedJobService = async (page, limit) => {
  let data = {}
  const currentDate = new Date();
  try {
    const skip = (page - 1) * limit;
    const jobsList = await Job.find({
      expiresAt: { $gt: currentDate },
      isActive: true,
    }).skip(skip)
      .limit(limit)
      .exec();
      
    const totaljobs = await Job.countDocuments({
      
      expiresAt: { $gt: currentDate },
      isActive: true,
    });

    if (jobsList.length === 0) {
      return {
        error: false,
        statusCode: 200,
        message: "No Jobs Found",
        data: null,
      };
    }
     
     data.jobs = jobsList
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

const getLatestJobsService = async () => {
  try {
    const latestJobs = await getLatestJobs();
    // console.log(latestJobs)
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
    console.log(error)
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
  editJobService,
  deleteJobService,
  getPaginatedJobService
};
