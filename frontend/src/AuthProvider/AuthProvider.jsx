import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useState, createContext, useEffect } from "react";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user:'', isAuthenticated: false,userRole:'' });
  return (
    <AuthContext.Provider value={{ auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
