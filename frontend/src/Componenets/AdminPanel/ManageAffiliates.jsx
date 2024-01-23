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
            // setDisableIndex(index)
            // setIsSaving(true)
            // setDisabledButtons((prev)=>({...prev,[index]:true}))  
            const response = await axios.get(`http://localhost:3000/affiliate/activeAffiliate/${affiliateId}`)
            // setDisabledButtons((prev)=>({...prev,[index]:false})) 
            // setIsSaving(false)
            // setDisableIndex(-1)
           } catch (error) {
             console.log(error)
           }
        
   }
   else{
    console.log('not active')
   }

//    if(e.target.innerText='Activate'){
     
//     console.log('here in activate')
//    try {
//     setIsSaving(true)
//     const response = await axios.get(`http://localhost:3000/affiliate/activeAffiliate/${affiliateId}`)
//     setIsSaving(false)
    
//    } catch (error) {
//      console.log(error)
//    }

//    }

//    else {

//     try {
      
//         const response = await axios.get(`http://localhost:3000/affiliate/deActiveAffiliate/${affiliateId}`)
//         console.log('deActivate')
        
//        } catch (error) {
//          console.log(error)
//        }
    
//    }


}
 
// const handleDeActivateAffiliate = async ()=>{

// }


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