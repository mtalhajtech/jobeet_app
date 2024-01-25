import React, { useEffect, useState } from 'react';
import AffiliateTable from './AffiliateTable';
import axios from 'axios';
function ManageAffiliates(props) {


    const [affiliateData, setAffiliateData]  = useState([])
    const [isSaving,setIsSaving] = useState(false)
    const [disableIndex,setDisableIndex] = useState(-1)
    // const [disabledButtons, setDisabledButtons] = useState({});
    const setAffiliates = (data)=>{
        // let newData ={}
        const newDataArray = data.map(item => ({
            ...item,
            isButtonDisabled: false
          }));
          console.log(newDataArray)
        setAffiliateData(newDataArray)
        
     
    }

const getAffiliates = async()=>{
    try {
        const response = await axios.get('http://localhost:3000/affiliate/all')
        
        setAffiliates(response.data.data)
             

    } catch (error) {
        console.log(error)
    }
}
 
const handleActivateAffiliate = async (affiliateId,active,index)=>{

   if(!active){
           try {
            setIsSaving(true)
           
            setAffiliateData(prev => 
                prev.map((item, idx) => 
                  idx === index ? { ...item, isButtonDisabled: true } : item
                )
              )

            const response = await axios.get(`http://localhost:3000/affiliate/activeAffiliate/${affiliateId}`)

            setAffiliateData(prev => 
                prev.map((item, idx) => 
                  idx === index ? { ...item, isButtonDisabled: false } : item
                )
              )
            setIsSaving(false)
           } catch (error) {
             console.log(error)
           }
        
   }
   else{
    try {
        // setAffiliateData(prev => 
        //     prev.map((item, idx) => 
        //       idx === index ? { ...item, isButtonDisabled: true } : item
        //     )
        //   )
          setIsSaving(true)
        const response = await axios.get(`http://localhost:3000/affiliate/deActiveAffiliate/${affiliateId}`)
        setAffiliateData(prev => 
            prev.map((item, idx) => 
              idx === index ? { ...item, isButtonDisabled: false } : item

            )
          )
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
          <AffiliateTable affiliate={affiliateData} handleClick={handleActivateAffiliate} />
        </div>
    );
}

export default ManageAffiliates;