import React, { useEffect,useContext } from "react";
import Header from "../Componenets/Header/Header";
import SearchBar from "../Componenets/SearchBar/SearchBar";
import JobsList from "../Componenets/JobList/JobList";
import Footer from "../Componenets/Footer/Footer";
import AuthContext from "../AuthProvider/AuthProvider";

const DashboardPage = () => {


 


  return (
    <div>
      
      <Header headerName={'Jobeet'} />
      <SearchBar />
      <JobsList />
      <Footer/>
    </div>
  );
};

export default DashboardPage;
