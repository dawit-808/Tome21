import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// ==========================================
// MOCK DATABASE DATA
// ==========================================
const MOCK_CATEGORIES = [
  "All",
  "Vehicles",
  "Property",
  "Phones",
  "Electronics",
  "Fashion",
  "Beauty",
];

const MOCK_PRODUCTS = [
  {
    id: 101,
    title: "Toyota Vitz 2018 Excellent Condition",
    price: 1200000,
    category: "Vehicles",
    location: "Bole",
    image: "img1",
  },
  {
    id: 102,
    title: "Samsung Galaxy S23 Ultra - 256GB",
    price: 65000,
    category: "Phones",
    location: "Piassa",
    image: "img2",
  },
  {
    id: 103,
    title: "Modern L-Shape Sofa with Cushions",
    price: 45000,
    category: "Home",
    location: "Megenagna",
    image: "img3",
  },
  {
    id: 104,
    title: "Men's Classic Leather Jacket",
    price: 4500,
    category: "Fashion",
    location: "Kazanchis",
    image: "img4",
  },
  {
    id: 105,
    title: "Apple MacBook Pro M2 16GB RAM",
    price: 125000,
    category: "Electronics",
    location: "Bole",
    image: "img5",
  },
  {
    id: 106,
    title: "Nike Air Force 1 Sneakers",
    price: 6000,
    category: "Fashion",
    location: "Megenagna",
    image: "img6",
  },
];

export default function Products() {
  // State for filters (Ready for your backend API integration)
  const [activeCategory, setActiveCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Main Layout: Sidebar + Product Grid */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-8 flex flex-col md:flex-row gap-6">
        {/* ================= SIDEBAR (FILTERS) ================= */}
        <aside className="w-full md:w-64 flex-shrink-0 space-y-6">
          {/* Categories Filter */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4 uppercase tracking-wider text-sm">
              Categories
            </h3>
            <ul className="space-y-2">
              {MOCK_CATEGORIES.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left text-sm py-1.5 px-2 rounded transition-colors ${
                      activeCategory === cat
                        ? "bg-[#3e9d24] text-white font-medium"
                        : "text-gray-600 hover:bg-green-50 hover:text-[#3e9d24]"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Filter */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4 uppercase tracking-wider text-sm">
              Price (ETB)
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full border border-gray-200 rounded px-2 py-2 text-sm focus:outline-none focus:border-[#3e9d24] focus:ring-1 focus:ring-[#3e9d24]"
              />
              <span className="text-gray-400">-</span>
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full border border-gray-200 rounded px-2 py-2 text-sm focus:outline-none focus:border-[#3e9d24] focus:ring-1 focus:ring-[#3e9d24]"
              />
            </div>
            <button className="w-full bg-[#3e9d24] text-white text-sm font-bold py-2 rounded hover:bg-green-700 transition">
              Apply Filter
            </button>
          </div>

          {/* Condition / Other Filters */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4 uppercase tracking-wider text-sm">
              Condition
            </h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-[#3e9d24] w-4 h-4 cursor-pointer"
                />
                <span className="text-sm text-gray-600">Brand New</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-[#3e9d24] w-4 h-4 cursor-pointer"
                />
                <span className="text-sm text-gray-600">Used - Like New</span>
              </label>
            </div>
          </div>
        </aside>

        {/* ================= MAIN CONTENT (PRODUCTS) ================= */}
        <section className="flex-1 flex flex-col">
          {/* Top Bar: Results Count & Sorting */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h1 className="text-gray-800 font-medium">
              Showing <span className="font-bold">{MOCK_PRODUCTS.length}</span>{" "}
              results for{" "}
              <span className="text-[#3e9d24] font-bold">
                "{activeCategory}"
              </span>
            </h1>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-200 rounded px-3 py-1.5 focus:outline-none focus:border-[#3e9d24] cursor-pointer"
              >
                <option value="newest">Newest Arrivals</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer relative"
              >
                {/* Image Container */}
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <div className="w-full h-full bg-gray-300 group-hover:scale-105 transition-transform duration-500"></div>
                </div>

                {/* Card Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <p className="text-xs text-gray-400 mb-1">
                    {product.category}
                  </p>
                  <h4 className="text-gray-800 font-medium line-clamp-2 leading-snug group-hover:text-[#3e9d24] transition-colors">
                    {product.title}
                  </h4>
                  <div className="mt-auto pt-3">
                    <p className="text-[#3e9d24] text-xl font-bold">
                      ETB {product.price.toLocaleString()}
                    </p>
                    <div className="flex items-center text-xs text-gray-500 mt-2 gap-1">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {product.location}
                    </div>
                  </div>
                </div>

                {/* Quick Add to Cart Overlay on Hover */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-yellow-400 text-gray-900 p-2 rounded-full shadow hover:bg-yellow-300">
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
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-10 flex justify-center items-center gap-2">
            <button
              className="px-4 py-2 border border-gray-200 rounded bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50"
              disabled
            >
              Previous
            </button>
            <button className="w-10 h-10 rounded bg-[#3e9d24] text-white font-bold shadow">
              1
            </button>
            <button className="w-10 h-10 rounded bg-white border border-gray-200 text-gray-600 hover:bg-gray-50">
              2
            </button>
            <button className="w-10 h-10 rounded bg-white border border-gray-200 text-gray-600 hover:bg-gray-50">
              3
            </button>
            <button className="px-4 py-2 border border-gray-200 rounded bg-white text-gray-600 hover:bg-gray-50">
              Next
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
