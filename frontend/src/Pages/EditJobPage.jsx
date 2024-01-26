import { useParams } from "react-router-dom";
import EditJobForm from "../Componenets/EditJob/EditJob";
import Header from "../Componenets/Header/Header";
import Footer from "../Componenets/Footer/Footer";
import AuthContext from "../AuthProvider/AuthProvider";
import { useContext,useEffect } from "react";
function EditJobPage() {
  const {refreshAuthToken}  = useContext(AuthContext)


  useEffect(()=>{


    refreshAuthToken()


},[])

    const {jobId}= useParams()
   
    return (
        <div>
          <Header headerName={'Jobeet'}/>
          <EditJobForm jobId={jobId}/>
          <Footer/>
        </div>
    );
}

export default EditJobPage;