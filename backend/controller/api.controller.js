import affiliate from "../models/affiliate.js";
import affiliateCategory from "../models/affiliateCategory.js";

const getJobs= async (req,res)=>{
 
    const apiToken = req.params.token
    if(!apiToken){
       return res.status(401).json({message:'Please provide token for the Access of API'})
    }


    try {
        const retrivedAffiliate = await affiliate.find({token:apiToken});
        
        if(retrivedAffiliate.length==0 || retrivedAffiliate==null){

            return res.status(401).json({message:'No matching Affiliate Found Associated Token'});
        }
 
        if(!retrivedAffiliate.active)
        {
            return res.status(401).json({message:'Affiliate Must be activated'});
        }

        const affiliatedCategoriesIds = await affiliateCategory.find({_id:retrivedAffiliate._id})



    } catch (error) {
        
    }

 
}

export  {getJobs}