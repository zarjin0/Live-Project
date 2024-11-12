import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.product);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  const handleCartClick = (e) => {
    if (!isAuthenticated) {
      e.preventDefault();
      loginWithRedirect();
    }
  };

  return (
    <>
      <div className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto">
          <div className="flex items-center justify-between px-4 py-3">
            <Link
              to="/"
              className="text-2xl font-bold text-transparent transition-transform bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text md:text-3xl hover:scale-105"
            >
              SHOP
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 transition-colors rounded-lg hover:bg-gray-100 md:hidden"
              aria-label="Toggle menu"
            >
              <HiMenu className="w-6 h-6 text-gray-700" />
            </button>

            {/* Menu items */}
            <div
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto bg-white md:bg-transparent shadow-lg md:shadow-none p-4 md:p-0 items-center gap-6 transition-all duration-200 ease-in-out md:w-auto`}
            >
              <div className="relative cart">
                <Link
                  to="/cart"
                  onClick={handleCartClick}
                  className="block transition-all duration-200 hover:scale-110"
                >
                  {isAuthenticated && cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
                      {cart.length}
                    </span>
                  )}
                  <IoMdCart
                    className={`text-3xl transition-colors ${
                      isAuthenticated
                        ? "text-gray-700 hover:text-gray-900"
                        : "text-gray-400"
                    }`}
                  />
                </Link>
              </div>
              <div className="w-full login md:w-auto">
                {isAuthenticated ? (
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={user.picture}
                        alt={user.name}
                        className="w-10 h-10 transition-colors border-2 border-gray-200 rounded-full hover:border-blue-500"
                      />
                    </div>
                    <button
                      onClick={() =>
                        logout({ returnTo: window.location.origin })
                      }
                      className="w-full px-6 py-2.5 font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg md:w-auto hover:opacity-90 transition-opacity focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => loginWithRedirect()}
                    className="w-full px-6 py-2.5 font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg md:w-auto hover:opacity-90 transition-opacity focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
