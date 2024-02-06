import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppRoutes from './routes/AppRoutes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react'
import { jwtDecode } from 'jwt-decode'
import AuthContext from './AuthProvider/AuthProvider'
function App() {
  const {setAuth} = useContext(AuthContext)
 useEffect (()=>{

  const token = localStorage.getItem('token')

  if(token)
  {
    //  console.log()
     const decodedToken = jwtDecode(token)
     console.log(decodedToken)
     setAuth({user:decodedToken.userName, isAuthenticated:true,userRole:decodedToken.userRole,hasAffiliate:decodedToken.hasAffiliate,userId:decodedToken.userId})
  }
  
  console.log("useEffect Fired 1")


 },[])
  return (
    <>
      
     <AppRoutes/>
     <ToastContainer/>
    
    </>
  )
}

export default App
