import React, { useContext } from 'react';
import PostJobForm from '../Componenets/PostJobForm/PostJobForm';
import Header from '../Componenets/Header/Header';
import Footer from '../Componenets/Footer/Footer';
import AuthContext from '../AuthProvider/AuthProvider';
function PostJob(props) {
  const {refreshAuthToken}  = useContext(AuthContext)
  
  useEffect(()=>{

    refreshAuthToken()


  },[])

    return (
        <div>
          <Header headerName={'Jobeet'}/>
          <PostJobForm/>
          <Footer/>
        </div>
    );
}

export default PostJob;