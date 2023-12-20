import Job from "../models/job.js";
import jobService from "../services/jobService.js";
const currentDate = new Date();

const getActiveJobsByCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId;

  const retrievedJobs = await Job.find({
    categoryId: categoryId,
    isActive: true,
    expiresAt: { $gt: currentDate },
  });
  if (retrievedJobs.length === 0) {
    return res
      .status(404)
      .json("No Active Jobs Found for the specific categories");
  }

  res.status(200).json(retrievedJobs);
  } catch (error) {
    next(error)
  }  
  
 
};

const createJob = async (req, res) => {
 const result = await jobService.createJob(req)
 if(result.error){
  return res.status(result.statusCode).json({message:result.error})
 }
 else res.status(result.statusCode).json(result.data)
};
export { getActiveJobsByCategory, createJob };
