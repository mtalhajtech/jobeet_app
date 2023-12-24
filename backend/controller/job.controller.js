import Job from "../models/job.js";
import { createJobService,getJobService } from "../services/jobService.js";
const currentDate = new Date();

const getJob = async (req, res,) => {

  const result = await getJobService(req)
  if(result.error){
    return res.status(result.statusCode).json({message:result.error})
   }
   else {res.status(result.statusCode).json(result.data)} 
  }



const createJob = async (req, res) => {
 const jobData = req.body    
 const result = await createJobService(jobData)
 if(result.error){
  return res.status(result.statusCode).json({message:result.error})
 }
 else res.status(result.statusCode).json(result.data)
};
export { getJob, createJob };
