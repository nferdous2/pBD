import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    // window.location.href = "/";

  };
  return (
    <UserContext.Provider
      value={{ isLoggedIn, setIsLoggedIn,  handleLogout, }}
    >
      {children}
    </UserContext.Provider>
  );
};
