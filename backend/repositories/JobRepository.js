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
    isActive,
    logoFileName,
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
    isActive,
    categoryId,
    logo: logoFileName,
    expiresAt
  });
};
export  { createJob  };
