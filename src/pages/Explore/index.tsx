export default function ExplorePage() {
    const categories = [
        "Data Science",
        "Business",
        "Computer Science",
        "Information Technology",
        "Personal Development",
        "Health",
        "Language Learning",
        "Arts & Humanities",
    ];

    const courses = [
        {
            title: "Google Data Analytics",
            provider: "Google",
            level: "Beginner",
            rating: "4.8",
            learners: "1.2M learners",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        },
        {
            title: "Python for Everybody",
            provider: "University of Michigan",
            level: "Beginner",
            rating: "4.9",
            learners: "2.4M learners",
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        },
        {
            title: "UI/UX Design Fundamentals",
            provider: "Meta",
            level: "Intermediate",
            rating: "4.7",
            learners: "800K learners",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        },
        {
            title: "Machine Learning",
            provider: "Stanford University",
            level: "Intermediate",
            rating: "4.9",
            learners: "3M learners",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
                    <div className="flex items-center gap-8">
                        <h1 className="text-3xl font-bold text-blue-700">
                            Coursera
                        </h1>

                        <button className="border border-blue-700 text-blue-700 px-4 py-2 rounded-md hover:bg-blue-50">
                            Explore
                        </button>
                    </div>

                    <div className="flex-1 max-w-xl mx-8">
                        <input
                            type="text"
                            placeholder="What do you want to learn?"
                            className="w-full border rounded-full px-5 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="text-gray-700 hover:text-blue-700">
                            Online Degrees
                        </button>

                        <button className="text-gray-700 hover:text-blue-700">
                            Log In
                        </button>

                        <button className="bg-blue-700 text-white px-5 py-2 rounded-md hover:bg-blue-800">
                            Join for Free
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-5xl font-bold mb-5">
                        Explore Top Courses
                    </h2>

                    <p className="text-xl max-w-2xl text-blue-100">
                        Learn job-ready skills from the world's leading
                        universities and companies.
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="max-w-7xl mx-auto py-12 px-6">
                <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {categories.map((category) => (
                        <div
                            key={category}
                            className="bg-white rounded-xl border hover:border-blue-600 hover:shadow-lg transition cursor-pointer p-6 text-center"
                        >
                            <h3 className="font-semibold text-lg">
                                {category}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Courses */}
            <section className="max-w-7xl mx-auto pb-16 px-6">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">Popular Courses</h2>

                    <button className="text-blue-700 font-semibold hover:underline">
                        View all
                    </button>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {courses.map((course) => (
                        <div
                            key={course.title}
                            className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden cursor-pointer"
                        >
                            <img
                                src={course.image}
                                alt={course.title}
                                className="h-44 w-full object-cover"
                            />

                            <div className="p-5">
                                <p className="text-sm text-gray-500">
                                    {course.provider}
                                </p>

                                <h3 className="font-bold text-lg mt-2 line-clamp-2">
                                    {course.title}
                                </h3>

                                <p className="text-gray-500 text-sm mt-2">
                                    {course.level}
                                </p>

                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-yellow-500 font-semibold">
                                        ⭐ {course.rating}
                                    </span>

                                    <span className="text-gray-500 text-sm">
                                        {course.learners}
                                    </span>
                                </div>

                                <button className="w-full mt-5 bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition">
                                    View Course
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
