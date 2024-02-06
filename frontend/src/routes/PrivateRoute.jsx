import { useContext } from 'react';
import AuthContext from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';
function PrivateRoute({ children }) {
    const { auth,isLoading } = useContext(AuthContext);
    
    console.log("role value is ",auth.userRole)
    
    return isLoading?(<div>loading...</div>):auth.userRole === 'admin' ?  children : <Navigate to="/login" />;
}
export default PrivateRoute;