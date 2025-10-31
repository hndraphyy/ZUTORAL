import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(
    localStorage.getItem("userRole") || "Guest"
  );

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const role = localStorage.getItem("userRole");

    if (loggedIn && role) {
      setIsAuthenticated(true);
      setUserRole(role);
    } else {
      setIsAuthenticated(false);
      setUserRole("Guest");
    }
  }, []);

  const login = useCallback(
    (role) => {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", role);
      setIsAuthenticated(true);
      setUserRole(role);
      const path =
        role === "Manager" ? "/manager/dashboard" : "/sales-agent/dashboard";
      navigate(path);
    },
    [navigate]
  );

  const logout = useCallback(() => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    setIsAuthenticated(false);
    setUserRole("Guest");
    navigate("/login");
  }, [navigate]);

  return {
    isAuthenticated,
    userRole,
    login,
    logout,
  };
}
