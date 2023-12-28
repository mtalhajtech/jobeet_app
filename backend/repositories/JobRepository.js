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
  } = jobDetails;
  console.log(token);
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
  });
};

const getJob = async (jobId, currentDate) => {
  return Job.find({
    _id:jobId,
    isActive: true,
    expiresAt: { $gt: currentDate },
  });
}
  const getActiveJobByCategory = async (currentDate) => {
    console.log(currentDate)
    return category.aggregate([
      {
        $lookup: {
          from: "jobs",
          localField: "_id",
          foreignField: "categoryId",
          as: "jobs",
        },
      },
      {
        $project: {
          name: 1,
          description: 1,
          jobs: {
            $filter: {
              input: "$jobs",
              as: "job",
              cond: { $lt: [ currentDate , "$$job.expiresAt"] },
            },
          },
        },

      },
      { $sort: { createdAt: 1, } },
      {$limit:10},
    ]);
  };
  const getLatestJobs = ()=>{
    const currentDate = new Date();
      return Job.find({$exp:{$lt:[currentDate,'$expiresAt']}}).sort({createdAt:-1}).limit(10).exec()
  }

export { createJob, getJob, getActiveJobByCategory,getLatestJobs };
