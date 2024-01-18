import React from 'react';
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPaginatedJobs } from '../../services/JobsData';
import JobTable from './JobTable';
import { Container ,Button, Row} from 'react-bootstrap';
import axios from 'axios';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';

function ManageJobs() {
       const navigate = useNavigate();
       const [aprError,setApiError] = useState(false);
       const [jobs,setJobs] = useState([]);
       const [totaljobs,setTotalJobs] = useState(0);
       const [activePage, setActivePage] = useState(1);
       const [isdeleted,setIsDeleted] = useState(false)
       let limit = 10;
    
       async function getPaginatedData (){
        try {
            const response =  await getPaginatedJobs(activePage,limit);
            const {jobs,totaljobs} = response;
            console.log(response);
            setTotalJobs(totaljobs);
            setJobs(jobs);
        } catch (error) {
          setApiError(true);
        }
       }
       
    const handleDelete = async (jobid) => {
  

        try {
           console.log("clicked")
          const response = await axios.delete(`http://localhost:3000/job/${jobid}`);
          toast.success('Job is deleted Successfully',{position:toast.POSITION.TOP_CENTER});
          setIsDeleted((prev)=>!prev);
          navigate('/admin/');
        } catch (error) {
          console.log(error.message);
          // navigate('/login');
          toast.error('Error in Job Deletion',{position:toast.POSITION.TOP_CENTER});
        }
  
      }

       function calculateTotalPages (limit,totaljobs)
       {
         let pages = [];
         for (let i =1 ; i<=totaljobs/limit; i++);
         {
            pages.push(i);
         }
         return pages;
       }
    
      useEffect(()=>{
      
        getPaginatedData();
      },[activePage,isdeleted])
      
        return ( 
         <>
       
       <Container>
       <Row style={{margin:"20px",justifyContent:"right"}}>
         <Button  style={{width:"fit-content"}} variant='primary' onClick={()=>navigate('/admin/job/postjob')}>
           Create Job
         </Button>
        </Row>
         <JobTable jobs={jobs} handleDelete={handleDelete}></JobTable>
    
         <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center" >
             {activePage !== 1 && <li class="page-item" onClick={()=>setActivePage(activePage-1)}><a class="page-link" href="javascript:void()null">Previous</a></li>}
              {calculateTotalPages(limit,totaljobs).map((page)=>(
                 <li class={`page-item ${page===activePage?'active':''}`}  key={page} onClick={()=>setActivePage(page)}><a class="page-link" href="javascript:void()null">{page}</a></li>
              ))}   
             
              {activePage !== parseInt(totaljobs/limit) && <li class="page-item"><a class="page-link" href="javascript:void()null" onClick={()=>setActivePage(activePage+1)}>Next</a></li>}
            </ul>
          </nav> 
        </Container>
          
    
         </>
    
        );
              }
    
    

export default ManageJobs;