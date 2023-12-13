import { useEffect, useState } from "react";
import { Table, Container, Row, Col} from "react-bootstrap";
import { jobsByCategories } from "../../../dummyData.js";
import  {Link}  from "react-router-dom"
const JobsList = () => {
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    // Simulating API fetching
    setCategoriesData(jobsByCategories);
  }, []);

  

  return (
    <Container>
      {categoriesData.map((category) => (
        <Row key={category.id} className="mt-3">
          <Col>
            {/* <h3>{category.categoryName}</h3>
             */}
            <Link to={`/jobs/${category.categoryId}`}>
              <h3>{category.categoryName}</h3>
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
                {category?.jobs.map((job) => (
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
