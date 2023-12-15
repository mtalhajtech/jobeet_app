import {Routes,Route} from "react-router-dom"
import DashboradPage from "../Pages/DashboradPage"


const AppRoutes = () => {
    return (
       
            <Routes>
                <Route exact path='/' element={<DashboradPage/>} >
                     
                </Route>
            </Routes>
      
    );
};

export default AppRoutes;