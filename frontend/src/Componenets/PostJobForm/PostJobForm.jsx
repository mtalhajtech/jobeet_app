import React from "react";
import { Row, Form, Col, Container,Button } from "react-bootstrap";
import FormContainer from "../FormContainer/FormContainer";

import { useState,useEffect } from "react";

function PostJobForm() {
    const [form, setForm]=useState({})
    const [errors, setErrors]= useState({})
    const setField =(field, value)=>{
        setForm({...form, [field]:value})
       console.log(form)
        if(!!errors[field])
        {
            setErrors({...errors,[field] :null})
        }
    }
    const handleSubmit=()=>{}
    
  return (
     <>
    
      <Row className="mt-3 mb-3">
      <h3>Post a Job</h3>
      </Row>
      <FormContainer>
        <Form>
          
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Select aria-label="Default select example"
            value={form.category}
            onChange={(e)=>{setField('category',e.target.value)}}
            isInvalid = {!!errors.category}
            >
              <option>Select Category</option>
              <option value="technology">Tech</option>
              <option value="business">Business</option>
              <option value="admin">Admin</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
                {errors.category}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group  className="md-3" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required placeholder="Enter your email" value={form.email} onChange={(e)=>{setField('email',e.target.value)}}
            isinvalid = {!!errors.email}/>
            <Form.Control.Feedback type="invalid">
                {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
          <Form.Label>
            Type
          </Form.Label>
          <div className="inline-radio">
          <Form.Check
            inline
            label="Full Time"
            value={'Full Time'}
            name="group1"
            type={'radio'}
            id={`inline-radio-1`}
            onChange={(e)=>{(setField('type',e.target.value))}}
          />
          <Form.Check
            inline
            label="Part Time"
            value={"Part Time"}
            name="group1"
            type={'radio'}
            id={`inline-radio-2`}
            onChange={(e)=>{(setField('type',e.target.value))}}
          />
          <Form.Check
            inline
            value={'Freelance'}
            label="Freelance"
            name="group1"
            type={'radio'}
            id={`inline-radio-3`}
            onChange={(e)=>{(setField('type',e.target.value))}}
          />
          {errors.type && <Form.Control.Feedback type="invalid">{errors.type}</Form.Control.Feedback>}
          </div>
           
          </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Logo</Form.Label>
        <Form.Control type="file" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Position</Form.Label>
        <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group>
        <Form.Check
            inline
            label="public"
            name="group1"
            type={'checkbox'}
            id={'inline-radio-1'}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group>
          <Button type='submit' onClick={handleSubmit} className='my-2' variant="dark">
            Post
          </Button>
        </Form.Group>
        </Form>
      </FormContainer>
      
      </>
  );
}

export default PostJobForm;
