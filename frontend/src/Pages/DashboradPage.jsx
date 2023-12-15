import React from "react";
import Header from "../Componenets/Header/Header";
import SearchBar from "../Componenets/SearchBar/SearchBar";
import JobsList from "../Componenets/JobList/JobList";
const DashboradPage = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <JobsList />
    </div>
  );
};

export default DashboradPage;
