import React from 'react';

const Banner = () => {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-gradient-to-r from-purple-200 to-blue-200 text-purple-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <i className="fas fa-sparkles mr-2"></i>
              New: AI-Powered Tools Available
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Supercharge Your Digital Workflow
            </h1>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
            </p>
            <p className="text-gray-500 mb-10 font-medium">Explore Products</p>
            <div className="flex gap-5 flex-wrap">
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0 rounded-full px-12 py-4 font-bold text-lg transition-all transform hover:scale-105 hover:shadow-xl">
                Explore Products
              </button>
              <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-full px-12 py-4 font-bold text-lg transition-all">
                <i className="fas fa-play mr-2"></i>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:flex items-center justify-center">
            <img src="/assets/banner.png" alt="Digital Tools Banner" className="w-full h-auto rounded-lg object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
