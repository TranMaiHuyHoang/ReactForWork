import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-white flex">
            {/* Left */}
            <div className="hidden lg:flex w-1/2 bg-[#F5F7FA] items-center justify-center p-10">
                <div className="max-w-md">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55e"
                        alt="Learning"
                        className="rounded-2xl shadow-xl"
                    />

                    <h2 className="text-4xl font-bold text-gray-900 mt-8">
                        Learn without limits
                    </h2>

                    <p className="text-gray-600 mt-4 leading-7">
                        Build skills with courses, certificates, and degrees
                        from world-class universities and companies.
                    </p>
                </div>
            </div>

            {/* Right */}
            <div className="flex-1 flex justify-center items-center px-6">
                <div className="w-full max-w-md">
                    {/* Logo */}
                    <h1 className="text-4xl font-bold text-[#0056D2] mb-10 text-center">
                        Coursera
                    </h1>

                    {/* Card */}
                    <div className="border rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Welcome back
                        </h2>

                        <p className="text-gray-500 mt-2 mb-8">
                            Log in to continue learning.
                        </p>

                        {/* Email */}
                        <div className="mb-5">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-3">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        <div className="flex justify-end mb-6">
                            <button className="text-sm text-[#0056D2] hover:underline">
                                Forgot password?
                            </button>
                        </div>

                        {/* Login */}
                        <button className="w-full bg-[#0056D2] hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
                            Log In
                        </button>

                        {/* Divider */}
                        <div className="flex items-center my-6">
                            <div className="flex-1 border-t"></div>
                            <span className="px-3 text-gray-400 text-sm">
                                or
                            </span>
                            <div className="flex-1 border-t"></div>
                        </div>

                        {/* Google */}
                        <button className="w-full border rounded-lg py-3 font-medium hover:bg-gray-50 transition flex justify-center items-center gap-3">
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                className="w-5 h-5"
                                alt="Google"
                            />
                            Continue with Google
                        </button>

                        {/* Facebook */}
                        <button className="w-full border rounded-lg py-3 font-medium hover:bg-gray-50 transition flex justify-center items-center gap-3 mt-4">
                            <svg
                                className="w-5 h-5 text-blue-600"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.19 2.23.19v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />
                            </svg>
                            Continue with Facebook
                        </button>

                        <p className="text-center text-gray-600 mt-8">
                            New to Coursera?{" "}
                            <Link
                                to="/Register"
                                className="text-[#0056D2] font-semibold hover:underline"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
