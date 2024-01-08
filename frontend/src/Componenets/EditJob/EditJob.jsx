import React from "react";
import { Row, Form, Col, Container, Button, Image } from "react-bootstrap";
import FormContainer from "../FormContainer/FormContainer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { categories } from "../../../dummyData";
import axios from "axios";
import {toast} from 'react-toastify'
function EditJobForm({jobId}) {
  const [form, setForm] = useState({isPublic:false});
  const [errors, setErrors] = useState({});
  // const [apiResponse,setResponse ]

 


    const   fetchData = async()=>{
      try {
        const response = await axios.get(`http://localhost:3000/job/${jobId}`)
         console.log(response.data)
         setForm(response.data[0])
        
      } catch (error) {
        console.log(error)
      }

    }

    useEffect(()=>{
   
        fetchData()
    
     },[])
    
    
  const setField = (field, value) => {
    setForm({ ...form, [field]: value });
    if (!!errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  const validateForm = () => {
    const { type } = form;

    let newError = {};

    if (!type || type === "") newError.type = "Select any type";

    return newError;
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        if (key == "logo") {
          formData.append(key, form[key][0]);
        }
        formData.append(key, form[key]);
      });
      try {
        const response = await axios.put(
          `http://localhost:3000/job/${jobId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        
        toast.success('Form Submitted Successfully',{position:toast.POSITION.TOP_LEFT})
        event.target.reset()
          
        setForm({description:'',howToApply:''})
        //handel success
      } catch (error) {
        toast.failed('Error in Form Submission.',{position:toast.POSITION.TOP_LEFT})
     
        //if there is an error
      }
    }
  };

  return (
    <>
      <FormContainer>
      <Row className="mt-3 mb-3 ">
        <h3>Edit Job</h3>
      </Row>
        <Form onSubmit={handleUpdate}>
          <Form.Group>
            <Form.Label>Category </Form.Label>
            <Form.Select
              value={form.categoryId}
              required
              onChange={(e) => {
                setField("categoryId", e.target.value);
              }}
            
            >
              <option>Select Category</option>
              {categories.map((element, index) => (
                <option key={index} value={element.id}>
                  {element.name}
                </option>
              ))}
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
              value={form.company}
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
                checked={form.type=='Full Time'}
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
                checked={form.type=='Part Time'}
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
                checked={form.type=='Freelance'}
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
            <Form.Label>Logo {form.logo}</Form.Label>
            <Form.Control
              type="file"
              name="logo"
              accept="image/*"
              onChange={(e) => {
                setField("logo", e.target.files);
              }}
            />
            <Image src={form.logo} style={{width:'300px', height:'200px'}}></Image>
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
              value={form.position}
              placeholder="Position for which you are applying"
              onChange={(e) => setField("position", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              value={form.location}
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
              checked={form.isPublic===true}
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
              value={form.description}
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
            <Button type="submit" className="my-2" variant="dark">
              Save
            </Button>
          </Form.Group>
        </Form>
      </FormContainer>
    </>
  );
}

export default EditJobForm;
