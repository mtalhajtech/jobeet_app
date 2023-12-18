import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

 

  const handleSearch = () => {
    // Add your search logic here
    alert(`Search button clicked! Searching for: ${searchTerm}`);
  };

  return (
    <Container>
      
      <Row className="mt-3">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Type your search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={3}>
          <Button variant="success" onClick={handleSearch}>
            Search
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
