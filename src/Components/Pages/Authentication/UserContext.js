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

  // const handleLogout = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     console.log("Token before logout:", token);
  
  //     await axios.post("http://localhost:80/logout");
  //     localStorage.removeItem("token");
  //     setIsLoggedIn(false);
  //     console.log("Logout successful.");
  //     window.location.href = "/";
  //   } catch (error) {
  //     console.error("Error logging out:", error);
  //     alert("Logout failed. Please try again.");
  //   }
  // };
  
  
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <UserContext.Provider
      value={{ isLoggedIn, setIsLoggedIn,  handleLogout, }}
    >
      {children}
    </UserContext.Provider>
  );
};
