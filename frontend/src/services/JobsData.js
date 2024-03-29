import axios from "axios";

import constants from "../../utilis/constants";


const getLatestJobs = async () =>{
    const apiUrl = `${constants.BACKEND_BASE_URL}job/latest-active-jobs`;
    const request = await axios.get(apiUrl)
    const result = request.data
    return result

}
const getAllCategories = async () =>{
    const apiUrl = `${constants.BACKEND_BASE_URL}category/all`;
    const request = await axios.get(apiUrl)
    const result = request.data
    return result
}
const getPaginatedJobsByCategory = async (page,limit,categoryId,searchTerm) =>{
  const apiUrl = `${constants.BACKEND_BASE_URL}job/category/${categoryId}?page=${page}&limit=${limit}&search=${searchTerm}`
  const request = await axios.get(apiUrl)
  const result = request.data
  return result
}
const getPaginatedJobs = async (page,limit) =>{
  const apiUrl = `${constants.BACKEND_BASE_URL}job/all/?page=${page}&limit=${limit}`
  const request = await axios.get(apiUrl)
  const result = request.data
  return result
}

export  { getPaginatedJobsByCategory,getLatestJobs,getAllCategories,getPaginatedJobs };

