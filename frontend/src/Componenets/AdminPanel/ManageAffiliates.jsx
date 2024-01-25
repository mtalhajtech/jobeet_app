import React, { useEffect, useState } from 'react';
import AffiliateTable from './AffiliateTable';
import axios from 'axios';
function ManageAffiliates(props) {


    const [affiliateData, setAffiliateData]  = useState([])
    const [isSaving,setIsSaving] = useState(false)
   
     
    
const getAffiliates = async()=>{
    try {
        const response = await axios.get('http://localhost:3000/affiliate/all')
        setAffiliateData(response.data.data)
             

    } catch (error) {
        console.log(error)
    }
}
 
const handleActivateAffiliate = async (affiliateId,active,index)=>{

   if(!active){
           try {
            setIsSaving(true)
           
            

            const response = await axios.get(`http://localhost:3000/affiliate/activeAffiliate/${affiliateId}`)

           
            setIsSaving(false)
           } catch (error) {
             console.log(error)
           }
        
   }
   else{
    try {
      
          setIsSaving(true)
        const response = await axios.get(`http://localhost:3000/affiliate/deActiveAffiliate/${affiliateId}`)
      
          setIsSaving(false)
    } catch (error) {
        console.log(error)
    }
    
   
   }




}


useEffect(()=>{
    
   
    getAffiliates()


},[isSaving])





    return (
        <div>
          <AffiliateTable affiliate={affiliateData} handleClick={handleActivateAffiliate} isSaving={isSaving}/>
        </div>
    );
}

export default ManageAffiliates;