import { useEffect, } from "react";
import {Table, Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import useJobDataFetch from "../../hooks/useJobDataFetch.js";
import JobTable from "../JobTable/jobTable.jsx";
const JobsList = () => {
 const {isError,latestJobs,categories,getJobList} = useJobDataFetch()
  

  useEffect(() => {
   
    getJobList()
 
  }, []);

  const filterjobs = (categoryid)=>{
    return latestJobs.filter((job)=>job.categoryId===categoryid)
  }

 
  return (
    <Container>
      {categories && categories.map((category,index) => (
        <Row key={index} className="mt-3">
          <Col>
            <Link to={`/job/category/${category?._id}`} state={{category}}>
              <h3>{category.name}</h3>
            </Link>
            <JobTable jobs={filterjobs(category._id)}></JobTable> 
           
          </Col>
        </Row>
      ))}
      
    </Container>
  );
};

export default JobsList;
