import React from 'react';

const Stats = () => {
  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "200+", label: "Premium Tools" },
    { number: "4.9", label: "Rating" }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 to-purple-700 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center relative">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-purple-100 text-lg">
                {stat.label}
              </div>
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-purple-400 opacity-50"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
