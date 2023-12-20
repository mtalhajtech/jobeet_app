import JobRepositroy from "../repositories/JobRepositoy";
const createJob = async()=>{
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
        isActive
      } = jobData;
      if (
        !type ||
        !company ||
        !url ||
        !position ||
        !location ||
        !description ||
        !howToApply ||
        !token ||
        !isPublic ||
        !isActive
      ) {
        return { error: true, statusCode: 400, message: "Please send complete information for job creation" };
      }
      const logoFileName = req.file.filename;
      try {
        const createdJob = await JobRepositroy.createJob(jobData);
        return { error: false, statusCode: 200, data: createdJob };
      } catch (error) {
        return { error: true, statusCode: 500, message: 'Error creating job in service: ' + error.message };
      }
    }
      try {
        const createdJob = await JobRepositroy.createJob(jobData)

        res.status(200).json({error:false,statusCode: 200,data:createdJob});
      } catch (error) {
        res.status(500).json({ error: true, statusCode: 500, message: 'Error creating job in service: ' + error.message });
      }
export default  {createJob}