import { Routes, Route } from "react-router-dom";
import DashBoardPage from "../Pages/DashboardPage";
import PostJob from "../Pages/PostJob";
import JobDetailPage from "../Pages/JobDetailPage";
import JobListByCategory from "../Pages/JobListByCategory";
import EditJobPage from "../Pages/EditJobPage";
import SignInPage from "../Pages/SignInPage";
import SignUpPage from "../Pages/SignUpPage";
import PrivateRoute from "./PrivateRoute";
import AdminPanel from "../Pages/AdminPanel";
import ManageJobs from "../Componenets/AdminPanel/ManageJobs";
import ManageCategories from "../Componenets/AdminPanel/ManageCategories";
import ManageAffiliates from "../Componenets/AdminPanel/ManageAffiliates";
import EditJobAdmin from "../Componenets/AdminPanel/EditJobAdmin";
import PostJobAdmin from "../Componenets/AdminPanel/PostJobAdmin";
import CreateCategory from "../Componenets/AdminPanel/CreateCategory";
import EditCategory from "../Componenets/AdminPanel/EditCategory";
import AffiliateForm from "../Componenets/affiliateForm/affiliateForm";
const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<DashBoardPage />}></Route>
      <Route exact path="/signUp" element={<SignUpPage />}></Route>
      <Route exact path="/login" element={<SignInPage />}></Route>
      <Route exact path="/postjob" element={<PostJob />}> </Route>
      <Route exact path="/affiliateForm" element={<AffiliateForm/>}></Route> 
      
      <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        >
        <Route index element={<ManageJobs />} />
        <Route path="categories" element={<ManageCategories />} />
        <Route path="categories/create" element={<CreateCategory />} />
        <Route path="categories/edit/:catId" element ={<EditCategory/>}/>
        <Route path="affiliates" element={<ManageAffiliates/>} />
        <Route path="job/editjob/:jobId" element={<EditJobAdmin/>}/>
        
        <Route path="job/postjob" element={<PostJobAdmin/>}/>
        </Route>

      <Route exact path="/job/show/:jobId" element={<JobDetailPage />}></Route>
      <Route
        exact
        path="/job/category/:categoryId"
        element={<JobListByCategory />}
      ></Route>
      <Route exact path="/job/edit/:jobId" element={<EditJobPage />}></Route>
    </Routes>
  );
};

export default AppRoutes;
