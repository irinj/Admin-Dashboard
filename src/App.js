import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserTable from './components/UserTable';
import RoleTable from './components/RoleTable';
import Sidebar from './components/Sidebar';
import Logout from './components/Logout';  // Import Logout page
import Login from './components/Login';    // Import Login page

function App() {
  // State to track if user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for auth token in localStorage when the component mounts
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  const handleLogout = () => {
    // Remove auth token from localStorage and update the state
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="flex min-h-screen bg-gradient-to-r from-gray-200 to-gray-300">
        {/* Sidebar only shows if authenticated */}
        {isAuthenticated && <Sidebar />}

        {/* Main Content Area */}
        <div className="flex-1 p-8">
          <Routes>
            {/* Login route */}
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

            {/* Default route redirects to login if not authenticated */}
            <Route path="/" element={isAuthenticated ? <Navigate to="/users" /> : <Navigate to="/login" />} />

            {/* Users Management */}
            <Route
              path="/users"
              element={
                isAuthenticated ? (
                  <div>
                    <h1 className="text-3xl font-semibold text-gray-700 mb-6">Users Management</h1>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <UserTable />
                    </div>
                  </div>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            {/* Roles Management */}
            <Route
              path="/roles"
              element={
                isAuthenticated ? (
                  <div>
                    <h1 className="text-3xl font-semibold text-gray-700 mb-6">Roles Management</h1>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <RoleTable />
                    </div>
                  </div>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            {/* Logout Route */}
            <Route
              path="/logout"
              element={
                <Logout setIsAuthenticated={setIsAuthenticated} /> // Pass logout function to the Logout component
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
