import { useEffect, useState } from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import { categories, jobsByCategories } from "../../../dummyData.js";
import { Link } from "react-router-dom";
import axios from "axios";

const apiURL = "http://localhost:3000/category/all";
const JobsList = () => {
  // const [categoriesData, setCategoriesData] = useState([]);
  // const [activeJobs, setActiveJobs] = useState([]);
 let result
  useEffect(() => {
    // Simulating API 
    axios
      .get(apiURL)
      .then((result) => {
        setCategoriesData(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
     
      axios
      .all(
        
        axios.get(`http://localhost:3000/job?category=657ac43adcc04435c5585428`)
        // categoriesData.map((category) =>
        
          
        
        // )
      )
      .then(
        axios.spread((...responses) => {
          console.log(responses)
          result[responses?.data.id] = responses.data
          // setActiveJobs(activeJobsByCategory);
          console.log(result);
        })
      )
      .catch((error) => {
        console.log(error.message);
      });
   
    // setCategoriesData(jobsByCategories);
  }, []);

  

 
  return (
    <Container>
      {jobsByCategories.map((data) => (
        <Row key={data?.categoryId} className="mt-3">
          <Col>
            <Link to={`/jobs/${data?.categoryId}`}>
              <h3>{data.categoryName}</h3>
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
                  <tr key={job.id}>
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
