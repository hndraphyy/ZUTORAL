import usePageTitle from "../../hooks/usePageTItle"

export default function LoginPage() {
    usePageTitle("Login")
    return (
        <div className="grid grid-cols-2">
            <div className="bg-purple h-screen bg-[url('/assets/images/background_Login.webp')] bg-no-repeat bg-auto bg-left ">

            </div>
            <div className="p-20 flex justify-center items-center">
                 <form method="#POST" className="w-[370px]">
                    <h1>Log In</h1>
                    <div className="flex flex-col items-center justify-center">
                        <input
                            type="email"
                            placeholder="Email"
                            className="border border-gray-300 rounded p-2 mb-4 w-full"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="border border-gray-300 rounded p-2 mb-4 w-full"
                        />
                        <button
                            type="submit"
                            className="bg-purple text-white rounded p-2 w-full hover:bg-purple transition duration-200"
                        >
                            Log In
                        </button>
                    </div>
                    <p className="text-center mt-4">
                        Don't have an account?{" "}
                        <a href="/register" className="text-blue-500 hover:underline">
                            Register
                        </a>
                    </p>
                </form>
            </div>
        </div>
    )
}