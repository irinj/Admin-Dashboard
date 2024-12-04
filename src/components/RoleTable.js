import React, { useState } from 'react';

function RoleTable() {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'User', permissions: ['Read'] },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);
  const [newPermission, setNewPermission] = useState(''); // Manage new permission input

  const handleAddRole = () => {
    setCurrentRole({ name: '', permissions: [] }); // Create a new empty role
    setIsModalOpen(true);
  };

  const handleEditRole = (role) => {
    setCurrentRole(role); // Set the current role to be edited
    setIsModalOpen(true);
  };

  const handleSaveRole = () => {
    if (currentRole.id) {
      setRoles(roles.map((role) => (role.id === currentRole.id ? currentRole : role)));
    } else {
      // Add a new role with the next ID
      setRoles([...roles, { ...currentRole, id: roles.length + 1 }]);
    }
    setIsModalOpen(false);
  };

  const handleDeleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id)); // Remove role by id
  };

  const handleAddPermission = () => {
    if (newPermission && !currentRole.permissions.includes(newPermission)) {
      setCurrentRole({
        ...currentRole,
        permissions: [...currentRole.permissions, newPermission],
      });
      setNewPermission(''); // Clear the permission input
    }
  };

  const handleRemovePermission = (permission) => {
    setCurrentRole({
      ...currentRole,
      permissions: currentRole.permissions.filter((p) => p !== permission),
    });
  };

  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-300 p-8 min-h-screen">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Roles</h2>
          <button
            onClick={handleAddRole}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition duration-300"
          >
            Add Role
          </button>
        </div>

        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-3 px-4 text-left text-gray-700">Role Name</th>
              <th className="py-3 px-4 text-left text-gray-700">Permissions</th>
              <th className="py-3 px-4 text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role, index) => (
              <tr
                key={role.id}
                className={`${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'
                } hover:bg-gray-200 transition duration-200`}
              >
                <td className="py-3 px-4 text-left text-gray-700">{role.name}</td>
                <td className="py-3 px-4 text-left text-gray-700">
                  {role.permissions.join(', ')}
                </td>
                <td className="py-3 px-4 text-left">
                  <button
                    onClick={() => handleEditRole(role)}
                    className="text-indigo-500 hover:underline"
                  >
                    Edit
                  </button>{' '}
                  |{' '}
                  <button
                    onClick={() => handleDeleteRole(role.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              {currentRole.id ? 'Edit Role' : 'Add Role'}
            </h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Role Name</label>
                <input
                  type="text"
                  value={currentRole.name}
                  onChange={(e) =>
                    setCurrentRole({ ...currentRole, name: e.target.value })
                  }
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Permissions</label>
                <div className="flex space-x-2 mt-2">
                  <button
                    type="button"
                    onClick={handleAddPermission}
                    className="px-3 py-1 bg-indigo-500 text-white rounded shadow"
                  >
                    Add Permission
                  </button>
                  <input
                    type="text"
                    value={newPermission}
                    onChange={(e) => setNewPermission(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    placeholder="Enter permission"
                  />
                </div>
                <div className="mt-2">
                  {currentRole.permissions.map((perm, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-300 px-3 py-1 rounded-full mr-2 mt-2 text-gray-800"
                    >
                      {perm}{' '}
                      <button
                        onClick={() => handleRemovePermission(perm)}
                        className="text-red-500 hover:underline ml-2"
                      >
                        x
                      </button>
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded-lg shadow-md hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveRole}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-indigo-600"
                >
                  Save Role
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoleTable;
