import React, { useEffect, useState } from 'react';
import AffiliateTable from './AffiliateTable';
import axios from 'axios';
function ManageAffiliates(props) {


    const [affiliateData, setAffiliateData]  = useState([])


const getAffiliates = async()=>{
    try {
        const response = await axios.get('http://localhost:3000/affiliate/all')
        setAffiliateData(response.data.data)
             console.log(response.data)

    } catch (error) {
        console.log(error)
    }
}
  


useEffect(()=>{
    
   
    getAffiliates()


},[])





    return (
        <div>
          <AffiliateTable affiliate={affiliateData}/>
        </div>
    );
}

export default ManageAffiliates;