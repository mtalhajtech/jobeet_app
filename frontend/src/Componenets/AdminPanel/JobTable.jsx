import React from 'react';
import { Button, Table } from 'react-bootstrap';
import {Link} from 'react-router-dom'
function JobTable({jobs,handleDelete}) {

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
                <div >
                
                <Button className="btn btn-default " onClick={()=>handleDelete(job._id)}>Delete</Button>
                <Button className="btn btn-danger ">Edit</Button>
                </div>
                </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
}

export default JobTable;