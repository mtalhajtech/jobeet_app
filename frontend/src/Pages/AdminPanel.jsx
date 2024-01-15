import React from "react";
import SideBar from "../Componenets/AdminPanel/SideBar";
import { Col, Row } from "react-bootstrap";
import Header from "../Componenets/Header/Header";
function AdminPanel(props) {
  return (
    <Row>
        <Header headerName={'Jobeet Admin'}/>
      <Col>
        <SideBar />
      </Col>
      <Col>

      </Col>
    </Row>
  );
}

export default AdminPanel;
