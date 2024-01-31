import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useContext } from 'react';
import AuthContext from '../../AuthProvider/AuthProvider';
const SearchBar = () => {
 
  const {setSearchTerm,searchTerm} = useContext(AuthContext)

 

  const handleSearch = (value) => {
   setSearchTerm(value)
   console.log(searchTerm)
  };

  return (
    <Container>
      
      <Row className="mt-3">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Type your search"
            value={searchTerm}
            onChange={(e) =>handleSearch(e.target.value)}
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
