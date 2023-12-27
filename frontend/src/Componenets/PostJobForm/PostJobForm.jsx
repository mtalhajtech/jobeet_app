import React from "react";
import { Row, Form, Col, Container, Button } from "react-bootstrap";
import FormContainer from "../FormContainer/FormContainer";
import {useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { categories } from "../../../dummyData";
import axios from 'axios'
function PostJobForm() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [apiError, setApiError] = useState({error:false,
message:''})
  
const navigate = useNavigate()

  const setField = (field, value) => {
    
    setForm({ ...form, [field]: value });
    
    console.log(form);

    if (!!errors[field]) {
      setErrors({ ...errors, [field]: null });
    }

  };
 const handleShowSuccess = ()=>{
    navigate('/')
}

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(String(email).toLowerCase());
  };
  const validateURL = (url) =>{
    const re =  /\.com$/
    return re.test(String(url).toLowerCase());
  }
  const validateForm = () => {
    const {
      email,
      categoryId,
      company,
      position,
      location,
      howToApply,
      type,
      description,url
    } = form;
  
    let newError = {};
   
     
    
    if (!type || type === "") newError.type = "Select any type";
   
    if(url && !validateURL(url)){ 
        newError.url = "Add correct URL that ends with .com"}
    
  
    return newError;
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("handleSubmitTriggered")
    const errors = validateForm();
    console.log(errors);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      const formData = new FormData();
      Object.keys(form).forEach(key => {
        if(key=='logo')
        {
          formData.append(key, form[key][0]);
        }
        formData.append(key, form[key]);
      });
        try {
            const response = await axios.post('http://localhost:3000/job/post', formData,  {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            setShowSuccess(true)
            console.log(response.data);
           //handel success
          } catch (error) {
        
            setApiError({error:true,
            message:error.response?.message});
            //if there is an error
          }

    }
  };
          
  return (
    <>
 
    
      <Row className="mt-3 mb-3">
        <h3>Post a Job</h3>
      </Row>
      { showSuccess && (
        <Alert variant="success" onClick={handleShowSuccess} dismissible>
            Job posted successfully. Click here to go to the dashboard.
       
         </Alert>
     ) || apiError.error && (<Alert variant="danger"  dismissible >
      Error in posting the job
</Alert>) }  
      <FormContainer >
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Select
               
              value={form.category}
              required
              onChange={(e) => {
                setField("categoryId", e.target.value);
              }}
              
              isInvalid={!!errors.category}
            >
              <option>Select Category</option>
              {categories.map((element,index)=>( <option key={index} value={element.id}>{element.name}</option>))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.category}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Name of the Company"
              onChange={(e) => setField("company", e.target.value)}
             
            />
           
          </Form.Group>

          <Form.Group>
            <Form.Label>Type</Form.Label>
            <div className="inline-radio">
              <Form.Check
                inline
                label="Full Time"
                value={"Full Time"}
                name="group1"
                type={"radio"}
                required
                id={`inline-radio-1`}
                onChange={(e) => {
                  setField("type", e.target.value);
                }}
              />
              <Form.Check
                inline
                label="Part Time"
                value={"Part Time"}
                name="group1"
                type={"radio"}
                id={`inline-radio-2`}
                onChange={(e) => {
                  setField("type", e.target.value);
                }}
              />
              <Form.Check
                inline
                value={"Freelance"}
                label="Freelance"
                name="group1"
                type={"radio"}
                id={`inline-radio-3`}
                onChange={(e) => {
                  setField("type", e.target.value);
                }}
              />
            </div>
            {errors.type && (
              <div className="invalid-feedback d-block">{errors.type}</div>
            )}
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Logo</Form.Label>
            <Form.Control
              type="file"
              name="logo"
              accept="image/*"
              onChange={(e) => {
                setField("logo", e.target.files);
              }}
            
            />
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="URL of the Job"
              value={form.url}
              onChange={(e) => setField("url", e.target.value)}
            
            />
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Position</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Position for which you are applying"
              onChange={(e) => setField("position", e.target.value)}
             
            />
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Location"
              onChange={(e) => setField("location", e.target.value)}
              
            />
           
          </Form.Group>

          <Form.Group>
            <Form.Check
              inline
              label="Public"
              name="group1"
              value="true"
              type={"checkbox"}
              id={"inline-radio-1"}
              
              onChange={(e) => {
                setField("isPublic", e.target.value);
              }}
            />
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              required
              as="textarea"
              placeholder="Add Description to Your Post"
              onChange={(e) => setField("description", e.target.value)}
             
            />
          </Form.Group>
          <Form.Group className="md-3" controlId="formGridHowToApply">
            <Form.Label>How To Apply</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              required
              placeholder="How to Apply"
              value={form.howToApply}
              onChange={(e) => {
                setField("howToApply", e.target.value);
              }}
             
            />
          </Form.Group>
          <Form.Group className="md-3" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={form.email}
              required
              onChange={(e) => {
                setField("email", e.target.value);
              }}
              
            />
           
          </Form.Group>
          <Form.Group>
            <Button
              type="submit"
              
              className="my-2"
              variant="dark"
            >
              Post
            </Button>
          </Form.Group>
        </Form>
      </FormContainer>
    </>
  );
}

export default PostJobForm;
