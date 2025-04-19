import React, { createContext, useContext, useState } from 'react';

// 1. Create the context
export const AuthContext = createContext();

// 2. Create the custom hook
export const useAuth = () => {
  return useContext(AuthContext); // returns context object
};

// 3. Create the provider
export default function AuthProvider({ children }) {
    const initialAuthUser = localStorage.getItem("Users");

    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser):undefined
  ); // you can load user from localStorage or API here

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

