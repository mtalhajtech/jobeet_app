import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../AuthProvider/AuthProvider";
function SignIn() {
   const {auth,setAuth}  = useContext(AuthContext)
   const [form,SetForm]=useState({})
   const {navigate} = useNavigate()

   const handleSubmit= async (e)=>{
    e.preventDefault()
    const formData = new FormData()
    Object.keys(form).forEach((key)=>{
        formData.append(key,form[key])
    })
    
   try {
   console.log(formData)
   const response = await axios.post('http://localhost:3000/auth/login',formData,{
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
   navigate('/dashboard')
   
   } catch (error) {
    console.log(error)
   }
    
   }
   const setField = (field,value)=>{
    SetForm({...form,[field]:value})
    console.log(form)

   }
  return (
    <>
      <Row className="justify-content-center " >
        <Col xs={12} md={8} lg={4}>
            <h1>Jobeet App Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label >Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your email"
                required
                 onChange={(e)=>setField('email',e.target.value)}
                 value={form.email}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password "
                required
                onChange={(e)=>setField('password',e.target.value)}
                value={form.password}
              />
            </Form.Group>
            <Form.Group>
              <Button type="submit" className="my-2" variant="dark">
                Log in
              </Button>
            </Form.Group>
            <div>
              No Account Already, Create One by Clicking Here
              <span style={{marginleft:'5px'}}>
                <Link to={"/signUp"}>Register</Link>
              </span>
            </div>
             
           
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default SignIn;