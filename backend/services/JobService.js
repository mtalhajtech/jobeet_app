import { createJob } from '../repositories/JobRepository.js';
import { v4 as uuidv4 } from 'uuid';

const createJobService = async()=>{
  let response ={}
    const {
        type,
        company,
        position,
        location,
        description,
        howToApply,
        isPublic,
        isActive
      } = jobData
      if (
        !type ||
        !company ||
        !position ||
        !location ||
        !description ||
        !howToApply ||
        
        !isPublic ||
        !isActive
      ) {
        return { error: true, statusCode: 400, message: "Please send complete information for job creation" };
      }
      const logoFileName = req.file.filename;
      const currentDate = new Date();
      const expireAt = currentDate.setDate(currentDate.getDate() + 30)
      const jobtoken = uuidv4()
      const jobDetails = {...jobData,jobtoken,expireAt}
     
      try {
        const createdJob = await createJob(jobDetails);
         response['token'] = createdJob.token
         response['url']=`${process.env.FRONTEND_BASE_URL}/edit-job/${createdJob._id}`
        return { error: false, statusCode: 200, data: response };
      } catch (error) {
        return { error: true, statusCode: 500, message: 'Error creating job in service: ' + error.message };
      }
    }
   
export  {createJobService}