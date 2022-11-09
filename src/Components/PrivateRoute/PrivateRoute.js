import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Context/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(authContext);
  const location = useLocation();
  if (loader) {
    return (
      <div className="flex justify-center my-20">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user?.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
