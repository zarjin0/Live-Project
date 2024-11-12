import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-16 text-white bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              SHOP
            </h3>
            <p className="leading-relaxed text-gray-300">
              Your one-stop destination for trendy and affordable fashion.
              Discover the latest styles that define modern elegance.
            </p>
            <div className="flex space-x-5">
              <FaFacebook className="w-6 h-6 text-gray-400 transition-all duration-300 hover:text-blue-400 hover:scale-110" />
              <FaTwitter className="w-6 h-6 text-gray-400 transition-all duration-300 hover:text-blue-400 hover:scale-110" />
              <FaInstagram className="w-6 h-6 text-gray-400 transition-all duration-300 hover:text-pink-400 hover:scale-110" />
              <FaLinkedin className="w-6 h-6 text-gray-400 transition-all duration-300 hover:text-blue-400 hover:scale-110" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white/90">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="inline-block text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white/90">
              Customer Service
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="inline-block text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  Track Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white/90">Newsletter</h3>
            <p className="leading-relaxed text-gray-300">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 border border-gray-700 rounded-lg bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm hover:border-gray-600"
              />
              <button className="px-4 py-3 font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/25 focus:ring-2 focus:ring-blue-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 mt-16 text-center border-t border-gray-800/80">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} SHOP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
