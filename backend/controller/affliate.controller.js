import { v4 as uuidv4 } from 'uuid';
import affiliate from '../models/affiliate.js';
import affiliateCategory from '../models/affiliateCategory.js';
import mongoose from 'mongoose';
const createAffiliate = async(req,res)=> {

const {url,email,categories}= req.body
const token = uuidv4()


try {
     let affiliateCategories =[]
    const createdAffiliate = await affiliate.create({url,email,token,active:false})
    const affiliateId = createdAffiliate._id
    for (const property in categories) {
        if(categories[property]==true){
            const categoryId = new mongoose.Types.ObjectId(property);
            affiliateCategories.push(
                affiliateCategory.create({categoryId,affiliateId})
            )
        }
        
      }

      await Promise.all(affiliateCategories)

     return res.status(200).send({data:createdAffiliate,message:"Affiliate Create successfully"})

} catch (error) {
    
    return res.status(500).send({message:"Error in Affiliate Creation"})
}


} 

const getAffiliates = async(req,res)=>{
    try {
        const Affiliates = await affiliate.find()
        return res.status(200).send({data:Affiliates})
    } catch (error) {
        return res.status(500).send({error:'Failed To Retrieve Affiliates'})
    }
 const getActiveJobForAfiiliates= async (req,res)=>{
    
    

 }   

}
export  {createAffiliate,getAffiliates}