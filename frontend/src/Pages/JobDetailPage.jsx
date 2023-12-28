import React from "react";
import SearchBar from "../Componenets/SearchBar/SearchBar";
import { useLocation } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import Header from "../Componenets/Header/Header";
import { Container } from "react-bootstrap";
const JobDetailPage = () => {
  const location = useLocation();
  const job = location.state.job;
  console.log(job);
  return (
    <>
      <Header />
      <Container>
        <SearchBar />
        <Row style={{ marginTop: "60px" }}>
          <Col xs={10} md={6}>
            <Row>
              <h3>
                <strong>{job.company}</strong>
              </h3>
              <h4>
                <i>{job.location}</i>
              </h4>
            </Row>
            <hr />
            <Row style={{ marginTop: "20px" }}>
              <h5>{job.position} </h5>
              <h6>
                <i>{job.type}</i>
              </h6>
            </Row>
            <hr />
          </Col>

          <Row>
            <section>
              <h4>Job Description</h4>
              <p>{job.description}</p>
            </section>
          </Row>
          <Row>
            <section>
              <h6>How to Apply</h6>
              <p>{job.howToApply}</p>
            </section>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default JobDetailPage;
