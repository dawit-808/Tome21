import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// ==========================================
// MOCK DATABASE DATA (Order Summary)
// ==========================================
const MOCK_SUMMARY = {
  itemsCount: 3,
  subtotal: 74000,
  deliveryFee: 500,
  total: 74500,
};

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("telebirr");

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans text-gray-800">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Secure Checkout
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* ================= LEFT COLUMN: FORMS ================= */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            {/* 1. Shipping Details Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#3e9d24] text-white flex items-center justify-center text-sm">
                  1
                </span>
                Shipping Details
              </h2>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#3e9d24] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+251 9..."
                    className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#3e9d24] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#3e9d24] focus:border-transparent transition bg-white">
                    <option>Addis Ababa</option>
                    <option>Adama</option>
                    <option>Hawassa</option>
                    <option>Bahir Dar</option>
                  </select>
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Specific Location / Sub-city
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Bole, around Edna Mall"
                    className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#3e9d24] focus:border-transparent transition"
                  />
                </div>
              </form>
            </div>

            {/* 2. Payment Method Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#3e9d24] text-white flex items-center justify-center text-sm">
                  2
                </span>
                Payment Method
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Telebirr Option */}
                <label
                  className={`border-2 rounded-lg p-4 cursor-pointer flex flex-col items-center justify-center text-center transition-all ${
                    paymentMethod === "telebirr"
                      ? "border-[#3e9d24] bg-green-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="telebirr"
                    className="sr-only"
                    onChange={() => setPaymentMethod("telebirr")}
                  />
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-2">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-900">Telebirr</span>
                </label>

                {/* CBE Birr Option */}
                <label
                  className={`border-2 rounded-lg p-4 cursor-pointer flex flex-col items-center justify-center text-center transition-all ${
                    paymentMethod === "cbe"
                      ? "border-[#3e9d24] bg-green-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cbe"
                    className="sr-only"
                    onChange={() => setPaymentMethod("cbe")}
                  />
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-2">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-900">Bank Transfer</span>
                </label>

                {/* Cash on Delivery Option */}
                <label
                  className={`border-2 rounded-lg p-4 cursor-pointer flex flex-col items-center justify-center text-center transition-all ${
                    paymentMethod === "cod"
                      ? "border-[#3e9d24] bg-green-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    className="sr-only"
                    onChange={() => setPaymentMethod("cod")}
                  />
                  <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-2">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-900">
                    Cash on Delivery
                  </span>
                </label>
              </div>

              {/* Dynamic Payment Instructions based on selection */}
              <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-600 border border-gray-100">
                {paymentMethod === "telebirr" &&
                  "You will be redirected to the Telebirr app to authorize the payment after placing your order."}
                {paymentMethod === "cbe" &&
                  "Use account number 1000XXXXXXXXX (Tome21). Your order will be processed once we confirm the deposit."}
                {paymentMethod === "cod" &&
                  "Have your exact amount ready. Our delivery agent will contact you before arriving."}
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: ORDER SUMMARY ================= */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                Order Summary
              </h2>

              <div className="space-y-3 mb-4 pb-4 border-b border-gray-100">
                <div className="flex justify-between text-gray-600">
                  <span>Items ({MOCK_SUMMARY.itemsCount})</span>
                  <span className="font-medium text-gray-900">
                    ETB {MOCK_SUMMARY.subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span className="font-medium text-gray-900">
                    ETB {MOCK_SUMMARY.deliveryFee.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-6">
                <span className="font-bold text-gray-900">Total</span>
                <div className="text-right">
                  <span className="block text-2xl font-bold text-[#3e9d24]">
                    ETB {MOCK_SUMMARY.total.toLocaleString()}
                  </span>
                </div>
              </div>

              <button className="w-full bg-[#3e9d24] text-white font-bold py-4 px-4 rounded hover:bg-green-700 transition flex items-center justify-center gap-2 text-lg shadow-sm">
                Place Order
              </button>

              <p className="mt-4 text-xs text-gray-400 text-center">
                By placing your order, you agree to our Terms of Service and
                Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
