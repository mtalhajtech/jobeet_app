import React from "react";
import { Row, Form, Col, Container, Button } from "react-bootstrap";
import FormContainer from "../FormContainer/FormContainer";

import { useState, useEffect } from "react";
import category from "../../../../backend/models/category";

function PostJobForm() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  // const handleImageUpload=(e)=>{
  //     setLogo(e)
  //     console.log(logo)
  // }
  const setField = (field, value) => {
    setForm({ ...form, [field]: value });
    console.log(form);
    if (!!errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };
  const validateForm = () => {
    const { email, category, company, position, location, howToApply, type, description } =
      form;
    console.log(category);
    let newError = {};
    
     x
      
    
    if (!form.category || form.category === "")  newError.category = "Select any options From it";
    if (!email || email === "") newError.email = "Write a Valid email Like ";
    if (!type || type === "") newError.type = "Select any type";
    if (!company || company === "") newError.company = "Add Company Name";
    if (!position || position === "") newError.position = "Add the position";
    if (!location || location === "") newError.location = "Add the location";
    if (!howToApply || howToApply === "")newError.howToApply = "Add How to Apply ";
    if (!description  || description === "")newError.description = "Add Description about job";
      

    return newError;
  };

  const handleSubmit = () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      
      setErrors(errors);
    } else {
      console.log(form);
    }
  };

  return (
    <>
      <Row className="mt-3 mb-3">
        <h3>Post a Job</h3>
      </Row>
      <FormContainer>
        <Form>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Select
             
              aria-label="Default select example"
              value={form.category}
              onChange={(e) => {
                setField("category", e.target.value);
              }}
              
              isInvalid={!!errors.category}
            >
              <option>Select Category</option>
              <option value="technology">Technology</option>
              <option value="business">Business</option>
              <option value="admin">Admin</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.category}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name of the Company"
              onChange={(e) => setField("company", e.target.value)}
              isInvalid={errors.company}
            />
            <Form.Control.Feedback type="invalid">
              {errors.company}
            </Form.Control.Feedback>
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
            <Form.Control.Feedback type="invalid">
              {errors.type}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Logo</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => {
                setField("logo", e.target.files);
              }}
              isInvalid={!!errors.logo}
            />
            <Form.Control.Feedback>{errors.logo}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="URL of the Job"
              onChange={(e) => setField("url", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              placeholder="Position for which you are applying"
              onChange={(e) => setField("position", e.target.value)}
              isInvalid={errors.position}
            />
            <Form.Control.Feedback type="invalid">
              {errors.position}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Location"
              onChange={(e) => setField("location", e.target.value)}
              isInvalid={!!errors.location}
            />
            <Form.Control.Feedback type="invalid">{errors.location}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Check
              inline
              label="public"
              name="group1"
              value="true"
              type={"checkbox"}
              feedbackType="invalid"
              id={"inline-radio-1"}
              onChange={(e) => {
                setField("public", value);
              }}
            />
            <Form.Control.Feedback>{errors.public}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add Description to Your Post"
              onChange={(e) => setField("description", value)}
              isInvalid={!!errors.description}
            />
            <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="md-3" controlId="formGridHowToApply">
            <Form.Label>How To Apply</Form.Label>
            <Form.Control
              type="text"
              as="testarea"
              placeholder="How to Apply"
              value={form.howToApply}
              onChange={(e) => {
                setField("howToApply", e.target.value);
              }}
              isInvalid={!!errors.howToApply}
            />
            <Form.Control.Feedback type="invalid">
              {errors.howToApply}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="md-3" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => {
                setField("email", e.target.value);
             
              }}
             
            />
           
          </Form.Group>
          <Form.Group>
            <Button
              type="submit"
              onClick={handleSubmit}
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
