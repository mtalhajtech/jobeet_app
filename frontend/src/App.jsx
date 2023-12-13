import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Componenets/Header/Header'
import SearchBar from './Componenets/SearchBar/SearchBar'
import JobsTable from './Componenets/JobList/JobList'
function App() {
  
  return (
    <>
     <Header/>
     <SearchBar/>
     <JobsTable/>
    </>
  )
}

export default App
