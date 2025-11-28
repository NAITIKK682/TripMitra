export default function Pricing() {
  const plans = [
    {
      id: 1,
      name: "Basic",
      price: "₹4,999",
      period: "/trip",
      features: [
        "3-day itinerary",
        "Budget accommodations",
        "Local transport",
        "Basic support"
      ]
    },
    {
      id: 2,
      name: "Premium",
      price: "₹9,999",
      period: "/trip",
      features: [
        "5-day itinerary",
        "3-star hotels",
        "Private transport",
        "24/7 support",
        "Local guide"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Luxury",
      price: "₹19,999",
      period: "/trip",
      features: [
        "7-day itinerary",
        "5-star resorts",
        "Luxury transport",
        "Dedicated agent",
        "VIP experiences",
        "Airport transfers"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Affordable Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your Indian adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`rounded-xl border p-8 ${
                plan.popular 
                  ? "border-blue-500 ring-2 ring-blue-500/20 relative" 
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
              
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg 
                      className="w-5 h-5 text-green-500 mr-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 rounded-lg font-bold transition-colors ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}