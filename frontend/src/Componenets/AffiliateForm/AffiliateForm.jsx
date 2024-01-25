import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import FormContainer from '../FormContainer/FormContainer';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function AffiliateForm() {
    const [formData, setFormData] = useState({
        email: '',
        url: '',
        categories: {
         
        }
    });
    const navigate = useNavigate()
    const [categories,setCategories] = useState([])
    const handleInputChange = (event) => {
        const { name, value, checked, type } = event.target;
        
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                categories: {
                    ...formData.categories,
                    [name]: checked,
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/affiliate/create', formData);
            toast.success('Affiliate Form Submitted',{position:toast.POSITION.TOP_LEFT});
            navigate('/affiliateRedirectPage')

        } catch (error) {
               
              if(error.request.status===409){

                toast.error('Email Exist already, Use Different Email',{position:toast.POSITION.TOP_LEFT})

              }
              else {
                toast.error('Error in creating Affiliate',{position:toast.POSITION.TOP_LEFT})

              }
           
        }
    };
    const getCategories = async()=>{
        try {
            const response = await axios.get('http://localhost:3000/category/all');
            setCategories(response.data);


        } catch (error) {
            
        }
   
    }


   useEffect(()=>{
      
    
   getCategories();






   },[])



    return (
        <FormContainer>
            <h1>Become An Affiliate</h1>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange} 
                    required 
                />
            </Form.Group>

            <Form.Group controlId="formBasicUrl">
                <Form.Label>URL</Form.Label>
                <Form.Control 
                    type="url" 
                    placeholder="Website URL" 
                    name="url"
                    value={formData.url}
                    onChange={handleInputChange} 
                    required 
                />
            </Form.Group>
            
            <Form.Group controlId="formBasicCheckbox">
            {categories.map((data)=>( 
                <Form.Check 
                    type="checkbox" 
                    label={data.name} 
                    name={data._id}
                    checked={formData.categories.tech}
                    onChange={handleInputChange} 
                />))}
                {/* <Form.Check 
                    type="checkbox" 
                    label="Business" 
                    name="business"
                    checked={formData.categories.business}
                    onChange={handleInputChange} 
                />
                <Form.Check 
                    type="checkbox" 
                    label="Medicine" 
                    name="medicine"
                    checked={formData.categories.medicine}
                    onChange={handleInputChange} 
                /> */}
            </Form.Group>

            <Button variant="primary" type="submit">
                Create
            </Button>
        </Form>
        </FormContainer>
        
    );
}

export default AffiliateForm;
