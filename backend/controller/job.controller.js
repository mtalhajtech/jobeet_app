import Job from "../models/job.js";
const currentDate = new Date();

const getActiveJobsByCategory = async (req, res) => {
  const categoryId = req.params.categoryId;

  const retrievedJobs = await Job.find({
    categoryId: categoryId,
    isActive: true,
    expiresAt: { $gt: currentDate },
  });
  if (retrievedJobs.length === 0) {
    return res
      .status(404)
      .json("No Active Jobs Found for the specific categories");
  }
  res.status(200).json(retrievedJobs);
};

const createJob = async (req, res) => {
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
  } = req.body;
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
    return res
      .status(400)
      .json("Please send complete Information for Job Creation");
  }
  const logoFileName = req.file.filename;
  try {
    const createdJob = await Job.create({
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
    res.status(200).json(createdJob);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export { getActiveJobsByCategory, createJob };
