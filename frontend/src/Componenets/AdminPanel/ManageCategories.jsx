import React, { useEffect,useState } from 'react';
import { Table,Row, Col , Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import constants from '../../../utilis/constants';
import CategoryTable from './CategoryTable';
import {toast} from 'react-toastify'
import { useContext } from 'react';
import AuthContext from '../../AuthProvider/AuthProvider';
function ManageCategories() {

    const [categoryByJobCountData,setCategoryByJobCountData] = useState([])
    const navigate = useNavigate()
    const [onDelete,setOnDelete] = useState(false)
    const {refreshAuthToken} =  useContext(AuthContext)
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

useEffect(()=>{


  refreshAuthToken()


},[])


const handleDelete = async (catId) => {
  
    console.log(catId)
  try {
     console.log("clicked")
    const response = await axios.delete(`http://localhost:3000/category/${catId}`);
    toast.success('Category is deleted Successfully',{position:toast.POSITION.TOP_CENTER});
    
    
      setOnDelete((prev)=>!prev)
  
  
  } catch (error) {

    if(error.request.status == 401){
      toast.error('Session Expired',{position:toast.POSITION.TOP_CENTER});
      navigate('/login');
   }
   else{
    toast.error('Error in Job Deletion',{position:toast.POSITION.TOP_CENTER});
  }
    
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
        <CategoryTable handleDelete={handleDelete} categoryByJob={categoryByJobCountData}/>
         
      
   </Row>
   </Container> 
    );
}

export default ManageCategories;

