import {} from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#3e9d24] shadow-md text-white font-sans">
      {/* Main Top Nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link to="/">
          <div className="text-3xl font-extrabold tracking-tight cursor-pointer">
            Tome<span className="text-yellow-300">21</span>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-2xl relative shadow-sm rounded-lg overflow-hidden bg-white">
          <input
            type="text"
            placeholder="I am looking for..."
            className="w-full pl-4 pr-12 py-3 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="absolute right-0 top-0 bottom-0 px-4 bg-white text-[#3e9d24] hover:bg-gray-100 transition-colors flex items-center justify-center border-l border-gray-200">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-6">
          <div className="cursor-pointer hidden lg:flex items-center space-x-1  hover:text-yellow-200 transition">
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="font-semibold text-sm">Sign In</span>
          </div>

          {/* Cart Button */}
          <Link to="/cart">
            <button className="cursor-pointer bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-bold shadow-sm hover:bg-yellow-300 hover:shadow transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              CART
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile only Search */}
      <div className="md:hidden px-4 pb-3">
        <input
          type="text"
          placeholder="I am looking for..."
          className="w-full px-4 py-2 rounded-lg text-gray-800 bg-white shadow-inner focus:outline-none"
        />
      </div>
    </header>
  );
}
