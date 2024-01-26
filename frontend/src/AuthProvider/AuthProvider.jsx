import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useState, createContext, useEffect } from "react";
import { redirect } from "react-router-dom";


import { useNavigate } from "react-router-dom";
const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user:'', isAuthenticated: false,userRole:'' });
  const navigate = useNavigate();

  

  const refreshAuthToken = async () => {
    try{
    const response = await axios.get('http://localhost:3000/auth/refreshAccessToken', { withCredentials: true });
   console.log('refresh Token ',response.data.accessToken);
   localStorage.setItem('token',response.data.accessToken);
   
  } catch (error) {
   const response =  await axios.get('http://localhost:3000/auth/logout')
    setAuth({user:null,isAuthenticated:false,userRole:''});
    Cookies.remove('refreshToken');
    localStorage.removeItem('token');
    navigate('/login');
  }



}


  return (
    <AuthContext.Provider value={{ auth, setAuth,refreshAuthToken}}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
