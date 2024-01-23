import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown,Nav, Row } from "react-bootstrap";
import {Button,Col} from "react-bootstrap";
import { useContext,useState } from "react";
import AuthContext from "../../AuthProvider/AuthProvider";
import {useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import axios from "axios";
const Header = ({headerName='Jobeet',role='user'}) => {
  
  const navigate = useNavigate()

  const {auth,setAuth} = useContext(AuthContext)
  
  const handleLogout = async (event)=>{
   event.preventDefault()
   await axios.get('http://localhost:3000/auth/logout')
   setAuth({user:null,isAuthenticated:false})
   localStorage.clear('token')
   Cookies.remove('refreshToken')
   navigate('/login')
   toast.success('Logged Out Successfully',{position:toast.POSITION.TOP_LEFT})
  }


  return (
    <Navbar expand="lg" className="py-3" bg="dark" variant="dark">
      <Container >
        <a href={role=='user'?'/':'/admin'} className="navbar-brand ">
          {headerName}
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav "  />
        <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
          
          <Nav  >
            {auth.isAuthenticated && 
            <NavDropdown  title={`Welcome ${auth.user}`} id="basic-nav-dropdown">
             <NavDropdown.Item href="#action/3.1"  onClick={handleLogout}>
              Logout
             </NavDropdown.Item>
            </NavDropdown>}

            {!auth.isAuthenticated &&
              <Nav.Item>
                <Nav.Link className="ms-3 " href={"/login"}> Login</Nav.Link>
              </Nav.Item>
              
            }   
        </Nav>
        {role =='user' && auth.isAuthenticated?(
        <Row>
          <Col>
          <Button className="ms-3" variant="primary" href="/postjob">
              Post a Job

        </Button>
           
          </Col>
          <Col>
          <Button style={{display:"block",whiteSpace:"nowrap"}} className="ms-3" variant="primary" href="/affiliate">
             Become An Affiliate
              
        </Button>    
          </Col>
        </Row>
        ):null}

        </Navbar.Collapse>
        
            
      </Container>
    </Navbar>
  );
};

export default Header;
