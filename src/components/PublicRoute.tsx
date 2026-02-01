import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

interface PublicRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

// Component to handle routes that should only be accessible to non-authenticated users
// (like login/signup pages)
export default function PublicRoute({
  children,
  redirectTo = "/dashboard",
}: PublicRouteProps) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  // If user is authenticated, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
}
