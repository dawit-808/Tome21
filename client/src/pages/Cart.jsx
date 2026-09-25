import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// ==========================================
// MOCK DATABASE DATA (Cart Items)
// ==========================================
const INITIAL_CART = [
  {
    id: 102,
    title: "Samsung Galaxy S23 Ultra - 256GB / 12GB RAM",
    price: 65000,
    currency: "ETB",
    image: "https://via.placeholder.com/150/f3f4f6/a1a1aa?text=S23+Ultra",
    quantity: 1,
    seller: "Tome21 Official",
  },
  {
    id: 104,
    title: "Men's Classic Leather Jacket - Size L",
    price: 4500,
    currency: "ETB",
    image: "https://via.placeholder.com/150/f3f4f6/a1a1aa?text=Leather+Jacket",
    quantity: 2,
    seller: "Tome21 Official",
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(INITIAL_CART);

  // Logic to handle quantity changes
  const updateQuantity = (id, change) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }),
    );
  };

  // Logic to remove an item entirely
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const deliveryFee = subtotal > 0 ? 500 : 0; // Flat delivery fee if cart is not empty
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans text-gray-800">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Shopping Cart ({cartItems.length}{" "}
          {cartItems.length === 1 ? "item" : "items"})
        </h1>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 bg-green-50 text-[#3e9d24] rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Your cart is empty!
            </h2>
            <p className="text-gray-500 mb-6">
              Browse our categories and discover our best deals.
            </p>
            <a
              href="/"
              className="bg-[#3e9d24] text-white font-bold py-3 px-8 rounded hover:bg-green-700 transition"
            >
              Start Shopping
            </a>
          </div>
        ) : (
          /* Cart with Items Layout */
          <div className="flex flex-col lg:flex-row gap-6">
            {/* ================= LEFT COLUMN: CART ITEMS ================= */}
            <div className="w-full lg:w-2/3 flex flex-col gap-4">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`p-5 flex flex-col sm:flex-row gap-6 ${index !== cartItems.length - 1 ? "border-b border-gray-100" : ""}`}
                  >
                    {/* Item Image */}
                    <div className="w-full sm:w-32 h-32 flex-shrink-0 bg-gray-50 rounded border border-gray-100 p-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 leading-snug mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">
                          Seller:{" "}
                          <span className="text-[#3e9d24]">{item.seller}</span>
                        </p>
                      </div>

                      {/* Price (Mobile only, hidden on desktop so it aligns nicely on the right) */}
                      <div className="sm:hidden text-lg font-bold text-[#3e9d24] mb-3">
                        {item.currency} {item.price.toLocaleString()}
                      </div>

                      {/* Actions: Remove & Quantity */}
                      <div className="flex items-center justify-between mt-auto pt-4 sm:pt-0">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex items-center gap-1 text-red-500 hover:text-red-700 text-sm font-medium transition"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                          Remove
                        </button>

                        <div className="flex items-center border border-gray-300 rounded">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-50 transition"
                          >
                            −
                          </button>
                          <span className="px-3 py-1 text-sm font-bold border-l border-r border-gray-300 min-w-[2.5rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-50 transition"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Price Column */}
                    <div className="hidden sm:flex flex-col items-end justify-start sm:w-32">
                      <div className="text-xl font-bold text-[#3e9d24]">
                        {item.currency} {item.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
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
                    <span>Items Total ({cartItems.length})</span>
                    <span className="font-medium text-gray-900">
                      ETB {subtotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span className="font-medium text-gray-900">
                      ETB {deliveryFee.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-end mb-6">
                  <span className="font-bold text-gray-900">Total</span>
                  <div className="text-right">
                    <span className="block text-2xl font-bold text-[#3e9d24]">
                      ETB {total.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500">VAT included</span>
                  </div>
                </div>

                <button className="w-full bg-[#3e9d24] text-white font-bold py-3 px-4 rounded hover:bg-green-700 transition flex items-center justify-center gap-2">
                  Proceed to Checkout
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
