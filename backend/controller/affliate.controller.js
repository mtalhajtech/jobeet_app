import { v4 as uuidv4 } from 'uuid';
import affiliate from '../models/affiliate.js';
const createAffiliate = async(req,res)=> {

const {url,email,categoriesList}= req.body

const token = uuidv4()

const affiliate = await affiliate.Create({url,email,token,active:false})

try {
   
    const affiliate = await affiliate.Create({url,email,token,active:false})

     return res.status(200).send({data:affiliate,message:"Affiliate Create successfully"})

} catch (error) {
    
    return res.status(500).send({message:"Error in Affiliate Creation"})
}


} 


export  {createAffiliate}