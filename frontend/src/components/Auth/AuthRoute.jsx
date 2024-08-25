//AuthRoute to prevent users access vacent pages without authorization through routes

import React from "react";
import { getUserFromStorage } from "../../utils/getUserFromStorage";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const token = getUserFromStorage();

  if (token) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AuthRoute;
