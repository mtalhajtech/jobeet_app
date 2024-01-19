import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import FormContainer from '../FormContainer/FormContainer';
function AffiliateForm() {
    const [formData, setFormData] = useState({
        email: '',
        url: '',
        categories: {
            tech: false,
            business: false,
            medicine: false,
        }
    });

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
            console.log(response.data); // Process the response data as needed
        } catch (error) {
            console.error('Error during API call', error);
        }
    };

    return (
        <FormContainer>
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
                <Form.Check 
                    type="checkbox" 
                    label="Tech" 
                    name="tech"
                    checked={formData.categories.tech}
                    onChange={handleInputChange} 
                />
                <Form.Check 
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
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Create
            </Button>
        </Form>
        </FormContainer>
        
    );
}

export default AffiliateForm;
