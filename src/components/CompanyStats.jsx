import React from "react";
import polyLine from "../assets/Images/poly_line.svg";

const stats = [
  {
    value: "35+",
    title: "Industries Mastered",
    description:
      "With our agility & engineering expertise, we equip your critical business functions with customized tech, and expand digital capabilities.",
  },
  {
    value: "1600+",
    title: "Tech Evangelists",
    description:
      "We are a dynamic team of technology enthusiasts and experts passionately driven to achieve the best results for our clients.",
  },
  {
    value: "3000+",
    title: "Solutions Designed And Delivered",
    description:
      "We have empowered businesses with thousands of successful futuristic solutions that have helped them grow and scale.",
  },
  {
    value: "500+",
    title: "Legacy Processes Transformed",
    description:
      "We help businesses achieve their digital transformation goals by seamlessly integrating cutting-edge technologies into their legacy systems.",
  },
  {
    value: "05+",
    title: "Strategic Federal Partnerships",
    description:
      "We drive collaborative initiatives that address critical challenges and deliver impactful solutions.",
  },
];

const CompanyStats = () => {
  return (
    <section className="bg-black text-white px-4 md:px-16 py-20">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 mb-20">
        <h2 className="text-3xl lg:text-4xl font-semibold lg:w-[45%] leading-snug">
          Transforming Businesses With Technology That Transcends Geographies
          And Platforms
        </h2>
        <p className="text-gray-300 text-lg lg:w-[50%]">
          Appinventiv is one of the world’s largest IT service providers helping
          companies redefine their digital possibilities for nearly a decade now.
          With our team of 1600+ tech evangelists, we are building the digital
          infrastructure of our clients positioning them to be the market leaders
          of their respective industries.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative border-l border-gray-700 pl-6 pr-2"
          >
            <div className="text-blue-500 text-[28px] font-semibold">
              {stat.value}
            </div>
            <h3 className="text-lg font-semibold mt-1">{stat.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{stat.description}</p>
          </div>
        ))}

        {/* CTA Card */}
        <div className="bg-[#1B1B1B] rounded-2xl p-8 flex flex-col justify-between border border-[#2E2E2E] shadow-md relative overflow-hidden">
          {/* Background SVG Image */}
          <img
            src={polyLine}
            alt="Growth chart"
            className="absolute bottom-4 right-4 w-20 h-20 opacity-10 pointer-events-none select-none"
          />

          {/* Text and Button */}
          <div>
            <h4 className="text-lg font-semibold mb-3">
              Ready to innovate and drive an impact?
            </h4>
          </div>
          <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg w-fit z-10">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
