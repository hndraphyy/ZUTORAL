import { useNavigate } from "react-router-dom";
import { USERS } from "../config/auth";

const useAuth = () => {
  const navigate = useNavigate();

  const login = (identifier, password) => {
    const validUser = Object.values(USERS).find(
      (user) =>
        (user.username === identifier || user.email === identifier) &&
        user.password === password
    );

    if (validUser) {
      localStorage.setItem("currentUser", JSON.stringify(validUser));
      navigate(validUser.redirect);
      return validUser;
    }
    return null;
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  const getCurrentUser = () => {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
  };

  return { login, logout, getCurrentUser };
};

export default useAuth;
