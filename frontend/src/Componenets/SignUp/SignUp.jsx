import {Row,Col,Form,Button} from 'react-bootstrap'

import React from 'react';

function SignUp() {
    return (
    <>
       <Row>
        <h1>
            Jobeet App Rgister
        </h1>
       </Row> 
       <Form>
        <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Username" required/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your First Name" required/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Last Name" required/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Your email" required/>
      </Form.Group>
      <Form.Group className='mb-3'>
      <Form.Label>Password</Form.Label>
      <Form.Control type='text' placeholder='Enter password ' required>
      </Form.Control>
      </Form.Group>
      <Form.Group>
        <Button type= "submit" className="my-2" variant="dark">
          Register
         </Button>
      </Form.Group>
     
       </Form>
       </>
    );
}

export default SignUp;