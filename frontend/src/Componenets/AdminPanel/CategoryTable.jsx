import React from 'react';
import { Table,Row,Col,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function CategoryTable({categoryByJob,handleDelete,}) {
    const navigate = useNavigate()
   
    return (
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
         {categoryByJob.map((data) => (
           <tr key={data._id}>
             <td>{data.name.charAt(0).toUpperCase()+data.name.slice(1)}</td>
            
             <td>{data.totalJobs}</td>
              
             <td>{data.affiliateCount}</td>
             <td>
             <td >
                 <Row>
                  <Col>
                  <Button variant='danger' onClick={()=>handleDelete(data._id)}>Delete</Button>
                  </Col>
                 <Col>
                 <Button variant='secondary' onClick={()=>navigate(`/admin/categories/edit/${data._id}`)}>Edit</Button>
                 </Col>               
                 </Row>
                  </td>
             </td>
           </tr>
         ))}
       </tbody>
     </Table>
    );
}

export default CategoryTable;