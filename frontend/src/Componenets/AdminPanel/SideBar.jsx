import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function SideBar() {
  return (
    <Nav className="col-md-2 d-none d-md-block bg-light sidebar  ">
      <div className="sidebar-sticky">
        <Nav.Item>
          <Nav.Link as={Link} to="/admin/">Jobs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/admin/categories">Categories</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/admin/affiliates">Affiliates</Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
}

export default SideBar;
