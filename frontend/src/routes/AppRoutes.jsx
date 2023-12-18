import {Routes,Route} from "react-router-dom"
import DashboradPage from "../Pages/DashboradPage"
import PostJob from "../Pages/PostJob";


const AppRoutes = () => {
    return (
       
            <Routes>
                <Route exact path='/' element={<DashboradPage/>} >
                     
                </Route>
                <Route exact path='/postjob' element={<PostJob/>} >
                     
                </Route>
            </Routes>
      
    );
};

export default AppRoutes;