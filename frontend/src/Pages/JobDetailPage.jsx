import React, { useEffect, useState } from "react";
import SearchBar from "../Componenets/SearchBar/SearchBar";
import { useLocation } from "react-router-dom";
import { Row, Col,Button,Container, Form} from "react-bootstrap";
import Header from "../Componenets/Header/Header";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../AuthProvider/AuthProvider";

// import useAxiosPrivate from "../axios/useAxiosPrivate";
const JobDetailPage = () => {
  const location = useLocation();
  const job = location.state.job;
  const navigate = useNavigate()
  const [isEditAble,setIsEditAble] = useState(false)
  const {auth,setAuth,refreshAuthToken} = useContext(AuthContext)


  // const {axiosJWT} = useAxiosPrivate()
//   const config = {
//     headers: { Authorization: `Bearer ${auth.token}` }
// };


// const axiosJWT = axios.create()
// const refreshToken = async()=>{
   
//    debugger;

//    try {

//     const response = await axios.get('http://localhost:3000/auth/refreshAccessToken', { withCredentials: true });
//     console.log('refresh Token interceptor',response.data.accessToken)
//     localStorage.setItem('token',response.data.accessToken)
//     setAuth({...auth,token:response.accessToken});
//    } catch (error) {
//     console.log(error)
//    }
  
        
// }


// const token = localStorage.getItem('token')
// const decodeToken = jwtDecode(token);
// axiosJWT.interceptors.request.use(async(config)=>{
//      const currentDate = new Date();
//      console.log(currentDate.getTime());
//      if(currentDate.getTime()>decodeToken.exp*1000){
//          const response = await refreshToken();
//          config.headers["authorization"] = "Bearer  " + response.data?.accessToken;
//      }

//      return config;
//   },error=>{
//      return Promise.reject(error);
//   })
  


    const handleDelete = async ()=>{
  

      try {
       
        const response = await axios.delete(`http://localhost:3000/job/${job._id}`,config);
        toast.success('Job is deleted Successfully',{position:toast.POSITION.TOP_CENTER});
        navigate('/');
      } catch (error) {
        console.log(error.message);
        // navigate('/login');
        toast.error('Error in Job Deletion',{position:toast.POSITION.TOP_CENTER});
      }

    }
   const handleEdit = ()=>{
   
    navigate(`/job/edit/${job._id}`);

   }
    
 
  
   useEffect(()=>{

    refreshAuthToken()


  },[])

  
 
  return (
    <>
      <Header />
      <Container>
        <SearchBar />
        <Row style={{ marginTop: "60px" }}>
          <Col xs={10} md={6}>
            <Row>
              <h3>
                <strong>{job.company }</strong>
              </h3>
              <h4>
                <i>{job.location}</i>        
              </h4>
            </Row>
            <hr />
            <Row style={{ marginTop: "20px" }}>
              <h5>{job.position} </h5>
              <h6>
                <i>{job.type}</i>
              </h6>
            </Row>
            <hr />
          </Col>

          <Row>
            <section>
              <h4>Job Description</h4>
              <p>{job.description}</p>
            </section>
          </Row>
          <Row>
            <section>
              <h6>How to Apply</h6>
              <p>{job.howToApply}</p>
            </section>
          </Row>
          <Row>
            
           
             { auth.isAuthenticated && <Row>
              <Button  style={{width:"fit-content",marginRight:"10px"}} onClick={handleEdit}>
               Edit Job
              </Button>
              <Button  style={{width:"fit-content"}} onClick={handleDelete}>
               Delete
              </Button>
              </Row>
              }
         
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default JobDetailPage;
