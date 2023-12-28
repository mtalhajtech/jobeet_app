import {Routes,Route} from "react-router-dom"
import DashboradPage from "../Pages/DashboradPage"
import PostJob from "../Pages/PostJob";
import JobDetailPage from "../Pages/JobDetailPage";


const AppRoutes = () => {
    return (
       
            <Routes>
                <Route exact path='/' element={<DashboradPage/>} >
                     
                </Route>
                <Route exact path='/postjob' element={<PostJob/>} >
                     
                </Route>
                <Route exact path='/job/show/:jobId' element={<JobDetailPage/>} >
                     
                     </Route>
            </Routes>
      
    );
};

export default AppRoutes;