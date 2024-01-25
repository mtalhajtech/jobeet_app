import React, { useState } from 'react';
import { Button, Form,Row } from 'react-bootstrap';
import FormContainer from '../FormContainer/FormContainer';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function CreateCategory() {

    const [form,setForm] = useState({})
    const navigate = useNavigate()
    const handleSubmit = async(event)=>{
        event.preventDefault()
        const formData = new FormData();
      
        try {
            const response = await axios.post(
                "http://localhost:3000/category/create",
                form,
                )
            navigate('/admin/categories')    
            toast.success('Category Created Successfully',{position:toast.POSITION.TOP_LEFT})
            
        } catch (error) {
          

              if(error.request.status===409){

                toast.error('Category Exist already Use Different Name',{position:toast.POSITION.TOP_LEFT})

              }
              else {
                toast.error('Error in creating Category',{position:toast.POSITION.TOP_LEFT})

              }

        }
    }

    const setField = (field, value)=>{

          setForm({...form,[field]:value})
        //   console.log(form.name)

    }
    
    return (

       <FormContainer>
        <Row>
            <h1>Create Category</h1>
        </Row>
        <Form onSubmit={handleSubmit}>
        <Form.Group>
        <Form.Label>
        Name 
       </Form.Label>
       <Form.Control type='text' required value={form.name} onChange={(event)=>setField("name",event.target.value)}/>
        </Form.Group>
        <Form.Group>
                  <Button type="submit" className="my-2" variant="dark">
                    Create
                  </Button>
     </Form.Group>
        </Form>
      
       

       </FormContainer>
       
    );
}

export default CreateCategory;