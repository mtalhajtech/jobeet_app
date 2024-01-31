import Job from "../models/job.js";
import { createJobService,getJobService,getPaginatedJobByCategoryService,getLatestJobsService,editJobService,deleteJobService ,getPaginatedJobService} from "../services/jobService.js";

import getBaseUrl from "../helpers/baseUrl.js";


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

const getPaginatedJobs = async(req,res)=>{
 
  const page = parseInt(req.query.page)|| 1
  const limit = parseInt(req.query.limit)|| 10 
  const result = await getPaginatedJobService(page,limit)
  
  if(result.error){
   return res.status(result.statusCode).json({message:result.error})
  }
  else {res.status(result.statusCode).json(result.data)} 
}

const getLatestJobs = async(req,res)=>{
  const searchQuery = req.query.searchText
  console.log(searchQuery)
  const result = await getLatestJobsService(searchQuery)
  
  if(result.error){
   return res.status(result.statusCode).json({message:result.error})
  }
  else {res.status(result.statusCode).json(result.data)} 
}



const createJob = async (req, res) => {

    let jobData =  req.body
    if(req.file?.path)
    {
      const filePath =getBaseUrl(req)+req.file?.path 
     
      jobData.logo = filePath.replace(/\\/g, '/');
    }
    else jobData.logo=null
   
     
 const result = await createJobService(jobData)
 
 if(result.error){
   console.log(result.message) 
  return res.status(result.statusCode).json({message:result.message})
 }
 else return res.status(result.statusCode).json(result.data)
};


const editJob = async (req,res)=>{
    let jobData 
    const jobId = req.params.jobId
   
    jobData = req.body
    const filePath =getBaseUrl(req)+req.file?.path 
    jobData.logo = filePath.replace(/\\/g, '/');
    const result = await editJobService(jobData,jobId)
    console.log('in edit job')
    if(result.error){
      return res.status(result.statusCode).json({message:result.message})
    }
    else return res.status(result.statusCode).json({message:result.message})
}

const deleteJob = async (req,res )=>{
   const jobId = req.params.jobId
   const result = await deleteJobService(jobId)
   if(result.error){
    return res.status(result.statusCode).json({message:result.message})
   }
   else return res.status(result.statusCode).json({message:result.message})
}




export { getJob, createJob,getPaginatedJobs, getPaginatedJobsByCategory,getLatestJobs,editJob,deleteJob};
