import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useState, createContext, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: null, isAuthenticated: false });
  const [authToken, setAuthToken] = useState(null);
  // const [expiryTime, setExpiryTime] = useState(null);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
       
      const decodedToken = jwtDecode(token);
            
      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        setAuth({ user: "null", isAuthenticated: false });
        
      } else {
        setAuth({ user: decodedToken, isAuthenticated: true });
      }
    }
  }, []);
  // useEffect(() => {
  //   // Set up a timer to check for token expiry
  //   const timer = setInterval(() => {
  //     const now = new Date();
  //     if (now.getTime() >= auth.exp*1000) {

  //       refreshToken();
  //     }
  //   }, 1000 * 60); // Check every minute
   
  //   return () => clearInterval(timer);
  // }, [expiryTime]);

  const refreshToken = async () => {
    try {
      // Implement the logic to get a new token using refresh token

      const newToken = await axios.post('http://localhost:5173/auth/refreshAccessToken',refreshToken,{withCredentials:'true'});
      setAuth(newToken)
      setAuthToken(newToken.accessToken);
      setExpiryTime(newToken.expiryTime);

    } catch (error) {
     console.log(error)
    }
  };
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
