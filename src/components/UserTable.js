import React, { useState } from 'react';
import Modal from './Modal';

function UserTable() {
  // User list
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'User', status: 'Inactive' },
  ]);

  // Modal state for adding/editing user
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserId, setEditedUserId] = useState(null);
  
  // New user data for adding/editing
  const [newUser, setNewUser] = useState({ name: '', role: '', status: 'Active' });

  // Handle adding a new user
  const handleAddUser = () => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
    resetModal();
  };

  // Handle editing an existing user
  const handleEditUser = () => {
    setUsers(
      users.map(user =>
        user.id === editedUserId ? { ...user, ...newUser } : user
      )
    );
    resetModal();
  };

  // Reset modal and form
  const resetModal = () => {
    setNewUser({ name: '', role: '', status: 'Active' });
    setIsEditing(false);
    setIsModalOpen(false);
    setEditedUserId(null);
  };

  // Handle deleting a user
  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Handle toggling user status
  const handleToggleStatus = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' }
          : user
      )
    );
  };

  // Open modal for editing user
  const openEditModal = (user) => {
    setNewUser({ name: user.name, role: user.role, status: user.status });
    setIsEditing(true);
    setEditedUserId(user.id);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-300 p-8 min-h-screen">
      <div className="bg-white shadow-lg rounded-xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Users</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition duration-300"
          >
            Add User
          </button>
        </div>

        {/* Table */}
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-3 px-4 text-left text-gray-700">Name</th>
              <th className="py-3 px-4 text-left text-gray-700">Role</th>
              <th className="py-3 px-4 text-left text-gray-700">Status</th>
              <th className="py-3 px-4 text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'
                } hover:bg-gray-200 transition duration-200`}
              >
                <td className="py-3 px-4 text-left text-gray-700">{user.name}</td>
                <td className="py-3 px-4 text-left text-gray-700">{user.role}</td>
                <td className="py-3 px-4 text-left">
                  <span
                    className={`${
                      user.status === 'Active' ? 'text-green-600' : 'text-gray-600'
                    } font-semibold`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-left">
                  <button
                    className="text-indigo-500 hover:underline"
                    onClick={() => openEditModal(user)}
                  >
                    Edit
                  </button>{' '}
                  |{' '}
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>{' '}
                  |{' '}
                  <button
                    className="text-orange-500 hover:underline"
                    onClick={() => handleToggleStatus(user.id)}
                  >
                    Toggle Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Component for Adding/Editing User */}
      <Modal
        isOpen={isModalOpen}
        onClose={resetModal}
        title={isEditing ? "Edit User" : "Add New User"}
        onSave={isEditing ? handleEditUser : handleAddUser}
      >
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <input
              type="text"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              value={newUser.status}
              onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default UserTable;
