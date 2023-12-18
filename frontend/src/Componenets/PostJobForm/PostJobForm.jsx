import React from "react";
import { Row,Form,Col } from 'react-bootstrap';
function PostJobForm(props) {
  return (
    <div>
      <h3>Post a Job</h3>
      <Row>
        <Form.Group as={Col} className="md-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>
    </div>
  );
}

export default PostJobForm;
