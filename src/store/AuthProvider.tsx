"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get("auth");
    setAuthenticated(!!token);
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
