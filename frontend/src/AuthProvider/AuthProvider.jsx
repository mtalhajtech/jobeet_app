import { jwtDecode } from "jwt-decode";
import { useState, createContext, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: null, isAuthenticated: false });

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
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
