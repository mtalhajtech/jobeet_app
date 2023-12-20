import Job from "../models/job";
const create = async ()=>{
     await Job.create({
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
        logo: logoFileName,
      });
}
export default {createJob:create}