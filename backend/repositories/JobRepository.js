import category from "../models/category.js";
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
    jobtoken: token,
    isPublic,
    logo,
    expiresAt,
    email,
    categoryId,
    userId
  } = jobDetails;
  

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
    expiresAt,
    userId
  });
};

const editJob = async (jobDetails,jobId) => {
  const {
    type,
    company,
    url,
    position,
    location,
    description,
    howToApply,
    isPublic,
    logo,
    email,
    categoryId,
  } = jobDetails;


 
  return Job.updateOne({_id:jobId},{
    type,
    company,
    url,
    email,
    position,
    location,
    description,
    howToApply,
    isPublic,
    categoryId,
    logo,
  });
};

const deleteJob = async(jobId)=>{
  return Job.deleteOne({_id:jobId})
  
}

const getJob = async (jobId, currentDate) => {
  return Job.find({
    _id:jobId,
    isActive: true,
    expiresAt: { $gt: currentDate },
  }).exec();
}
  // const getActiveJobByCategory = async (page,categoryId,limit,currentDate) => {
   
    
  // };
  

  const getLatestJobs = (searchQuery)=>{
    const currentDate = new Date();
    //  let query = {
    //   $expr:{$lt:[currentDate,'$expiresAt']}
    //  }
    // if(searchQuery && searchQuery.trim()!=='')
    // query.$text ={ $search:searchQuery}
    //   return Job.find(query).sort({createdAt:-1}).limit(10).exec()
     
    var regexPattern = new RegExp(searchQuery, "i");


      return Job.find({
        $and: [
          {
            $or: [
              { 'location': { $regex: regexPattern} },
              { 'position': { $regex:regexPattern } },
              { 'company': { $regex: regexPattern } }
            ]
          },
          { 'expiresOn': { $gt: currentDate } }
        ]
      }).sort({createdAt:-1}).limit(10).exec()

  }

export { createJob, getJob, getLatestJobs, editJob, deleteJob };
