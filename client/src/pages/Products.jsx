import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const apiEndpoint = import.meta.env.VITE_API_URL;

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const activeCategoryName =
    categories.find((cat) => String(cat.id) === activeCategory)?.name ||
    "All Categories";

  useEffect(() => {
    const getData = async () => {
      try {
        const categoriesResponse = await axios.get(`${apiEndpoint}/categories`);

        const productsUrl = activeCategory
          ? `${apiEndpoint}/products/category/${activeCategory}`
          : `${apiEndpoint}/products`;

        const productsResponse = await axios.get(productsUrl);

        setCategories(categoriesResponse.data);
        setProducts(productsResponse.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    getData();
  }, [activeCategory]);

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
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => setActiveCategory("")}
                  className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium ${
                    activeCategory === ""
                      ? "bg-[#3e9d24] text-white"
                      : "text-gray-700 hover:bg-green-50"
                  }`}
                >
                  All Categories
                </button>
              </li>
              {categories.map((cat) => {
                const isActive = activeCategory === String(cat.id);
                return (
                  <li key={cat.id}>
                    <button
                      onClick={() => setActiveCategory(String(cat.id))}
                      className={`w-full flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-sm font-medium cursor-pointer transition-all duration-200 text-left ${
                        isActive
                          ? "bg-[#3e9d24] text-white shadow-sm"
                          : "text-gray-700 bg-gray-50/60 hover:bg-green-50 hover:text-[#3e9d24]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {/* Small round image */}
                        <img
                          src={cat.image_url}
                          alt={cat.name || "Category"}
                          className={`w-7 h-7 rounded-full object-cover flex-shrink-0 transition-transform duration-200 ${
                            isActive
                              ? "ring-2 ring-white/50"
                              : "border border-gray-200"
                          }`}
                        />

                        {/* Category Name */}
                        <span className="truncate">{cat.name}</span>
                      </div>

                      {/* Cool Checkmark Badge */}
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                          isActive
                            ? "bg-white text-[#3e9d24] scale-100 opacity-100"
                            : "border border-gray-300 scale-95 opacity-40 group-hover:border-[#3e9d24]"
                        }`}
                      >
                        <svg
                          className="w-3 h-3 stroke-[2.5]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                    </button>
                  </li>
                );
              })}
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
              Showing <span className="font-bold">{products.length}</span>{" "}
              results for{" "}
              <span className="text-[#3e9d24] font-bold">
                "{activeCategoryName}"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
