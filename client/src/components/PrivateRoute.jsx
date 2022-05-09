import React from "react";
import { useSelector } from "react-redux";
import LoadingTourRedirect from "./LoadingTourRedirect";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  return user ? children : <LoadingTourRedirect />;
};

export default PrivateRoute;
