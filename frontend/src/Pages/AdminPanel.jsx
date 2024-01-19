import React from "react";
import SideBar from "../Componenets/AdminPanel/SideBar";
import { Col, Row,Container } from "react-bootstrap";
import Header from "../Componenets/Header/Header";
import { Outlet } from "react-router-dom";
function AdminPanel(props) {
  return (
    <Row>
        <Header headerName={'Jobeet Admin'} role="admin"/>
        
          <SideBar/>
        <Col> 
        <Outlet /> 
      </Col>
          </Row>
      
        
  );
}

export default AdminPanel;
