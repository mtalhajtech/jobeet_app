import Job from "../models/job.js";
import { createJobService,getJobService,getPaginatedJobByCategoryService,getLatestJobsService } from "../services/jobService.js";
const currentDate = new Date();

const getJob = async (req, res,) => {

  const result = await getJobService(req)
  if(result.error){
    return res.status(result.statusCode).json({message:result.error})
   }
   else {res.status(result.statusCode).json(result.data)} 
  }

const getPaginatedJobsByCategory = async(req,res)=>{
       const categoryId = req.params.categoryId
       const page = parseInt(req.query.page)|| 1
       const limit = parseInt(req.query.limit)|| 10 
       const result = await getPaginatedJobByCategoryService(page,categoryId,limit)
       console.log(result)
       if(result.error){
        return res.status(result.statusCode).json({message:result.error})
       }
       else {res.status(result.statusCode).json(result.data)} 
}
const getLatestJobs = async(req,res)=>{
  const result = await getLatestJobsService()
  console.log(result)
  if(result.error){
   return res.status(result.statusCode).json({message:result.error})
  }
  else {res.status(result.statusCode).json(result.data)} 
}
const createJob = async (req, res) => {

 let jobData =  req.body
     jobData.logo = req.file?.filename;
     
 const result = await createJobService(jobData)
 
 if(result.error){
   console.log(result.message) 
  return res.status(result.statusCode).json({message:result.message})
 }
 else return res.status(result.statusCode).json(result.data)
};
export { getJob, createJob, getPaginatedJobsByCategory,getLatestJobs };
