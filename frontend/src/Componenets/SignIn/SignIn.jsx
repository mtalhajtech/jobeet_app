import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SignIn() {

   const [form,SetForm]=useState({email:"",password:""})
   const {navigate} = useNavigate()

   const handleSubmit= (e)=>{
    e.preventdefault()
    const formData = new FormData()
    Object.keys(form).forEach((key)=>{
        formData.append(key,form[key])
    })
   try {
   const response =  axios.post('http://localhost:3000/auth/login/',formData)
   navigate('/dashboard')
   } catch (error) {
    toast.failure(error,{position:toast.POSITION.TOP_LEFT})
   }
    
   }
   const setField = (field,value)=>{
    SetForm({...rest,[field]:value})


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
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter password "
                required
                onChange={(e)=>setField('password',e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Button type="submit" className="my-2" variant="dark">
                Log in
              </Button>
            </Form.Group>
            <div>
              No Account Already Create One by Clicking Here
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
