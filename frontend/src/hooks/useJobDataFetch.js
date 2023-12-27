import React from "react";
import { useState } from "react";
import { getLatestJobs, getAllCategories } from "../services/JobsData";

function useJobDataFetch() {
  const [latestJobs, setLatestJobs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isError, setIsError] = useState(false)
  let results = []
  
  const getJobList = async () => {
    try {
        const [jobdata, categoryData] = await Promise.all(
            getActiveJobListByCategory(),
            getAllCategories()
          );
      
          setLatestJobs(jobdata);
          setCategories(categoryData);
    } catch (error) {
        setIsError(true)
        console.log(error)
    }
   
  };
  return {};
}

export default useJobDataFetch;
