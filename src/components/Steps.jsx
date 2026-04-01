import React from 'react';

const Steps = () => {
  const steps = [
    {
      number: '01',
      title: 'Create Account',
      description: 'Sign up for free in seconds. No credit card required to get started.',
      icon: 'fas fa-user',
    },
    {
      number: '02',
      title: 'Choose Products',
      description: 'Browse our catalog and select the tools that fit your needs.',
      icon: 'fas fa-box',
    },
    {
      number: '03',
      title: 'Start Creating',
      description: 'Download and start using your premium tools immediately.',
      icon: 'fas fa-rocket',
    },
  ];

  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-base">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm relative">
              {/* Step Number - top right */}
              <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold">
                {step.number}
              </div>

              {/* Icon Circle - centered */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center">
                  <i className={`${step.icon} text-purple-600 text-2xl`}></i>
                </div>
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm text-center leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;