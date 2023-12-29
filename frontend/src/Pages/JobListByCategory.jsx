import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPaginatedJobsByCategory } from '../services/JobsData';
import JobTable from '../Componenets/JobTable/jobTable';
import { Container } from 'react-bootstrap';
function JobListByCategory() {
   const location = useLocation()
   const category = location.state.category
   const {_id:categoryId} =  category
   const [aprError,setApiError] = useState(false)
   const [jobs,setJobs] = useState([])
   const [totaljobs,setTotalJobs] = useState(0)
   const [activePage, setActivePage] = useState(1)
   let limit = 10

   async function getPaginatedData (){
    try {
        const response =  await getPaginatedJobsByCategory(activePage,limit,categoryId)
        const {jobs,totaljobs} = response
        console.log(response)
        setTotalJobs(totaljobs)
        setJobs(jobs)
    } catch (error) {
      setApiError(true)
    }
   }
   
   function calculateTotalPages (limit,totaljobs)
   {
     let pages = []
     for (let i =1 ; i<=totaljobs/limit; i++)
     {
        pages.push(i)
     }
     return pages
   }

  useEffect(()=>{
  
    getPaginatedData()
  },[activePage])
  
    return ( 
     <>
     <Container>
     <h1>{category.name} Jobs</h1>   
     <JobTable jobs={jobs}></JobTable>

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

export default JobListByCategory;