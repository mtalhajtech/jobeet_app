import React from 'react';
import { Table } from 'react-bootstrap';
function ManageCategories() {



    return (
        <div>
           {/* <td>{{ category.name }}</td>
        <td>{{ category.slug }}</td>
        <td>{{ category.jobs.count }}</td> */}
         <Table striped bordered hover>
         <thead>
          <tr>
            <th>Name</th>
            <th>Jobs</th>
            <th>Affiliates</th>
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
        </div>
    );
}

export default ManageCategories;