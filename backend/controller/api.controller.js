import Affiliate from "../models/affiliate.js";
import AffiliateCategory from "../models/affiliateCategory.js";
import Category from "../models/category.js";
import Job from "../models/job.js";
const getJobs = async (req, res) => {
  const limit = req.query.limit || undefined;
  const category = req.query.category || undefined;


  const apiToken = req.params.token;
  if (!apiToken) {
    return res
      .status(401)
      .json({ message: "Please provide token for the Access of API" });
  }

  try {
    const retrivedAffiliate = await Affiliate.find({ token: apiToken }).exec();

    if (retrivedAffiliate.length == 0 || retrivedAffiliate == null) {
      return res
        .status(401)
        .json({ message: "No Affiliate Found Associated Token" });
    }

    if (!retrivedAffiliate[0].active) {
      return res.status(401).json({ message: "Affiliate Must be activated" });
    }

    const affiliatedCategoriesIds = await AffiliateCategory.find({
      affiliateId: retrivedAffiliate[0]._id,
    }).select({ categoryId: 1 });

    let CatIds = [];

    affiliatedCategoriesIds.forEach((element) => {
      CatIds.push(element.categoryId);
    });

    if (category) {
      console.log("Category is", category);
      const requiredCategory = await Category.find({ name: category });
      console.log(requiredCategory);
      if (requiredCategory.length == 0 || requiredCategory == null) {
        return res
          .status(400)
          .json({ message: "Required Category Does not Exist" });
      } else {
        CatIds = CatIds.filter(
          (element) => element.toString() == requiredCategory[0]._id.toString()
        );
      }
    }
    const jobs = await Job.find({ categoryId: { $in: CatIds },isPublic:true })
      .select({
        _id: 1,
        company: 1,
        type: 1,
        url: 1,
        position: 1,
        location: 1,
        description: 1,
        howToApply: 1,
        expiresAt: 1,
      })
      .limit(limit);
    return res.status(200).json({ Data: jobs });
  } catch (error) {
    return res.status(500).json({ message: "Error in Retrieving Job" });
  }
};

export { getJobs };
