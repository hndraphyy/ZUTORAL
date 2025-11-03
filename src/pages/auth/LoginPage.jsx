import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import usePageTitle from "../../hooks/usePageTItle";

export default function LoginPage() {
  usePageTitle("Login");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setUsernameError("");
    setPasswordError("");

    let isValid = true;
    const validUsername = "admin@admin.com";
    const validPassword = "secret";

    if (username.trim() === "") {
      setUsernameError("Username/Email wajib diisi.");
      isValid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Password wajib diisi.");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    if (username !== validUsername) {
      setUsernameError("Username/Email tidak ditemukan.");
      isValid = false;
    }

    if (password !== validPassword) {
      setPasswordError("Password salah.");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    navigate("/manager/dashboard", { replace: true });
  };

  return (
    <div className="grid grid-cols-2">
      <div className="bg-purple h-screen bg-[url('/assets/images/background_Login.webp')] bg-no-repeat bg-auto bg-left "></div>
      <div className="flex justify-center items-center">
        <form onSubmit={handleLogin} className="w-[450px] flex flex-col gap-4">
          <h1 className="text-2xl mb-4 font-medium">Log In</h1>
          <div className="flex flex-col  gap-4 w-full">
            <div className="w-full">
              <input
                type="text"
                placeholder="Email or Username"
                className={`border-2 rounded text-gray-700 p-[7px] w-full text-[18px] pl-3 transition duration-200 outline-0 
                                ${
                                  usernameError
                                    ? "border-red-500 focus:border-red-500"
                                    : "border-gray-300 focus:border-purple"
                                }`}
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setUsernameError("");
                }}
              />
              {usernameError && (
                <p className="text-red-500 textxs-sm mt-1">{usernameError}</p>
              )}
            </div>

            <div className="w-full relative">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className={`border-2 rounded text-gray-700 p-[7px] w-full text-[18px] pl-3 pr-10 transition duration-200 outline-0 
                                    ${
                                      passwordError
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-gray-300 focus:border-purple"
                                    }`}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                  }}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3.5 flex items-center text-xl text-gray-500 hover:text-gray-700 transition"
                >
                  {showPassword ? <FiEye /> : <FiEyeOff />}
                </button>
              </div>
              {passwordError && (
                <p className="text-red-500 textxs-sm mt-1">{passwordError}</p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                className="w-[18px] h-[18px] rounded-[5px] cursor-pointer outline-0"
              />
              <label
                htmlFor="rememberMe"
                className="text-[18px] text-gray-700 cursor-pointer"
              >
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="bg-purple text-white text-lg rounded p-2 w-full hover:bg-purple-hover transition duration-200"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
