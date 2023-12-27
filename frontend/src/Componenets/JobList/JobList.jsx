import { useEffect, useState } from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import { categories, jobsByCategories } from "../../../dummyData.js";
import { Link } from "react-router-dom";
import axios from "axios";
import {getActiveJobListByCategory} from "../../services/JobsData.js";


const JobsList = () => {

  const [activeJobsbyCategory, setActiveJobsByCategory] = useState([]);

  useEffect(() => {
    const fetchData=async()=>{
     const response =  await getActiveJobListByCategory()
     setActiveJobsByCategory(response)
     console.log(response)
    }
    
   fetchData()

    // setCategoriesData(jobsByCategories);
  }, []);

  

 
  return (
    <Container>
      {activeJobsbyCategory.map((data,index) => (
        <Row key={index} className="mt-3">
          <Col>
            <Link to={`/jobs/category/${data?._id}`}>
              <h3>{data.name}</h3>
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
                {data?.jobs.map((job) => (
                  <tr key={job._id}>
                    <td>{job.position}</td>
                    <td>{job.company}</td>
                    <td>{job.location}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      ))}
      
    </Container>
  );
};

export default JobsList;
