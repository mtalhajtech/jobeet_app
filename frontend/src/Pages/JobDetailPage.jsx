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
const JobDetailPage = () => {
  const location = useLocation();
  const job = location.state.job;
  const navigate = useNavigate()
  const [isEditAble,setIsEditAble] = useState(false)
  // const [tokenValue, setTokenValue] = useState('')
  // const [action,setAction] = useState('')
  const {auth} = useContext(AuthContext)  
    const handleDelete = async ()=>{
      
      try {

        const response = await axios.delete(`http://localhost:3000/job/${job._id}`,)
        toast.success('Job is deleted Successfully',{position:toast.POSITION.TOP_CENTER})
        navigate('/')
      } catch (error) {
        toast.error('Error in Job Deletion',{position:toast.POSITION.TOP_CENTER})
      }

    }
   const handleEdit = ()=>{
   
    navigate(`/job/edit/${job._id}`)

   }
    
  // const handleValidate = async ()=>{
    
  
  //     try {
  //       console.log(tokenValue)
  //       const response = await axios.post('http://localhost:3000/job/authorizeToken',{jobId:job._id,token:tokenValue})
  //       if(action==='delete'){
  //         handleDelete()
  //       }
  //       else{
  //         navigate(`/job/edit/${job._id}`)
  //       }
        
  //     } catch (error) {
  
  //      toast.error(" You are not Authorized to EDIT/DELETE the Job !", {
  //        position: toast.POSITION.TOP_CENTER
  //      });
  //     }
  //  }
    useEffect(()=>{
    
    if(auth.user?.userId == job.userId){
      setIsEditAble(true)
    }
      
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
                <strong>{job.company + job._id}</strong>
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
            
            {isEditAble && (
              <Row>
              <Button  style={{width:"fit-content",marginRight:"10px"}} onClick={handleEdit}>
               Edit Job
              </Button>
              <Button  style={{width:"fit-content"}} onClick={()=>{handleDelete}}>
               Delete
              </Button>
              </Row>
              )
             
            }
            {/* {  showTokenField && (<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                  <Button onClick={handleValidate} style={{width:'fit-content'}}>
                    Validate 
                  </Button>
                  <Col sm="10" lg='7'>
                  <Form.Control size="sm" type="text" placeholder="Enter Token Value Here" onChange={(e)=> setTokenValue(e.target.value)}/>
                 </Col>
                 
                 </Form.Group>)
           } */}
         
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default JobDetailPage;
