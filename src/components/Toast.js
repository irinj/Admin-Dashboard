import React from 'react';

function Toast({ message, type }) {
  return (
    <div
      className={`fixed bottom-4 right-4 px-4 py-2 rounded shadow-lg ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      } text-white`}
    >
      {message}
    </div>
  );
}

export default Toast;
