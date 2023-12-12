import Job from "../models/job.js";
 
const getJobsByCategory = async (req, res) => {
  const categoryId = req.params.categoryId;
  const retrievedJobs = await Job.find({ categoryId: categoryId });
  if (!retrievedJobs) {
    return res.status(404).send("No Jobs Found ib the specific categories");
  }
  res.status(200).json(retrievedJobs);
}

const createJob = async (req, res) => {
    
    const {type,company,url,position,location,description,howToApply,token,isPublic,isActive}=req.body
    if(!type || !company || !url || !position || !location || !description || !howToApply || !token || !isPublic || !isActive  )
    {
        return res.status(400).json("Please send complete Information for Job Creation")
    }
    const logoFileName= req.file.filename
    try {
        const createdJob = await Job.create({
            type,company,url,position,location,description,howToApply,token,isPublic,isActive,logo:logoFileName
        })
        res.status(200).json(createdJob)
    } catch (error) {
        next(error)
    }
    

    

};
export { getJobsByCategory,createJob };
