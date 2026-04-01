import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      tagline: "Perfect for getting started",
      price: 0,
      period: "Month",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month"
      ],
      cta: "Get Started Free",
      featured: false
    },
    {
      name: "Pro",
      tagline: "Best for professionals",
      price: 29,
      period: "Month",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics"
      ],
      cta: "Start Pro Trial",
      featured: true,
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      tagline: "For teams and businesses",
      price: 99,
      period: "Month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding"
      ],
      cta: "Contact Sales",
      featured: false
    }
  ];

  return (
    <div id="pricing" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 transition transform hover:scale-105 ${
                plan.featured
                  ? 'bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-2xl scale-105'
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              {plan.badge && (
                <div className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-medium mb-4 w-fit">
                  {plan.badge}
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${!plan.featured && 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`mb-6 ${plan.featured ? 'text-purple-100' : 'text-gray-600'}`}>
                {plan.tagline}
              </p>

              <div className="mb-6">
                <span className={`text-5xl font-bold ${!plan.featured && 'text-gray-900'}`}>
                  ${plan.price}
                </span>
                <span className={`${plan.featured ? 'text-purple-100' : 'text-gray-600'}`}>
                  /{plan.period}
                </span>
              </div>

              <button
                className={`w-full btn mb-8 h-12 ${
                  plan.featured
                    ? 'btn-outline text-white border-white hover:bg-white hover:text-purple-600'
                    : 'btn-primary bg-purple-600 hover:bg-purple-700 text-white border-0'
                }`}
              >
                {plan.cta}
              </button>

              <ul className={`space-y-3 ${plan.featured ? 'text-purple-50' : 'text-gray-700'}`}>
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <span className={`text-xl ${plan.featured ? 'text-purple-200' : 'text-green-500'}`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
