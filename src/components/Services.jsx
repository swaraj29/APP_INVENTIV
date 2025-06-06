import React, { useEffect, useState } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ttg3671/glowbal_assignment/refs/heads/main/services')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error('Failed to fetch services:', err));
  }, []);

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 max-w-3xl">
        Navigate The Digital Frontier With Our Engineering Excellence
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(service => (
          <div
            key={service.id}
            className="bg-[#111111] p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            {/* Icon (optional) */}
            {service.icon ? (
              <img
                src={service.icon}
                alt={service.title}
                className="w-8 h-8 mb-4"
              />
            ) : (
              <div className="w-8 h-8 mb-4 bg-gray-700 rounded" />
            )}

            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300 text-sm">{service.description}</p>
          </div>
        ))}

        {/* Last card - Call to Action */}
        <div className="bg-blue-600 hover:bg-blue-700 transition p-6 rounded-xl flex items-center justify-center text-center text-white">
          <button className="text-lg font-semibold">
            Our Services →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
