import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import usePageTitle from "../../hooks/usePageTitle";
import useAuth from "../../hooks/useAuth";

const LoginPage = () => {
  usePageTitle("Login");
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setUsernameError("");
    setPasswordError("");
    setErrorMessage("");

    let isValid = true;

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

    const user = login(username, password);
    if (!user) {
      setErrorMessage("Username/Email atau Password salah.");
    }
  };

  return (
    <div className="grid md:grid-cols-2">
      <div className="hidden md:flex justify-center items-center bg-purple h-screen bg-[url('/assets/images/background_Login.webp')] bg-no-repeat bg-cover bg-center">
        <img
          src="/assets/svg/logo-brand.svg"
          alt="Logo Brand"
          className="md:w-20 2xl:w-24 h-auto"
        />
      </div>
      <div className="relative flex justify-center items-center flex-col gap-5 pb-15 bg-purple md:bg-white h-dvh bg-[url('/assets/images/background_Login.webp')] md:bg-none bg-no-repeat bg-cover">
        <img
          src="/assets/svg/logo-brand.svg"
          alt="Logo Brand"
          className="w-11 h-auto md:hidden"
        />
        <form
          onSubmit={handleLogin}
          className="bg-white md:bg-transparent w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12  p-6 md:p-0 flex flex-col gap-4 rounded-xl"
        >
          <h1 className="text-2xl mb-4 font-medium">Log In</h1>
          <div className="flex flex-col  gap-4 w-full">
            <div className="w-full">
              <input
                type="text"
                placeholder="Email or Username"
                className={`border-2 rounded text-gray-700 p-[7px] w-full lg:text-[18px] pl-3 transition duration-200 outline-0 
                                ${
                                  usernameError || errorMessage
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
                <p className="text-red-500 text-sm lg:text-md 2xl:text-lg mt-1">
                  {usernameError}
                </p>
              )}
            </div>

            <div className="w-full relative">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className={`border-2 rounded text-gray-700 p-[7px] w-full lg:text-[18px] pl-3 pr-10 transition duration-200 outline-0 
                                    ${
                                      passwordError || errorMessage
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
                <p className="text-red-500 text-sm lg:text-md 2xl:text-lg mt-1">
                  {passwordError}
                </p>
              )}
              {errorMessage && (
                <p className="text-red-500 text-sm lg:text-md 2xl:text-lg mt-1">
                  {errorMessage}
                </p>
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
};

export default LoginPage;
