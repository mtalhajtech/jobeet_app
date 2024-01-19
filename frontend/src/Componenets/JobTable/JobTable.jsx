import React from 'react';
import { Table } from 'react-bootstrap';
import {Link} from 'react-router-dom'
function JobTable({jobs}) {

    return (
        <Table striped bordered hover>
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
              <td>{job.location}</td>
              <Link to={`/job/show/${job?._id}`} state={{job}}>
              <td>{job.position}</td>
              </Link>
              <td>{job.company}</td>
              
            </tr>
          ))}
        </tbody>
      </Table>
    );
}

export default JobTable;