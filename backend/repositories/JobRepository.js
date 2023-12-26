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
    token,
    isPublic,
    logo,
    expiresAt,
    categoryId
  } = jobDetails;

  return Job.create({
    type,
    company,
    url,
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
   
}


export { createJob, getJob };
