import usePageTitle from "../../hooks/usePageTItle"

export default function LoginPage() {
    usePageTitle("Login")
    return (
        <div className="grid grid-cols-2">
            <div className="bg-purple h-screen bg-[url('/assets/images/background_Login.webp')] bg-no-repeat bg-auto bg-left ">
            </div>
            <div className="flex justify-center items-center">
                 <form method="#POST" className="w-[400px] flex flex-col gap-4">
                    <h1 className="text-2xl mb-4">Log In</h1>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="border border-gray-300 rounded p-[7px] w-full text-[18px] pl-3"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="border border-gray-300 rounded p-[7px] w-full text-[18px] pl-3"
                        />
                        <button type="submit" className="bg-purple text-white text-lg rounded p-2 w-full hover:bg-purple-hover transition duration-200">Log In</button>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="rememberMe" id="rememberMe" className="w-[18px] h-[18px] rounded-[3px] cursor-pointer" />
                        <label htmlFor="rememberMe" className="text-[18px] text-gray-700 cursor-pointer">Remember me</label>
                    </div>
                </form>
            </div>
        </div>
    )
}