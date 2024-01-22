import React from 'react';
import { Table,Row,Col,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function AffiliateTable({affiliate}) {
    const navigate = useNavigate()
    return (
        <Table striped bordered hover>
        <thead>
         <tr>
           <th>Email</th>
           <th>URL</th>
           <th>Active</th>
           <th>Actions</th>
         </tr>
       </thead>
       <tbody>
         {affiliate?.map((data) => (
           <tr key={data._id}>
             <td>{data.email}</td>
            
             <td>{data.url}</td>
              
             <td>{data.active? <span className='badge bg-success'> Yes </span>:<span className='badge bg-danger'> No </span>}</td>
             <td>
             <td >
                 <Row>
                  <Col>
                  <Button variant='secondary' onClick={()=>handleClick(data._id)}>{data.active?<span>Deactivate</span>:<span>Activate</span>}</Button>
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

export default AffiliateTable;