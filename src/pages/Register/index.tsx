export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-2">
                {/* Left */}
                <div className="hidden lg:flex flex-col justify-center bg-[#0056D2] text-white p-12">
                    <h1 className="text-5xl font-bold mb-6">Coursera</h1>

                    <h2 className="text-3xl font-bold leading-tight">
                        Start learning from the world's best instructors.
                    </h2>

                    <p className="mt-6 text-blue-100 leading-7">
                        Join millions of learners and gain new skills with
                        courses, Professional Certificates, and degrees from top
                        universities and companies.
                    </p>

                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55e"
                        alt="Students"
                        className="rounded-xl mt-10 shadow-lg"
                    />
                </div>

                {/* Right */}
                <div className="p-8 md:p-12">
                    <div className="max-w-md mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Join for Free
                        </h2>

                        <p className="text-gray-500 mt-2 mb-8">
                            Create your Coursera account and start learning
                            today.
                        </p>

                        {/* First Name */}
                        <div className="mb-5">
                            <label className="block text-sm font-medium mb-2">
                                First Name
                            </label>

                            <input
                                type="text"
                                placeholder="John"
                                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#0056D2] focus:outline-none"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="mb-5">
                            <label className="block text-sm font-medium mb-2">
                                Last Name
                            </label>

                            <input
                                type="text"
                                placeholder="Doe"
                                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#0056D2] focus:outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-5">
                            <label className="block text-sm font-medium mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="example@email.com"
                                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#0056D2] focus:outline-none"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-5">
                            <label className="block text-sm font-medium mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Create a password"
                                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#0056D2] focus:outline-none"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                placeholder="Confirm your password"
                                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#0056D2] focus:outline-none"
                            />
                        </div>

                        {/* Checkbox */}
                        <label className="flex items-start gap-3 text-sm text-gray-600 mb-6">
                            <input
                                type="checkbox"
                                className="mt-1 accent-[#0056D2]"
                            />

                            <span>
                                I agree to the{" "}
                                <a
                                    href="#"
                                    className="text-[#0056D2] hover:underline"
                                >
                                    Terms of Use
                                </a>{" "}
                                and{" "}
                                <a
                                    href="#"
                                    className="text-[#0056D2] hover:underline"
                                >
                                    Privacy Policy
                                </a>
                                .
                            </span>
                        </label>

                        {/* Register */}
                        <button className="w-full bg-[#0056D2] hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
                            Join for Free
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
                        <button className="w-full border rounded-lg py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="Google"
                                className="w-5 h-5"
                            />
                            Continue with Google
                        </button>

                        {/* Facebook */}
                        <button className="w-full border rounded-lg py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition mt-4">
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
                            Already have an account?{" "}
                            <button className="text-[#0056D2] font-semibold hover:underline">
                                Log In
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
