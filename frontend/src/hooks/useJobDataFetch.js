import React from "react";
import { useState } from "react";
import { getLatestJobs, getAllCategories } from "../services/JobsData";
import { useContext } from "react";
import AuthContext from "../AuthProvider/AuthProvider";
function useJobDataFetch() {
  const [latestJobs, setLatestJobs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isError, setIsError] = useState(false)
 
  
  const getJobList = async () => {
    try {
       
        const [jobdata, categoryData] = await Promise.all([getLatestJobs(),
            getAllCategories()]
            
          );
      
          setLatestJobs(jobdata);
          setCategories(categoryData);
    } catch (error) {
        setIsError(true)
       
    }
   
  };
  
  return {latestJobs,categories,isError,getJobList};
}

export default useJobDataFetch;
