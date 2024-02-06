import React, { useEffect, useState } from 'react';
import { Button, Form,Row } from 'react-bootstrap';
import FormContainer from '../FormContainer/FormContainer';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';
import AuthContext from '../../AuthProvider/AuthProvider';
import { useContext } from 'react';
function EditCategory() {

    const [form,setForm] = useState({})
    const navigate = useNavigate()
    const {setAuth} = useContext(AuthContext)
    const {catId} = useParams()

    const   fetchData = async()=>{
        try {
          const response = await axios.get(`http://localhost:3000/category/${catId}`)
           console.log(response.data.data[0].name)
           setForm({name:response.data.data[0].name})
          
        } catch (error) {
          console.log(error)
        }
  
      }
  

    useEffect(()=>{


        fetchData()



    },[])




    const handleSubmit = async(event)=>{
        event.preventDefault()
      
      
        try {
            const response = await axios.put(
                `http://localhost:3000/category/${catId}`,
                form,{headers:{"Authorization":`Bearer ${localStorage.getItem('token')}`}}
                )
            navigate('/admin/categories')    
            toast.success('Category Updated Successfully',{position:toast.POSITION.TOP_LEFT})
            
        } catch (error) {
          
          if(error.request.status===409){

            toast.error('Category Exist already Use Different Name',{position:toast.POSITION.TOP_LEFT})

          }
          else if(error.request.status===401)
          {
            
              setAuth({ user:'', isAuthenticated: false,userRole:'',hasAffiliate:false,token:'',userId:null });
              Cookies.remove('refreshToken');
              localStorage.removeItem('token');
            toast.error('Session Expired',{position:toast.POSITION.TOP_CENTER})
            navigate('/login')
         }
         else
           {
            toast.error('Error in Editing Category',{position:toast.POSITION.TOP_LEFT})

          }
            console.log(error)
        }
    }

    const setField = (field, value)=>{

          setForm({...form,[field]:value})
        //   console.log(form.name)

    }
    
    return (

       <FormContainer>
        <Row>
            <h1>Edit Category</h1>
        </Row>
        <Form onSubmit={handleSubmit}>
        <Form.Group>
        <Form.Label>
        Name 
       </Form.Label>
       <Form.Control type='text' required value={capitalizeFirstLetter(form?.name)} onChange={(event)=>setField("name",event.target.value)}/>
        </Form.Group>
        <Form.Group>
                  <Button type="submit" className="my-2" variant="dark">
                    Save
                  </Button>
     </Form.Group>
        </Form>
      
       

       </FormContainer>
       
    );
}
export default EditCategory