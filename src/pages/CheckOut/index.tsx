export default function CheckoutPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-white border-b">
                <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">
                    <h1 className="text-3xl font-bold text-[#0056D2]">
                        Coursera
                    </h1>

                    <p className="text-gray-600 font-medium">Secure Checkout</p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto py-10 px-6 grid lg:grid-cols-3 gap-8">
                {/* LEFT */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Contact */}
                    <div className="bg-white rounded-xl shadow p-8">
                        <h2 className="text-2xl font-bold mb-6">
                            Contact Information
                        </h2>

                        <div className="space-y-5">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border rounded-lg p-3"
                            />

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full border rounded-lg p-3"
                            />
                        </div>
                    </div>

                    {/* Payment */}
                    <div className="bg-white rounded-xl shadow p-8">
                        <h2 className="text-2xl font-bold mb-6">
                            Payment Method
                        </h2>

                        <div className="space-y-5">
                            <input
                                placeholder="Card Number"
                                className="w-full border rounded-lg p-3"
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    placeholder="MM / YY"
                                    className="border rounded-lg p-3"
                                />

                                <input
                                    placeholder="CVV"
                                    className="border rounded-lg p-3"
                                />
                            </div>

                            <input
                                placeholder="Name on Card"
                                className="w-full border rounded-lg p-3"
                            />
                        </div>
                    </div>

                    {/* Billing */}
                    <div className="bg-white rounded-xl shadow p-8">
                        <h2 className="text-2xl font-bold mb-6">
                            Billing Address
                        </h2>

                        <div className="space-y-5">
                            <input
                                placeholder="Country"
                                className="w-full border rounded-lg p-3"
                            />

                            <input
                                placeholder="City"
                                className="w-full border rounded-lg p-3"
                            />

                            <input
                                placeholder="Address"
                                className="w-full border rounded-lg p-3"
                            />
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div>
                    <div className="bg-white rounded-xl shadow sticky top-24">
                        <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                            className="rounded-t-xl h-48 w-full object-cover"
                        />

                        <div className="p-6">
                            <h2 className="font-bold text-xl">
                                Google Data Analytics
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Google Professional Certificate
                            </p>

                            <hr className="my-6" />

                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span>Course Price</span>
                                    <span>$49.00</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Discount</span>
                                    <span className="text-green-600">
                                        -$10.00
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Tax</span>
                                    <span>$2.00</span>
                                </div>

                                <hr />

                                <div className="flex justify-between text-xl font-bold">
                                    <span>Total</span>
                                    <span>$41.00</span>
                                </div>
                            </div>

                            <button className="w-full mt-8 bg-[#0056D2] text-white py-3 rounded-lg hover:bg-blue-700">
                                Complete Purchase
                            </button>

                            <p className="text-center text-sm text-gray-500 mt-4">
                                🔒 Secure SSL Payment
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
