import React from 'react';

const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-purple-700 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-xl text-purple-100 mb-4 max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals who are already using DigiTools to work smarter.
          Start your free trial today.
        </p>
        <p className="text-purple-100 mb-12 text-lg">
          14-day free trial • No credit card required • Cancel anytime
        </p>
        <div className="flex gap-6 justify-center flex-wrap">
          <button className="bg-white text-purple-600 border-2 border-white hover:bg-purple-50 rounded-full px-12 py-4 font-bold text-lg transition-all transform hover:scale-105">
            <i className="fas fa-arrow-right mr-2"></i>
            Explore Products
          </button>
          <button className="border-2 border-white text-white hover:bg-purple-500 rounded-full px-12 py-4 font-bold text-lg transition-all transform hover:scale-105">
            <i className="fas fa-tag mr-2"></i>
            View Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
