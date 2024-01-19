import React, { useEffect,useState } from 'react';
import { Table,Row, Col , Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import constants from '../../../utilis/constants';
import {toast} from 'react-toastify'
function ManageCategories() {

    const [categoryByJobCountData,setCategoryByJobCountData] = useState([])
    const navigate = useNavigate()
    const [onDelete,setOnDelete] = useState(false)
const getCategoriesByJobCount = async()=>{
try {
    const response = await axios.get( `${constants.BACKEND_BASE_URL}category/categoryByJobCount`)
    setCategoryByJobCountData(response.data.data)
    
} catch (error) {
    console.log(error)
}

}

useEffect(()=>{
 
  getCategoriesByJobCount()
   console.log(categoryByJobCountData)
},[onDelete])

const handleDelete = async (catId) => {
  

  try {
     console.log("clicked")
    const response = await axios.delete(`http://localhost:3000/category/${catId}`);
    toast.success('Category is deleted Successfully',{position:toast.POSITION.TOP_CENTER});
    
    setTimeout(()=>{
      setOnDelete((prev)=>!prev)
    },5000);
  
  } catch (error) {
    console.log(error.message);
    toast.error('Error in Job Deletion',{position:toast.POSITION.TOP_CENTER});
  }

}

    return (
        <Container>
      <Row>
         <Row style={{margin:"20px",justifyContent:"right"}}>
         <Button  style={{width:"fit-content"}} variant='primary' onClick={()=>navigate('/admin/categories/create')}>
           Create New Category
         </Button>
        </Row>
      
      <Table striped bordered hover>
      <thead>
       <tr>
         <th>Name</th>
         <th>Jobs</th>
         <th>Affiliates</th>
         <th>Actions</th>
       </tr>
     </thead>
     <tbody>
       {categoryByJobCountData.map((data) => (
         <tr key={data._id}>
           <td>{data.name}</td>
          
           <td>{data.totalJobs}</td>
            
           <td>N/A</td>
           <td>
           <td >
               <Row>
                <Col>
                <Button variant='danger' onClick={()=>handleDelete(data._id)}>Delete</Button>
                </Col>
               <Col>
               <Button variant='secondary' onClick={null}>Edit</Button>
               </Col>               
               </Row>
                </td>
           </td>
         </tr>
       ))}
     </tbody>
   </Table>
   </Row>
   </Container> 
    );
}

export default ManageCategories;

