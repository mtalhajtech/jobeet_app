import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useState, createContext, useEffect } from "react";
import { redirect } from "react-router-dom";
import {toast} from 'react-toastify'

import { useNavigate } from "react-router-dom";
const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user:'', isAuthenticated: false,userRole:'',hasAffiliate:false,token:'',userId:null });
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  

  const refreshAuthToken = async () => {
    try{
    const response = await axios.get('http://localhost:3000/auth/refreshAccessToken', { withCredentials: true });
   console.log('refresh Token ',response.data.accessToken);
   localStorage.setItem('token',response.data.accessToken);
   
  } catch (error) {
   const response =  await axios.get('http://localhost:3000/auth/logout')
    console.log(error.request.statuscode)
    setAuth({ user:'', isAuthenticated: false,userRole:'',hasAffiliate:false,token:'',userId:null });
    Cookies.remove('refreshToken');
    localStorage.removeItem('token');
    toast.error("Session Expired (Refresh Token Expired)",{position:toast.POSITION.TOP_CENTER})
    navigate('/login');
  }



}


  return (
    <AuthContext.Provider value={{ auth, setAuth,refreshAuthToken,setSearchTerm,searchTerm}}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
