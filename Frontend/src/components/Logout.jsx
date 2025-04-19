import React from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
  const { authUser, setAuthUser } = useAuth(); // ✅ fix destructuring

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout successfully");
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    } catch (error) {
      toast.error("Error: " + error.message);
      setTimeout(() => {
        
      }, 2000);
    }
  };

  return (
    <div>
      <button
        className="btn btn-sm bg-red-500 text-white px-3 py-2 ml-2 rounded-md hover:bg-red-800 duration-300 cursor-pointer"
        onClick={handleLogout} // ✅ pass function, not string
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
