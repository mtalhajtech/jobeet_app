import { useEffect,useState } from 'react';
import { useLocation,useParams,useSearchParams } from 'react-router-dom';
import { getPaginatedJobsByCategory } from '../services/JobsData';
import JobTable from '../Componenets/JobTable/jobTable';
import { Container } from 'react-bootstrap';
import Header from '../Componenets/Header/Header';
import { useContext } from 'react';
import AuthContext from '../AuthProvider/AuthProvider';
import SearchBar from '../Componenets/SearchBar/SearchBar';
import { capitalizeFirstLetter } from '../utils/utils';
function JobListByCategory() {
   const {refreshAuthToken , auth,searchTerm} = useContext(AuthContext)
   const location = useLocation()
   const params =  useParams()
  
   const [searchParams] = useSearchParams()
   const categoryId = params.categoryId
   const categoryName = searchParams.get('name')
   const [aprError,setApiError] = useState(false)
   const [jobs,setJobs] = useState([])
   const [totaljobs,setTotalJobs] = useState(0)
   const [activePage, setActivePage] = useState(1)
   const limit = 10

   async function getPaginatedData (){
    try {
        const response =  await getPaginatedJobsByCategory(activePage,limit,categoryId,searchTerm)
        const {jobs,totaljobs} = response
        console.log(totaljobs)
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
  
    auth.isAuthenticated && refreshAuthToken()
    getPaginatedData()

  },[activePage,searchTerm])
  
    return ( 
     <>
   <Header headerName={'Jobeet'}/>
   <SearchBar />
   <Container>
  
     <h1>{capitalizeFirstLetter(categoryName)} Jobs</h1>   
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