import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeCookie } from 'react-use-cookie';

const Logout = () => {

    const navigate=useNavigate();

    const handleLogout = () => {
        removeCookie('my_token');
        navigate('/');
    }
  return (
    <button onClick={handleLogout} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-emerald-500 group-hover:from-purple-600 group-hover:to-emerald-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-emerald-800">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
       Logout
      </span>
    </button>
  );
}

export default Logout;
