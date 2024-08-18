import React from "react";
import useAuth from "./useAuth";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const { auth } = useAuth();
  console.log(auth);

  return auth?.user ? <Outlet /> : <Navigate to="/" />;
};

export default RequireAuth;
