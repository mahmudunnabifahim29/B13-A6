import React from 'react';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              DigiTools
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-gray-700 hover:text-purple-600 transition focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-2 py-1">Products</a>
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-2 py-1">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-2 py-1">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-2 py-1">Testimonials</a>
            <a href="#faq" className="text-gray-700 hover:text-purple-600 transition focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-2 py-1">FAQ</a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-purple-600 transition text-2xl relative focus:outline-none focus:ring-2 focus:ring-purple-600 rounded p-1" aria-label="Shopping cart">
              <i className="fas fa-shopping-cart"></i>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold" aria-label={`${cartCount} items in cart`}>
                  {cartCount}
                </span>
              )}
            </button>
            <button className="hidden sm:block text-gray-700 hover:text-purple-600 transition font-medium focus:outline-none focus:ring-2 focus:ring-purple-600 rounded px-3 py-2">Login</button>
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0 rounded-full px-6 py-2 font-bold transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
