import axios from "axios";

import constants from "../../utilis/constants";

const getActiveJobListByCategory = async () => {
  const apiurl = `${constants.FRONTEND_BASE_URL}job/active-by-category`;

  const request = await axios.get(apiurl);
  const result =  request.data;
  return result;
};
const getLatestJobs = async () =>{
    const apiurl = `${constants.FRONTEND_BASE_URL}job/latest-active-jobs`;
    const request = await axios.get(apiurl)
    const result = request.data
    return result

}
const getAllCategories = async () =>{
    const apiurl = `${constants.FRONTEND_BASE_URL}category/all`;
    const request = await axios.get(apiurl)
    const result = request.data
    return result
}
export  { getActiveJobListByCategory,getLatestJobs,getAllCategories };

