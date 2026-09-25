import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// ==========================================
// MOCK DATABASE DATA
// ==========================================
const MOCK_PRODUCT = {
  id: 102,
  title: "Samsung Galaxy S23 Ultra - 256GB / 12GB RAM",
  price: 65000,
  currency: "ETB",
  category: "Mobile Phones",
  location: "Bole, Addis Ababa",
  posted: "2 hours ago",
  description:
    "Brand new Samsung Galaxy S23 Ultra. Comes with the box, original charger, and warranty. No scratches, perfect condition. Call for more details or order directly here.",
  specs: [
    { label: "Condition", value: "Brand New" },
    { label: "Brand", value: "Samsung" },
    { label: "Model", value: "Galaxy S23 Ultra" },
    { label: "Storage", value: "256 GB" },
    { label: "RAM", value: "12 GB" },
    { label: "Color", value: "Black" },
  ],
  images: [
    "https://via.placeholder.com/800x600/f3f4f6/a1a1aa?text=Main+Image",
    "https://via.placeholder.com/800x600/f3f4f6/a1a1aa?text=Side+Angle",
    "https://via.placeholder.com/800x600/f3f4f6/a1a1aa?text=Back+Cover",
    "https://via.placeholder.com/800x600/f3f4f6/a1a1aa?text=Accessories",
  ],
};

export default function ProductDetails() {
  const [activeImage, setActiveImage] = useState(MOCK_PRODUCT.images[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans text-gray-800">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-6">
        {/* Jiji Style Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-4 flex items-center gap-2">
          <a href="/" className="hover:text-[#3e9d24]">
            Home
          </a>
          <span>›</span>
          <a href="/products" className="hover:text-[#3e9d24]">
            {MOCK_PRODUCT.category}
          </a>
          <span>›</span>
          <span className="text-gray-400">{MOCK_PRODUCT.title}</span>
        </nav>

        {/* Main Grid: 2/3 Left (Images & Details), 1/3 Right (Price & Cart) */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* ================= LEFT COLUMN ================= */}
          <div className="w-full md:w-2/3 flex flex-col gap-4">
            {/* Image Viewer Card */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <div className="w-full h-80 md:h-[450px] bg-black relative flex items-center justify-center">
                <img
                  src={activeImage}
                  alt={MOCK_PRODUCT.title}
                  className="w-full h-full object-contain"
                />
                {/* Image Count Badge */}
                <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
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
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {MOCK_PRODUCT.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 p-3 overflow-x-auto">
                {MOCK_PRODUCT.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`flex-shrink-0 w-20 h-20 rounded border-2 transition-all ${
                      activeImage === img
                        ? "border-[#3e9d24]"
                        : "border-transparent opacity-80 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumb ${idx}`}
                      className="w-full h-full object-cover rounded-sm"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Details & Specs Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-900">
                Description
              </h2>
              <p className="text-gray-700 whitespace-pre-line mb-8 leading-relaxed">
                {MOCK_PRODUCT.description}
              </p>

              <h2 className="text-xl font-bold mb-4 text-gray-900">Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {MOCK_PRODUCT.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between border-b border-gray-100 pb-2"
                  >
                    <span className="text-gray-500 text-sm">{spec.label}</span>
                    <span className="font-medium text-sm text-gray-900">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN (Sticky) ================= */}
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <div className="sticky top-24 flex flex-col gap-4">
              {/* Action Card (Title, Price, Add to Cart) */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                <h1 className="text-xl text-gray-900 leading-snug mb-3">
                  {MOCK_PRODUCT.title}
                </h1>

                <div className="flex items-center text-sm text-gray-500 gap-4 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-1">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {MOCK_PRODUCT.posted}
                  </div>
                  <div className="flex items-center gap-1">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {MOCK_PRODUCT.location}
                  </div>
                </div>

                <div className="text-3xl font-bold text-[#3e9d24] mb-6">
                  {MOCK_PRODUCT.currency} {MOCK_PRODUCT.price.toLocaleString()}
                </div>

                {/* E-commerce Actions */}
                <div className="flex flex-col gap-3">
                  {/* Quantity */}
                  <div className="flex items-center justify-between border border-gray-300 rounded px-3 py-2">
                    <span className="text-gray-500 text-sm">Quantity</span>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="text-xl text-[#3e9d24] font-bold px-2"
                      >
                        −
                      </button>
                      <span className="font-bold">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="text-xl text-[#3e9d24] font-bold px-2"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button className="w-full bg-[#3e9d24] text-white font-bold py-3 rounded hover:bg-green-700 transition flex items-center justify-center gap-2">
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
                    Add to Cart
                  </button>

                  <button className="w-full bg-white border border-[#3e9d24] text-[#3e9d24] font-bold py-3 rounded hover:bg-green-50 transition">
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Store / Delivery Card (Replaces Jiji's Seller Card) */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-4">
                  Store Information
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold text-xl">
                    T
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Tome21 Official</h4>
                    <p className="text-xs text-gray-500">
                      Verified E-commerce Store
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-[#3e9d24]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Nationwide Delivery
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-[#3e9d24]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Secure Online Payment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
