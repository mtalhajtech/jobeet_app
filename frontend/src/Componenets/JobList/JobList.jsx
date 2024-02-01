import { useEffect, } from "react";
import {Table, Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import useJobDataFetch from "../../hooks/useJobDataFetch.js";
import JobTable from "../JobTable/jobTable.jsx";
import { useContext } from "react";
import AuthContext from "../../AuthProvider/AuthProvider.jsx";
import { useRef } from "react";
const JobsList = () => {
 
 const {isError,latestJobs,categories,getJobList} = useJobDataFetch()
 const {searchTerm} = useContext(AuthContext)
 const elementRef = useRef()
  useEffect(() => {
   
    getJobList()
 
  }, []);

  // const filterJobs = (categoryid)=>{
  //   return latestJobs.filter((job)=>job.categoryId===categoryid)
  // }
 const filterJobs = (categoryid)=>{
  const filteredJobs = latestJobs
  .filter(job => categoryid === null || job.categoryId === categoryid)
  .filter(job => {
    if (searchTerm.trim().length === 0) return true;

    const jobData = `${job.location} ${job.position} ${job.company}`.toLowerCase();
    return jobData.includes(searchTerm.toLowerCase());
  });
  return filteredJobs
 }
  return (
    <Container ref={elementRef} style={{minHeight:"80vh"}}>
      {categories && categories.map((category,index) => (
        <Row key={index} className="mt-3">
       { filterJobs(category._id).length > 0 && <Col>
            <Link to={`/job/category/${category?._id}`} state={{category}}>
              <h3>{category.name.charAt(0).toUpperCase()+category.name.slice(1)}</h3>
            </Link>
            <JobTable jobs={filterJobs(category._id)}></JobTable>           
          </Col>}
        </Row>
      ))}
      
    </Container>
  );
};

export default JobsList
