import { useParams } from "react-router-dom";
import EditJobForm from "../Componenets/EditJob/EditJob";
import Header from "../Componenets/Header/Header";
import Footer from "../Componenets/Footer/Footer";
function EditJobPage() {
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