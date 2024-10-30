// App.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const isLogIn = useSelector((state) => state.isLogIn);

  return isLogIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
