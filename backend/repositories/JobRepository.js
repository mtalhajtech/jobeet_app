import Job from "../models/job.js";
const createJob = async (jobDetails) => {
  const {
    type,
    company,
    url,
    position,
    location,
    description,
    howToApply,
  jobtoken:token,
    isPublic,
    logo,
    expiresAt,
    email,
    categoryId
  } = jobDetails;
 console.log(token)
  return Job.create({
    type,
    company,
    url,
    email,
    position,
    location,
    description,
    howToApply,
    token,
    isPublic,
    categoryId,
    logo,
    expiresAt
  });
};


const getJob = async (categoryId, currentDate) => {
  return Job.find({
    categoryId: categoryId,
    isActive: true,
    expiresAt: { $gt: currentDate },
  });
   const getActiveJobByCategory = async() =>{
    
   }
}


export { createJob, getJob };
