import {Routes,Route} from "react-router-dom"
import DashboradPage from "../Pages/DashboradPage"
import PostJob from "../Pages/PostJob";
import JobDetailPage from "../Pages/JobDetailPage";
import JobListByCategory from "../Pages/JobListByCategory";
import EditJobPage from "../Pages/EditJobPage";
import SignInPage from "../Pages/SignInPage";
import SignUpPage from "../Pages/SignUpPage";
const AppRoutes = () => {
    return (
       
            <Routes>
                <Route exact path='/' element={<DashboradPage/>} >
                     
                </Route>
                <Route exact path='/signUp' element={<SignUpPage/>}>

                </Route>
                <Route exact path='/login' element={<SignInPage/>} >
                     
                </Route>
                <Route exact path='/postjob' element={<PostJob/>} >
                     
                </Route>
                <Route exact path='/job/show/:jobId' element={<JobDetailPage/>} >
                     
                     </Route>
                <Route exact path='/job/category/:categoryId' element={<JobListByCategory/>} >
                     
                 </Route> 
                 <Route exact path='/job/edit/:jobId' element={<EditJobPage/>} >
                     
                 </Route>

            </Routes>
      
    );
};

export default AppRoutes;