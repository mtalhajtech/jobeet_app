import { createJob,getJob } from '../repositories/JobRepository.js';
import { v4 as uuidv4 } from 'uuid';

const createJobService = async(jobData)=>{
  let response ={}
  console.log(jobData)
    const {
        type,
        company,
        position,
        location,
        description,
        howToApply,
        isPublic,
        category,
        email
        
      } = jobData

      if (
        !type ||
        !company ||
        !position ||
        !location ||
        !description ||
        !howToApply ||
        !isPublic ||
        !category ||
        !email
        
      ) {
       
        return { error: true, statusCode: 400, message: "Please send complete information for job creation" };
      }
      
      const currentDate = new Date();
      const expireAt = currentDate.setDate(currentDate.getDate() + 30)
      const jobtoken = uuidv4()
      const jobDetails = {...jobData,jobtoken,expireAt}
      
      console.log(jobDetails)
      try {
        const createdJob = await createJob(jobDetails);
         response['token'] = createdJob.token
         response['url']=`${process.env.FRONTEND_BASE_URL}/edit-job/${createdJob._id}`
        return { error: false, statusCode: 200, data: response };
      } catch (error) {
        return { error: true, statusCode: 500, message: 'Error creating job in service: ' + error.message };
      }
    }
    const getJobService = async(req)=>{
      const currentDate = Date.now().toLocaleString
      const categoryId = req.params.categoryId;
      try {
           const jobs = await getJob(categoryId,currentDate)
          if (jobs.length === 0) {
            return {error:true,statusCode:404,message:" Error Getting Job "+ error.message}
          }
          
              res.status(200).json({error:false,statusCode: 200,data:jobs});
          
         
          } catch (error) {
              return {error:true,statusCode:500,message:" Error Getting Job "+ error.message}
          }
}
export  {createJobService, getJobService}