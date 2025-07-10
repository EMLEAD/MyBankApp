import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserProfile } from '../store/authSlice';

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { token, user, isLoading } = useSelector((state) => state.auth);
  
  const localStorageToken = localStorage.getItem('token');
  
  useEffect(() => {
    if (!token && localStorageToken && !user) {
      dispatch(getUserProfile());
    }
  }, [token, localStorageToken, user, dispatch]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

    // If no token and no localStorage token, redirect to login
  if (!token && !localStorageToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
