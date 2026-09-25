import {} from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8 mt-12 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Col */}
        <div className="flex flex-col">
          <div className="text-2xl font-extrabold tracking-tight text-[#3e9d24] mb-4">
            Tome<span className="text-yellow-400">21</span>
          </div>
          <p className="mb-4 text-gray-500">
            The fastest-growing free classifieds in Ethiopia. Sell anything to
            real people.
          </p>
        </div>

        {/* Links Col 1 */}
        <div>
          <h4 className="font-bold text-gray-800 mb-4 uppercase tracking-wider">
            About Us
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-[#3e9d24] transition-colors">
                About Tome21
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#3e9d24] transition-colors">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#3e9d24] transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#3e9d24] transition-colors">
                Billing Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Links Col 2 */}
        <div>
          <h4 className="font-bold text-gray-800 mb-4 uppercase tracking-wider">
            Support
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-[#3e9d24] transition-colors">
                support@123.com
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#3e9d24] transition-colors">
                Safety Tips
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#3e9d24] transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#3e9d24] transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* App Links */}
        <div>
          <h4 className="font-bold text-gray-800 mb-4 uppercase tracking-wider">
            Our Apps
          </h4>
          <div className="flex flex-col space-y-3">
            <button className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase">Get it on</span>
                <span className="font-bold text-sm">Google Play</span>
              </div>
            </button>
            <button className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase">Download on the</span>
                <span className="font-bold text-sm">App Store</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© 2026 Tome21. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed in Addis Ababa</p>
      </div>
    </footer>
  );
}
