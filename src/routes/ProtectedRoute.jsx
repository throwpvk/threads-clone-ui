import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsAuthenticated,
  openLoginModal,
} from "@/features/auth/authSlice";

export default function ProtectedRoute() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(openLoginModal());
    }
  }, [isAuthenticated, dispatch]);

  if (!isAuthenticated) {
    // Redirect to home but keep the modal open (handled by useEffect)
    // We can pass state to preserve where they wanted to go if we want to redirect back after login
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
