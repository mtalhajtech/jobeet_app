import { useEffect, useState } from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import { categories, jobsByCategories } from "../../../dummyData.js";
import { Link } from "react-router-dom";
// import axios from "axios";
// import {getActiveJobListByCategory} from "../../services/JobsData.js";
import useJobDataFetch from "../../hooks/useJobDataFetch.js";

const JobsList = () => {
 const {isError,latestJobs,categories,getJobList} = useJobDataFetch()
  // const [activeJobsbyCategory, setActiveJobsByCategory] = useState([]);

  useEffect(() => {
    // const fetchData=async()=>{
    //  const response =  await getActiveJobListByCategory()
    //  setActiveJobsByCategory(response)
    //  console.log(response)
    // }
    getJobList()
  //  fetchData()

    // setCategoriesData(jobsByCategories);
  }, []);

  const filterjobs = (categoryid)=>{
    return latestJobs.filter((job)=>job.categoryId===categoryid)
  }

 
  return (
    <Container>
      {categories && categories.map((category,index) => (
        <Row key={index} className="mt-3">
          <Col>
            <Link to={`/jobs/category/${category?._id}`}>
              <h3>{category.name}</h3>
            </Link>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {filterjobs(category._id).length >0 ?filterjobs(category._id).map((job) => (
                  <tr key={job._id}>
                    <td>{job.position}</td>
                    <td>{job.company}</td>
                    <td>{job.location}</td>
                  </tr>
                )):<p>No Jobs Found</p>}
              </tbody>
            </Table>
          </Col>
        </Row>
      ))}
      
    </Container>
  );
};

export default JobsList;
