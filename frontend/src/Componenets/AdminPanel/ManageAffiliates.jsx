import React, { useContext, useEffect, useState } from 'react';
import AffiliateTable from './AffiliateTable';
import axios from 'axios';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import AuthContext from '../../AuthProvider/AuthProvider';
import Cookies from 'js-cookie';
function ManageAffiliates(props) {


    const [affiliateData, setAffiliateData]  = useState([])
    const [isSaving,setIsSaving] = useState(false)
    const {refreshAuthToken,setAuth} = useContext(AuthContext)
    const  navigate = useNavigate()    
    
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
           
            

            const response = await axios.get(`http://localhost:3000/affiliate/activeAffiliate/${affiliateId}`,{headers:{"Authorization":`Bearer ${localStorage.getItem('token')}`}})
            
           
            setIsSaving(false)
           } catch (error) {
             if(error.request.status == 401){
                toast.error('Session Expired',{position:toast.POSITION.TOP_CENTER})
                setAuth({ user:'', isAuthenticated: false,userRole:'',hasAffiliate:false,token:'',userId:null });
                Cookies.remove('refreshToken');
                localStorage.removeItem('token');
                navigate('/login')
             }
             else{
                toast.error('Error in Activating the Affiliate',{position:toast.POSITION.TOP_CENTER})
             }
           }
        
   }
   else{
    try {
      
          setIsSaving(true)
        const response = await axios.get(`http://localhost:3000/affiliate/deActiveAffiliate/${affiliateId}`, {headers:{"Authorization":`Bearer ${localStorage.getItem('token')}`}})
      
          setIsSaving(false)
    } catch (error) {
        if(error.request.status == 401){
            toast.error('Session Expired',{position:toast.POSITION.TOP_CENTER})
            setAuth({ user:'', isAuthenticated: false,userRole:'',hasAffiliate:false,token:'',userId:null });
            Cookies.remove('refreshToken');
            localStorage.removeItem('token');
            navigate('/login')
         }
         else{
            toast.error('Error in Activating the Affiliate',{position:toast.POSITION.TOP_CENTER})
         }
    }
    
   
   }




}


useEffect(()=>{
    
   
    getAffiliates()


},[isSaving])


useEffect(()=>{


    refreshAuthToken()


},[])



    return (
        <div>
          <AffiliateTable affiliate={affiliateData} handleClick={handleActivateAffiliate} isSaving={isSaving}/>
        </div>
    );
}

export default ManageAffiliates;