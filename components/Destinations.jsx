import Image from 'next/image';

export default function Destinations() {
  const destinations = [
    { id: 1, name: "Goa", image: "/images/india1.jpg" },
    { id: 2, name: "Manali", image: "/images/india2.jpg" },
    { id: 3, name: "Kerala", image: "/images/india3.jpg" },
    { id: 4, name: "Jaipur", image: "/images/india4.jpg" },
    { id: 5, name: "Rishikesh", image: "/images/india5.jpg" },
    { id: 6, name: "Udaipur", image: "/images/india6.jpg" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore India's most breathtaking locations with curated experiences
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div 
              key={dest.id} 
              className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{dest.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}