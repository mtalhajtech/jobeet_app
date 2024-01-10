import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import AuthContext from "../../AuthProvider/AuthProvider";

const Header = () => {
  const {auth} = useContext(AuthContext)
  console.log(auth.isAuthenticated)
  return (
    <Navbar expand="lg" className="bg-black text-white textwhite py-3">
      <Container >
        <a href="/" className="navbar-brand text-white">
          Jobeet
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
          
            <Button variant="primary" href="/postjob">
              Post a Job
            </Button>
            {auth.isAuthenticated?<Navbar.Text className="text-white">
            Signed in as: {auth.user?.username}
          </Navbar.Text>:null}
     
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
