import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout actions (e.g., clearing user session)
    localStorage.removeItem('authToken'); // Example of removing token

    // Update the authentication state in parent component
    setIsAuthenticated(false);

    // Redirect to login page after logout
    navigate('/login');
  }, [navigate, setIsAuthenticated]); // Added setIsAuthenticated as a dependency

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 to-gray-300">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">You have been logged out.</h1>
        <p className="text-gray-600">Redirecting to the login page...</p>
      </div>
    </div>
  );
};

export default Logout;
