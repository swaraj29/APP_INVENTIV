import React, { useEffect, useState } from "react";

const Partners = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ttg3671/glowbal_assignment/refs/heads/main/partners"
    )
      .then((res) => res.json())
      .then((data) => setPartners(data))
      .catch((err) => console.error("Failed to fetch partners:", err));
  }, []);

  return (
    <section className="bg-black py-20 px-6 text-white text-center">
      <h2 className="text-3xl md:text-5xl font-medium leading-snug mb-12">
        Our Partnerships Have Transformed How You Experience These Global Leaders
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-6 justify-items-center">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="text-white text-xl font-semibold opacity-60 hover:opacity-100 transition duration-300"
          >
            {partner.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
