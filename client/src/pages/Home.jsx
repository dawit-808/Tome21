import {} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// ==========================================
// MOCK DATABASE DATA
// (Move these to your backend/API later)
// ==========================================

const MOCK_CATEGORIES = [
  { id: 1, name: "Vehicles", icon: "car" },
  { id: 2, name: "Property", icon: "home" },
  { id: 3, name: "Phones", icon: "smartphone" },
  { id: 4, name: "Electronics", icon: "tv" },
  { id: 5, name: "Fashion", icon: "shirt" },
  { id: 6, name: "Beauty", icon: "sparkles" },
  { id: 7, name: "Services", icon: "wrench" },
  { id: 8, name: "Home", icon: "sofa" },
];

const MOCK_PRODUCTS = [
  {
    id: 101,
    title: "Toyota Vitz 2018 Excellent Condition (Automatic)",
    price: 1200000,
    currency: "ETB",
    location: "Bole, Addis Ababa",
    isHot: true,
    badge: "Top",
    image: "placeholder-1.jpg",
  },
  {
    id: 102,
    title: "Samsung Galaxy S23 Ultra - 256GB",
    price: 65000,
    currency: "ETB",
    location: "Piassa, Addis Ababa",
    isHot: false,
    badge: "New",
    image: "placeholder-2.jpg",
  },
  {
    id: 103,
    title: "Modern L-Shape Sofa with Cushions",
    price: 45000,
    currency: "ETB",
    location: "Megenagna, Addis Ababa",
    isHot: true,
    badge: "Sale",
    image: "placeholder-3.jpg",
  },
  {
    id: 104,
    title: "Men's Classic Leather Jacket",
    price: 4500,
    currency: "ETB",
    location: "Kazanchis, Addis Ababa",
    isHot: false,
    badge: null,
    image: "placeholder-4.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-6 flex flex-col space-y-8">
        {/* Pro Hero / Carousel */}
        <div className="w-full h-72 bg-gradient-to-r from-[#3e9d24] to-green-400 rounded-2xl shadow-md flex items-center justify-between p-10 relative overflow-hidden group">
          <div className="z-10 text-white max-w-md">
            {/* Updated copy to reflect an e-commerce store instead of classifieds */}
            <h2 className="text-4xl font-extrabold mb-3 drop-shadow-sm">
              Shop the best quality products
            </h2>
            <p className="text-lg text-green-50 mb-6 drop-shadow-sm">
              Premium electronics, fashion, and more delivered to you.
            </p>
            <button className="bg-white text-[#3e9d24] px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition shadow-sm">
              Start Shopping
            </button>
          </div>
          {/* Decorative shapes */}
          <div className="absolute right-0 top-0 w-64 h-full bg-white opacity-10 skew-x-12 transform translate-x-10"></div>
          <div className="absolute right-20 bottom-0 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
        </div>

        {/* Circular Categories */}
        <section>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {MOCK_CATEGORIES.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-[#3e9d24] group-hover:bg-[#3e9d24] group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1">
                  {/* Generic SVG placeholder - you can map these to actual Lucide/Heroicons later using the icon string */}
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium mt-2 text-gray-700 group-hover:text-[#3e9d24] transition-colors">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Pro Product Grid */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            Trending Products
            <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full uppercase tracking-wider font-bold">
              Hot
            </span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 gap-4">
            {MOCK_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer relative"
              >
                {/* Image Container */}
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  {/* Dynamic Badge Rendering */}
                  {product.badge && (
                    <div className="absolute top-2 left-2 z-10 bg-[#3e9d24] text-white text-xs font-bold px-2 py-1 rounded">
                      {product.badge}
                    </div>
                  )}
                  {/* Image Background Placeholder */}
                  <div className="w-full h-full bg-gray-300 group-hover:scale-105 transition-transform duration-500"></div>
                </div>

                {/* Card Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <h4 className="text-gray-800 font-medium line-clamp-2 leading-snug group-hover:text-[#3e9d24] transition-colors">
                    {product.title}
                  </h4>
                  <div className="mt-auto pt-3">
                    <p className="text-[#3e9d24] text-xl font-bold">
                      {product.currency} {product.price.toLocaleString()}
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
