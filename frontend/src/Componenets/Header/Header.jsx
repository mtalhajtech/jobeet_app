import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-black textwhite py-3">
      <Container>
        <a href="/" className="navbar-brand">
          Jobeet
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="ms-auto">
            <Button variant="primary" href="/postjob">
              Post a Job
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
