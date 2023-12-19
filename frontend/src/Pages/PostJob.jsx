import React from 'react';
import PostJobForm from '../Componenets/PostJobForm/PostJobForm';
import Header from '../Componenets/Header/Header';
import Footer from '../Componenets/Footer/Footer';
function PostJob(props) {
    return (
        <div>
             <Header/>
          <PostJobForm/>
          <Footer/>
        </div>
    );
}

export default PostJob;