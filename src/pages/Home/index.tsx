import { Link } from "react-router-dom";

const HomePages = () => {
    const categories = [
        "Data Science",
        "Programming",
        "Business",
        "Design",
        "Marketing",
        "AI",
    ];

    const courses = [
        {
            _id: "course1",
            title: "React for Beginners",
            instructor: "John Smith",
            image: "https://picsum.photos/400/250?1",
        },
        {
            _id: "course2",
            title: "UI/UX Design",
            instructor: "Sarah Lee",
            image: "https://picsum.photos/400/250?2",
        },
        {
            _id: "course3",
            title: "Python Bootcamp",
            instructor: "David Kim",
            image: "https://picsum.photos/400/250?3",
        },
        {
            _id: "course4",
            title: "Machine Learning",
            instructor: "Michael Chen",
            image: "https://picsum.photos/400/250?4",
        },
    ];

    const teachers = [
        {
            name: "Andrew Wilson",
            job: "Google",
            avatar: "https://i.pravatar.cc/150?img=10",
        },
        {
            name: "Jessica Brown",
            job: "Meta",
            avatar: "https://i.pravatar.cc/150?img=11",
        },
        {
            name: "Daniel Park",
            job: "Microsoft",
            avatar: "https://i.pravatar.cc/150?img=12",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <header className="border-b bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <h1 className="text-3xl font-bold text-blue-700">
                        Coursera
                    </h1>

                    <nav className="hidden gap-8 font-medium md:flex">
                        <Link to="/Explore">Explore</Link>
                        <a href="#">Online Degrees</a>
                        <a href="#">Certificates</a>
                        <a href="#">For Business</a>
                    </nav>

                    <div className="flex gap-3">
                        <Link
                            to="/login"
                            className="rounded-lg border px-5 py-2"
                        >
                            Log In
                        </Link>

                        <Link
                            to="/Register"
                            className="rounded-lg bg-blue-600 px-5 py-2 text-white"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white">
                <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">
                    <h2 className="max-w-3xl text-5xl font-bold leading-tight">
                        Learn Without Limits
                    </h2>

                    <p className="mt-6 max-w-2xl text-lg text-blue-100">
                        Build skills with courses, certificates, and degrees
                        from world-class universities and companies.
                    </p>

                    <div className="mt-10 flex w-full max-w-xl rounded-xl bg-white p-2 shadow-lg">
                        <input
                            placeholder="What do you want to learn?"
                            className="flex-1 rounded-lg px-4 py-3 outline-none text-black"
                        />

                        <button className="rounded-lg bg-blue-600 px-6 text-white">
                            Search
                        </button>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="mx-auto max-w-7xl px-6 py-16">
                <h3 className="mb-8 text-3xl font-bold">Popular Categories</h3>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    {categories.map((item) => (
                        <div
                            key={item}
                            className="cursor-pointer rounded-xl bg-white p-6 text-center shadow transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <h4 className="font-semibold">{item}</h4>
                        </div>
                    ))}
                </div>
            </section>

            {/* Courses */}
            <section className="mx-auto max-w-7xl px-6 pb-16">
                <div className="mb-8 flex items-center justify-between">
                    <h3 className="text-3xl font-bold">Featured Courses</h3>

                    <button className="font-semibold text-blue-600">
                        View All
                    </button>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {courses.map((course) => (
                        <Link
                        to={"/course/${course._id}"}
                            key={course.title}
                            className="overflow-hidden rounded-xl bg-white shadow transition hover:shadow-xl"
                        >
                            <img
                                src={course.image}
                                className="h-48 w-full object-cover"
                            />

                            <div className="space-y-2 p-5">
                                <h4 className="text-lg font-bold">
                                    {course.title}
                                </h4>

                                <p className="text-gray-500">
                                    {course.instructor}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="font-semibold text-blue-600">
                                        Free
                                    </span>

                                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
                                        Enroll
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Teachers */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-6">
                    <h3 className="mb-10 text-3xl font-bold">
                        Top Instructors
                    </h3>

                    <div className="grid gap-8 md:grid-cols-3">
                        {teachers.map((teacher) => (
                            <div
                                key={teacher.name}
                                className="rounded-xl border p-8 text-center"
                            >
                                <img
                                    src={teacher.avatar}
                                    className="mx-auto h-24 w-24 rounded-full"
                                />

                                <h4 className="mt-4 text-xl font-bold">
                                    {teacher.name}
                                </h4>

                                <p className="text-gray-500">{teacher.job}</p>

                                <button className="mt-6 rounded-lg border px-5 py-2">
                                    View Profile
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="mx-auto max-w-7xl px-6 py-20">
                <h3 className="mb-12 text-center text-3xl font-bold">
                    Why Learn With Us?
                </h3>

                <div className="grid gap-8 md:grid-cols-3">
                    <div className="rounded-xl bg-white p-8 shadow">
                        <h4 className="mb-3 text-xl font-bold">
                            Flexible Learning
                        </h4>

                        <p className="text-gray-600">
                            Learn anytime and anywhere at your own pace.
                        </p>
                    </div>

                    <div className="rounded-xl bg-white p-8 shadow">
                        <h4 className="mb-3 text-xl font-bold">
                            Expert Instructors
                        </h4>

                        <p className="text-gray-600">
                            Courses from universities and top companies.
                        </p>
                    </div>

                    <div className="rounded-xl bg-white p-8 shadow">
                        <h4 className="mb-3 text-xl font-bold">Certificates</h4>

                        <p className="text-gray-600">
                            Earn certificates to boost your career.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white">
                <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-10 md:flex-row">
                    <div>
                        <h3 className="text-2xl font-bold">Coursera</h3>

                        <p className="mt-2 text-gray-400">
                            Learn from the best.
                        </p>
                    </div>

                    <div className="space-y-2 text-gray-400">
                        <p>About</p>
                        <p>Careers</p>
                        <p>Contact</p>
                        <p>Privacy</p>
                    </div>

                    <div className="space-y-2 text-gray-400">
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>LinkedIn</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePages;
