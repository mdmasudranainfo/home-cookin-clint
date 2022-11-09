import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Context/UserContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(authContext);
  let location = useLocation();
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
