import React from 'react';
import { Table } from 'react-bootstrap';
import {Link,NavLink} from 'react-router-dom'
function JobTable({jobs}) {

    return (
        <Table  bordered hover style={{tableLayout:"fixed"}}>
        <thead>
          <tr>
             <th>Location</th>
            <th>Position</th>
            <th>Company</th>
          
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job._id}>
              <td  >{job.location}</td>
              
              <td ><Link to={`/job/show/${job?._id}`} style={{width:"fit-content"}} >{job.position}  </Link></td>
              <td >{job.company}</td>
              
            </tr>
          ))}
        </tbody>
      </Table>
    );
}

export default JobTable;