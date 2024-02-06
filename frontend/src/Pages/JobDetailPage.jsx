import React, { useEffect, useState } from "react";
import SearchBar from "../Componenets/SearchBar/SearchBar";
import { useLocation, useParams } from "react-router-dom";
import { Row, Col,Button,Container, Form,Image} from "react-bootstrap";
import Header from "../Componenets/Header/Header";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../AuthProvider/AuthProvider";
import No_content from "../assets/no_content.png"
import Cookies from "js-cookie";

const JobDetailPage = () => {
  const params =useParams()
  const jobId = params.jobId
  console.log(jobId)
  const navigate = useNavigate()
  const {auth,setAuth,refreshAuthToken} = useContext(AuthContext)
  const [job,setJob] = useState()
  


    const handleDelete = async ()=>{
  

      try {
       
        const response = await axios.delete(`http://localhost:3000/job/${job._id}`,{
          headers: { Authorization: `Bearer ${auth.token}` }
      });
        toast.success('Job is deleted Successfully',{position:toast.POSITION.TOP_CENTER});
        navigate('/');
      } catch (error) {
        if(error.request.status===401){
          setAuth({ user:'', isAuthenticated: false,userRole:'',hasAffiliate:false,token:'',userId:null });
           Cookies.remove('refreshToken');
            localStorage.removeItem('token');
          toast.error('Session Expired',{position:toast.POSITION.TOP_LEFT});
        navigate('/login');}
       else{ toast.error('Error in Job Deletion',{position:toast.POSITION.TOP_CENTER})}
      }

    }
   const handleEdit = ()=>{
   
    navigate(`/job/edit/${job._id}`);

   }
    
   const getJob = async()=>{

    try {
       
      const response = await axios.get(`http://localhost:3000/job/${jobId}`);
      // console.log(response.data[0])
      setJob(response.data[0])
      
    } catch (error) {
      toast.error('Error in Job Fetching',{position:toast.POSITION.TOP_CENTER})}
    }
   
  
   useEffect(()=>{
    getJob()
    auth.isAuthenticated && refreshAuthToken()


  },[])

  
 
  return (
    <>
      <Header />
      <Container>
      
        <Row style={{ marginTop: "60px" }}>
          <Col xs={10} md={6}>
            <Row>
              <h3>
                <strong>{job?.company }</strong>
              </h3>
              <h4>
                <i>{job?.location}</i>        
              </h4>
            </Row>
            <hr />
            <Row style={{ marginTop: "20px" }}>
              <h5>{job?.position} </h5>
              <h6>
                <i>{job?.type}</i>
              </h6>
            </Row>
            <hr />
          </Col>
          {job?.logo && <Col xs={8} md={4} >
          
           <Image src={job?.logo} ></Image>
          
          </Col>}
          <Row>
            <section> 
              <h4>Job Description</h4>
              <p>{job?.description}</p>
            </section>
          </Row>
          <Row>
            <section>
              <h6>How to Apply</h6>
              <p>{job?.howToApply}</p>
            </section>
          </Row>
          <Row>
          
           
             { 
             auth.isAuthenticated && job?.userId == auth.userId && <Row>
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
