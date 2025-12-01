import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

/**
 * @param {string[]} allowedRoles
 */

const ProtectedRoute = ({ allowedRoles = [] }) => {
  const { getCurrentUser } = useAuth();
  const user = getCurrentUser();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    if (user.role === "manager") {
      return <Navigate to="/manager/dashboard" replace />;
    } else if (user.role === "sales") {
      return <Navigate to="/sales-agent/dashboard" replace />;
    }
    return <Navigate to="/login" replace />;  
  }

  return <Outlet />;
};

export default ProtectedRoute;
