import React, { useEffect,useState } from 'react';
import { Table,Row, Col , Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import constants from '../../../utilis/constants';
import CategoryTable from './CategoryTable';
import {toast} from 'react-toastify'
import { useContext } from 'react';
import AuthContext from '../../AuthProvider/AuthProvider';
import Cookies from 'js-cookie';
function ManageCategories() {


    const [categoryByJobCountData,setCategoryByJobCountData] = useState([])
    const [affiliateCountByCategory,setAffiliateCountByCategory] = useState([])
    const navigate = useNavigate()
    const [onDelete,setOnDelete] = useState(false)
    const {refreshAuthToken,setAuth} =  useContext(AuthContext)
const getCategoriesByJobCount = async()=>{
try {
    const response = await axios.get( `${constants.BACKEND_BASE_URL}category/categoryByJobCount`)
    setCategoryByJobCountData(response.data.data)
    
} catch (error) {
    console.log(error)
}

}

const getAaffiliateCountByCategory = async()=>{
  try {
      const response = await axios.get( `${constants.BACKEND_BASE_URL}affiliate/getAffiliateCountByCategory`)
      setAffiliateCountByCategory(response.data.data)
      
  } catch (error) {
      console.log(error)
  }
  
  }
  
const AffiliateCountWithCategory = ()=>{
 const affiliateData = []
 const categoryData = []

 for (let i in categoryByJobCountData ) {
  categoryData.push(categoryByJobCountData[i])
 }
 for (let i in affiliateCountByCategory ) {
  affiliateData.push(affiliateCountByCategory[i])
 }

  categoryData.map((e1)=>{
    affiliateData.map((e2)=>{
      if(e1._id==e2._id){
        e1.affiliateCount=e2.affiliateCount
      }
    })
  })
 return categoryData
 
 
}


useEffect(()=>{
 
  getCategoriesByJobCount()
  getAaffiliateCountByCategory() 
  AffiliateCountWithCategory()
},[onDelete])

useEffect(()=>{


  refreshAuthToken()


},[])


const handleDelete = async (catId) => {
  
    console.log(catId)
  try {
     
    const response = await axios.delete(`http://localhost:3000/category/${catId}`,{headers:{"Authorization":`Bearer ${localStorage.getItem('token')}`}});
    toast.success('Category is deleted Successfully',{position:toast.POSITION.TOP_CENTER});
    
    
      setOnDelete((prev)=>!prev)
  
  
  } catch (error) {

    if(error.request.status == 401){
      toast.error('Session Expired',{position:toast.POSITION.TOP_CENTER});
      setAuth({ user:'', isAuthenticated: false,userRole:'',hasAffiliate:false,token:'',userId:null });
      Cookies.remove('refreshToken');
      localStorage.removeItem('token');
      navigate('/login');
   }
   else{
    toast.error('Error in Category Deletion',{position:toast.POSITION.TOP_CENTER});
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
        <CategoryTable handleDelete={handleDelete} categoryByJob={ AffiliateCountWithCategory()} affiateCount = {affiliateCountByCategory}/>
         
    
   </Row>
   </Container> 
    );
}

export default ManageCategories;

