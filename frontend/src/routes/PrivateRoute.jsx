import { useContext } from 'react';
import AuthContext from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const { auth } = useContext(AuthContext);
    return auth.userRole === 'admin' ? children : <Navigate to="/login" />;
}
export default PrivateRoute;