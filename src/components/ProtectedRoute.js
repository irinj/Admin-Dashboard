import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// ProtectedRoute component to protect routes
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken'); // Check if token exists in localStorage
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect them to login page if not authenticated
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
