import React from "react";
import Header from "../Componenets/Header/Header";
import SearchBar from "../Componenets/SearchBar/SearchBar";
import JobsList from "../Componenets/JobList/JobList";
import Footer from "../Componenets/Footer/Footer";
const DashboradPage = () => {
  return (
    <div>
      
      <Header />
      <SearchBar />
      <JobsList />
      <Footer/>
    </div>
  );
};

export default DashboradPage;
