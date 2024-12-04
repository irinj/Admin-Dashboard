import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active link styling
import { FaUsers, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-200 p-6 shadow-lg transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold text-gray-700">Admin Dashboard</h2>
          <button
            className="text-gray-700 md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle Sidebar"
          >
            <FaBars />
          </button>
        </div>
        <ul>
          <li className="mb-4">
            <NavLink
              to="/users"
              className="flex items-center text-gray-700 hover:bg-gray-300 p-2 rounded-md transition duration-200"
              activeClassName="bg-gray-300"
              onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
            >
              <FaUsers className="mr-3" /> Users
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/roles"
              className="flex items-center text-gray-700 hover:bg-gray-300 p-2 rounded-md transition duration-200"
              activeClassName="bg-gray-300"
              onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
            >
              <FaCog className="mr-3" /> Roles
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/logout"
              className="flex items-center text-gray-700 hover:bg-gray-300 p-2 rounded-md transition duration-200 w-full text-left"
            >
              <FaSignOutAlt className="mr-3" /> Logout
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="ml-64 p-8 w-full bg-gradient-to-r from-gray-200 to-gray-300 min-h-screen">
        {/* Main content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
