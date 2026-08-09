import { Link } from "react-router-dom";

export default function CourseDetailPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b sticky top-0 z-50">
                <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">
                    <h1 className="text-3xl font-bold text-[#0056D2] cursor-pointer">
                        Coursera
                    </h1>

                    <div className="flex items-center gap-6">
                        <Link
                        to="/Explore"
                        className="text-gray-700 hover:text-[#0056D2]">
                            Explore
                        </Link>

                        <button className="text-gray-700 hover:text-[#0056D2]">
                            My Learning
                        </button>

                        <button className="text-gray-700 hover:text-[#0056D2]">
                            Log In
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="bg-[#1F1F1F] text-white">
                <div className="max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-3 gap-10">
                    {/* Left */}
                    <div className="lg:col-span-2">
                        <p className="text-blue-400 text-sm font-medium mb-2">
                            Google Professional Certificate
                        </p>

                        <h1 className="text-5xl font-bold leading-tight">
                            Google Data Analytics Professional Certificate
                        </h1>

                        <p className="mt-6 text-gray-300 text-lg leading-8">
                            Prepare for an entry-level job as a data analyst.
                            Learn spreadsheets, SQL, Tableau, R programming, and
                            data visualization with hands-on projects.
                        </p>

                        <div className="flex flex-wrap items-center gap-6 mt-8 text-sm">
                            <span className="text-yellow-400 font-semibold">
                                ⭐ 4.8 (82,000 reviews)
                            </span>

                            <span>1.5M learners</span>

                            <span>Beginner</span>

                            <span>6 months</span>
                        </div>

                        <div className="mt-8 flex items-center gap-4">
                            <button className="bg-[#0056D2] hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold">
                                Enroll for Free
                            </button>

                            <button className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition">
                                Share
                            </button>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div>
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                                alt="Course"
                                className="w-full h-56 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Free Enrollment
                                </h3>

                                <p className="text-gray-500 mt-2">
                                    Start today and learn at your own pace.
                                </p>

                                <button className="w-full mt-6 bg-[#0056D2] text-white py-3 rounded-lg hover:bg-blue-700">
                                    Enroll Now
                                </button>

                                <ul className="mt-6 space-y-4 text-sm text-gray-700">
                                    <li>✔ Shareable certificate</li>
                                    <li>✔ Flexible schedule</li>
                                    <li>✔ 100% online</li>
                                    <li>✔ Beginner friendly</li>
                                    <li>✔ English subtitles</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Info */}
            <section className="max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-3 gap-10">
                {/* Left */}
                <div className="lg:col-span-2 space-y-12">
                    {/* About */}
                    <div className="bg-white rounded-xl shadow p-8">
                        <h2 className="text-3xl font-bold mb-6">
                            About this course
                        </h2>

                        <p className="text-gray-600 leading-8">
                            This Professional Certificate will prepare you for
                            an entry-level career in data analytics. You'll
                            learn how to clean, analyze, visualize, and present
                            data using industry-standard tools and complete
                            hands-on projects to build your portfolio.
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="bg-white rounded-xl shadow p-8">
                        <h2 className="text-3xl font-bold mb-6">
                            Skills you'll gain
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            {[
                                "SQL",
                                "Excel",
                                "Tableau",
                                "Data Analysis",
                                "R Programming",
                                "Data Cleaning",
                                "Visualization",
                                "Problem Solving",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Curriculum */}
                    <div className="bg-white rounded-xl shadow p-8">
                        <h2 className="text-3xl font-bold mb-6">
                            Course Content
                        </h2>

                        {[
                            "Introduction to Data Analytics",
                            "Prepare Data for Exploration",
                            "Process Data from Dirty to Clean",
                            "Analyze Data with SQL",
                            "Data Visualization with Tableau",
                            "Capstone Project",
                        ].map((lesson, index) => (
                            <div
                                key={index}
                                className="border-b last:border-none py-5 flex justify-between"
                            >
                                <span className="font-medium">
                                    Module {index + 1}. {lesson}
                                </span>

                                <span className="text-gray-500">2 Hours</span>
                            </div>
                        ))}
                    </div>

                    {/* Instructor */}
                    <div className="bg-white rounded-xl shadow p-8">
                        <h2 className="text-3xl font-bold mb-6">Instructor</h2>

                        <div className="flex items-center gap-5">
                            <img
                                src="https://i.pravatar.cc/120"
                                alt="Instructor"
                                className="w-24 h-24 rounded-full"
                            />

                            <div>
                                <h3 className="text-xl font-bold">
                                    Google Career Certificates
                                </h3>

                                <p className="text-gray-500 mt-2">
                                    Helping millions of learners build job-ready
                                    skills.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="space-y-6">
                    <div className="bg-white rounded-xl shadow p-6">
                        <h3 className="font-bold text-xl mb-5">
                            Course Details
                        </h3>

                        <div className="space-y-4 text-gray-600">
                            <div className="flex justify-between">
                                <span>Level</span>
                                <span>Beginner</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Duration</span>
                                <span>6 Months</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Language</span>
                                <span>English</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Certificate</span>
                                <span>Yes</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Assignments</span>
                                <span>20+</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-700 rounded-xl p-6 text-white">
                        <h3 className="text-2xl font-bold">Ready to start?</h3>

                        <p className="mt-3 text-blue-100">
                            Join over 1.5 million learners already enrolled.
                        </p>

                        <button className="mt-6 w-full bg-white text-blue-700 py-3 rounded-lg font-semibold hover:bg-gray-100">
                            Enroll for Free
                        </button>
                    </div>
                </aside>
            </section>
        </div>
    );
}
