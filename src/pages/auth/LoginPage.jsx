import  React ,{ useState } from "react"
import usePageTitle from "../../hooks/usePageTItle"
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginPage() {
    usePageTitle("Login")

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="grid grid-cols-2">
            <div className="bg-purple h-screen bg-[url('/assets/images/background_Login.webp')] bg-no-repeat bg-auto bg-left ">
            </div>
            <div className="flex justify-center items-center">
                 <form method="#POST" className="w-[400px] flex flex-col gap-4">
                    <h1 className="text-2xl mb-4 font-medium">Log In</h1>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <input
                            type="email"
                            placeholder="Email or Username"
                            className="border-2 border-gray-300 rounded text-gray-700 p-[7px] w-full text-[18px] pl-3 transition duration-200 focus:border-purple outline-0"
                        />
                        <div className="w-full relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="border-2 border-gray-300 text-gray-700 rounded p-[7px] w-full text-[18px] pl-3 transition duration-200 focus:border-purple outline-0"
                            />
                            <button 
                                type="button" onClick={togglePasswordVisibility} 
                                className="absolute inset-y-0 top-0 right-3.5 flex items-center text-xl text-gray-500 hover:text-gray-700 transition">
                                {showPassword ? <FiEye /> : <FiEyeOff />}
                            </button>
                        </div>
                        <button type="submit" className="bg-purple text-white text-lg rounded p-2 w-full hover:bg-purple-hover transition duration-200">Log In</button>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="rememberMe" id="rememberMe" className="w-[18px] h-[18px] rounded-[5px] cursor-pointer outline-0" />
                        <label htmlFor="rememberMe" className="text-[18px] text-gray-700 cursor-pointer">Remember me</label>
                    </div>
                </form>
            </div>
        </div>
    )
}