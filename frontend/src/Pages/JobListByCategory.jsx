import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPaginatedJobsByCategory } from '../services/JobsData';

function JobListByCategory() {
   const location = useLocation()
   const category = location.state.category
   const {_id:categoryId} =  category
   const [aprError,setApiError] = useState(false)
   function getPaginatedData(){
    try {
        const response =  await getPaginatedJobsByCategory(page,limit,categoryId)
        const {jobs,totaljobs} = response
    } catch (error) {
      setApiError(true)
    }
   }


  useEffect(()=>{
  
  },[])
  
    return ( 
        
    );
}

export default JobListByCategory;