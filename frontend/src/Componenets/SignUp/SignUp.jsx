import {Row,Col,Form,Button,Dropdown,DropdownButton} from 'react-bootstrap'
import * as yup from 'yup'
import * as formik from 'formik';
import React from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import Cookies from 'js-cookie';

function SignUp() {

 const {Formik} = formik
 const navigate= useNavigate()
  const schema = yup.object().shape({
    firstName: yup.string().required('First Name is Required Field'),
    lastName: yup.string().required('Last Name is Required Field'),
    email: yup.string().email().required('Email is Required Field'),
    userName: yup.string().required('Username is Required Field'),
    password:yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'),null], 'Password must match').required('Confirm Password is required'),
    role: yup.string().notOneOf([''],'Please Select the role').required('A role is required')
 })


    return (

    <>  <Row style={{justifyContent:'center'}}>
      <Col xs={10} md={8} lg={4}>

      <Row>
        <h1>
           Register
        </h1>
       </Row> 
    <Formik
       validationSchema={schema}
       onSubmit={async(value)=>{
         console.log(value)
        try {
          const response = await axios.post('http://localhost:3000/auth/register',value)
          toast.success('User Registered Successfully',{position:toast.POSITION.TOP_LEFT})
          setAuth({ user:'', isAuthenticated: false,userRole:'',hasAffiliate:false,token:'',userId:null });
          Cookies.remove('refreshToken');
          localStorage.removeItem('token');
          navigate('/login')
          console.log('success')
        } catch (error) {
          console.log(error.response.message)
          toast.error(error.response.data.message,{position:toast.POSITION.TOP_LEFT})
        }

       }}
       initialValues={{
        firstName:'',
        lastName:'',
        userName:'',
        email:'',
        password:'',
        confirmPassword:'',
        role:''
       }}>
        {({handleSubmit,handleChange,values,touched,errors,handleBlur})=>(
        <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Username" value={values.userName} onChange={handleChange} name = 'userName' isInvalid={touched.userName && !!errors.userName}  onBlur={handleBlur}/>
        <Form.Control.Feedback type="invalid">
                  {errors.userName}
        </Form.Control.Feedback>
       </Form.Group>
         
      <Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" value={values.firstName} onChange={handleChange} placeholder="Enter Your First Name" name = 'firstName' isInvalid={ touched.firstName && !!errors.firstName} onBlur={handleBlur} />
        <Form.Control.Feedback type="invalid">
                  {errors.firstName}
        </Form.Control.Feedback>  
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" value={values.lastName} onChange={handleChange} placeholder="Enter Your Last Name" name = 'lastName' isInvalid={ touched.lastName && errors.lastName} onBlur={handleBlur}/>
        <Form.Control.Feedback type="invalid">
                  {errors.lastName}
        </Form.Control.Feedback>  
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={values.email} onChange={handleChange} placeholder="Enter Your email" name = 'email' isInvalid={ touched.email && errors.email} onBlur={handleBlur} />
        <Form.Control.Feedback type="invalid">
                  {errors.email}
        </Form.Control.Feedback>  
      </Form.Group>

      <Form.Group className='mb-3'>
      <Form.Label>Password</Form.Label>
      <Form.Control type='password' value={values.password} onChange={handleChange} placeholder='Enter password' name = 'password' isInvalid={ touched.password && errors.password} onBlur={handleBlur}>
      </Form.Control>
      <Form.Control.Feedback type="invalid">
                  {errors.password}
        </Form.Control.Feedback>  
      </Form.Group>

      <Form.Group className='mb-3'>
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type='password' value={values.confirmPassword} onChange={handleChange} placeholder='Enter Your password again' name = 'confirmPassword' isInvalid={ touched.confirmPassword && errors.confirmPassword} onBlur={handleBlur}>
      </Form.Control>
      <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword}
        </Form.Control.Feedback>  
      </Form.Group>
      <Form.Group>
      <Form.Label>
       Role
      </Form.Label>
      <Form.Select aria-label="Default select example" value={values.role} name='role' required onChange={handleChange} onBlur={handleBlur}>
      <option >Select Role</option>
      <option value="user">User</option>
      <option value="admin">Admin</option>
      
    </Form.Select>
       
      </Form.Group>
      <Form.Group>
        <Button type= "submit" className="my-2" variant="dark"> 
          Register
         </Button>
      </Form.Group>
     
       </Form>
)}
       

       </Formik>
       
      </Col>
    </Row>
      
       </>
    );
}

export default SignUp;