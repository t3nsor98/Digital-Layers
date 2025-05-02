import React from "react";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Frontend",
      price: "$199",
      features: ["Responsive Design", "Modern UI/UX", "Cross-Browser Support"],
    },
    {
      title: "Multi Pages",
      price: "$499",
      features: [
        "Everything in Frontend",
        "Multiple Pages",
        "SEO Optimization",
      ],
    },
    {
      title: "Full Stack Web App",
      price: "$999",
      features: [
        "Everything in Multi Pages",
        "Backend Integration",
        "Database Support",
        "API Development",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {plan.title}
              </h3>
              <p className="text-3xl font-bold text-indigo-600 mb-6">
                {plan.price}
              </p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-gray-600 flex items-center space-x-2"
                  >
                    <span className="text-green-500">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;