import { useNavigate } from "react-router-dom";
import { USERS } from "../config/auth";

const useAuth = () => {
  const navigate = useNavigate();

  const login = (username, password) => {
    const validUser = Object.values(USERS).find(
      (user) => user.username === username && user.password === password
    );

    if (validUser) {
      navigate(validUser.redirect);
      return validUser;
    } else {
      return null;
    }
  };

  const logout = () => {
    navigate("/login");
  };

  return { login, logout };
};

export default useAuth;
