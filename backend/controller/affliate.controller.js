
import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose';

import { sendEmail } from '../helpers/Mailer.js';

import affiliate from '../models/affiliate.js';
import affiliateCategory from '../models/affiliateCategory.js';


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
        const Affiliates = await affiliate.find();
        return res.status(200).send({data:Affiliates});
    } catch (error) {
        return res.status(500).send({error:'Failed To Retrieve Affiliates'});
    }
    

 }
 


 const activateAffiliate = async (req,res)=>{
    
    const affiliateId = req.params.affiliateId
    try {
        const requiredAffiliate = await affiliate.findById(affiliateId)
        const token = requiredAffiliate.token
        if(!requiredAffiliate || requiredAffiliate == null)
        {
           return res.status(404).send({message:'Affiliate Does not Found'})
        }
        else if(!requiredAffiliate.email){

            return res.status(404).send({message:'Affiliate Must Have a Email To Be activated'})
        }
        else if(!token) {
            return res.status(404).send({message:'Token Must be assigned To Affiliate. Contant Admin for Token Generation'})
        }
        
       await affiliate.findByIdAndUpdate(affiliateId,{active:true})
       const emailResponse = await sendEmail(requiredAffiliate.email,token)
       
       res.status(200).send({message:emailResponse})

    } catch (error) {
        
        return res.status(500).send({message:"Error in Activation of Affiliate"})
    }


}
const deActivateAffiliate = async(req,res)=>{
   
    const affiliateId = req.params.affiliateId
    try {
        const requiredAffiliate = await affiliate.findById(affiliateId)

        if(!requiredAffiliate || requiredAffiliate == null)
        {
           return res.status(404).send({message:'Affiliate Does not Found'})
        }
        
        await affiliate.findByIdAndUpdate(affiliateId,{active:false})
         
        }
        catch{
          return res.status(500).send({message:"Error in DeActivation of Affiliate"})
        }

}
export  {createAffiliate,getAffiliates,activateAffiliate,deActivateAffiliate}