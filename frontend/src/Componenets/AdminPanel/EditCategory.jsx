import React from 'react';

import React from "react";
import { Row, Form, Col, Container, Button, Image } from "react-bootstrap";
import FormContainer from "../FormContainer/FormContainer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { categories } from "../../../dummyData";
import axios from "axios";
import {toast} from 'react-toastify'
import { useParams } from "react-router-dom";

      function EditJobAdmin() {
        const [form, setForm] = useState({});
        const [errors, setErrors] = useState({});
        // const [apiResponse,setResponse ]
        const navigate = useNavigate()
        const {CatId} = useParams()
      
      
          const   fetchData = async()=>{
            try {
              const response = await axios.get(`http://localhost:3000/category/${CatID}`)
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
              const re
              );
              
              toast.success('Job Edited Successfully',{position:toast.POSITION.TOP_LEFT})
              eventsponse = await axios.put(
                `http://localhost:3000/job/${jobId}`,
                formData,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                }.target.reset()
              navigate('/admin')
              setForm({description:'',howToApply:''})
              //handel success
            } catch (error) {
              toast.error('Error in Form Submission.',{position:toast.POSITION.TOP_LEFT})
           
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
        
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={form.company}
                    placeholder="Name of the Company"
                    onChange={(e) => setField("company", e.target.value)}
                  />
                </Form.Group>
      
                <Form.Group>
                  <Button type="submit" className="my-2" variant="dark">
                    Save
                  </Button>
                </Form.Group>
              </Form>
            </FormContainer>
          </>)
}

export default EditCategory;