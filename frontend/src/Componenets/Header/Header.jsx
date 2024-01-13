import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown,Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useContext,useState } from "react";
import AuthContext from "../../AuthProvider/AuthProvider";
import {useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import axios from "axios";
const Header = () => {
  
  const navigate = useNavigate()

  const {auth,setAuth} = useContext(AuthContext)
  console.log(auth.isAuthenticated)
  
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
        <a href="/" className="navbar-brand ">
          Jobeet
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav "  />
        <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
          
          <Nav  >
            {auth.isAuthenticated && 
            <NavDropdown  title={`Welcome ${auth.username}`} id="basic-nav-dropdown">
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
        <Button className="ms-3" variant="primary" href="/postjob">
              Post a Job
        </Button>
        </Navbar.Collapse>
        
            
      </Container>
    </Navbar>
  );
};

export default Header;
