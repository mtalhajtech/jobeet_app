import React from 'react';
import { Button, Table,Row,Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function JobTable({jobs,handleDelete}) {
    const navigate = useNavigate()
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
             <th>Location</th>
            <th>Position</th>
            <th>Company</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job._id}>
              <td>{job.location}</td>
           
              <td>{job.position}</td>
          
              <td>{job.company}</td>
              <td>{job.isActive?  <span > Active</span> : <span  >Not Active</span>}    </td>
              <td >
               <Row>
                <Col>
                <Button variant='danger' onClick={()=>handleDelete(job._id)}>Delete</Button>
                </Col>
               <Col>
               <Button variant='secondary' onClick={()=>navigate(`/admin/job/editjob/${job._id}`)}>Edit</Button>
               </Col>
               
               </Row>
                </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
}

export default JobTable;