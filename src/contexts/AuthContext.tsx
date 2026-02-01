import type { IUser } from "@/types/data";
import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  user: IUser | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (
    email: string,
    password: string,
    rememberMe?: boolean,
  ) => Promise<
    { success: boolean; user: IUser } | { success: boolean; error: string }
  >;
  signup: (userData: {
    name: string;
    email: string;
  }) => Promise<
    | { success: boolean; user: { name: string; email: string } }
    | { success: boolean; error: string }
  >;
  logout: () => void;
  updateUser: (userData: IUser) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Check for existing session on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (token) {
        // Validate token with your backend
        // const response = await fetch('/api/auth/validate', {
        //   headers: { 'Authorization': `Bearer ${token}` }
        // });
        // const data = await response.json();

        // For demo purposes, we'll just parse a stored user
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          const userData = JSON.parse(storedUser);
          setUser(userData);
          setIsAuthenticated(true);
        }
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string, rememberMe = false) => {
    try {
      // Replace with your actual API call
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password })
      // });
      // const data = await response.json();

      // Demo implementation
      const demoUser = {
        id: "1",
        name: "Demo User",
        email: email,
        avatar: null,
      };

      const demoToken = "demo_token_" + Date.now();

      // Store auth data
      localStorage.setItem("authToken", demoToken);
      localStorage.setItem("user", JSON.stringify(demoUser));

      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      }

      setUser(demoUser);
      setIsAuthenticated(true);

      return { success: true, user: demoUser };
    } catch (error: any) {
      console.error("Login failed:", error);
      return { success: false, error: error.message };
    }
  };

  const signup = async (userData: { name: string; email: string }) => {
    try {
      // Replace with your actual API call
      // const response = await fetch('/api/auth/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(userData)
      // });
      // const data = await response.json();

      // Demo implementation
      const newUser = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        avatar: null,
      };

      const token = "demo_token_" + Date.now();

      // Store auth data
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(newUser));

      setUser(newUser);
      setIsAuthenticated(true);

      return { success: true, user: newUser };
    } catch (error: any) {
      console.error("Signup failed:", error);
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    // Clear all auth data
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    localStorage.removeItem("rememberMe");

    setUser(null);
    setIsAuthenticated(false);
  };

  const updateUser = (userData: IUser) => {
    setUser((prev) => ({ ...prev, ...userData }));
    localStorage.setItem("user", JSON.stringify({ ...user, ...userData }));
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    signup,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
