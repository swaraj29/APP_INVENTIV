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
    <section className="bg-black text-white px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-20">
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl  lg:w-[45%] leading-tight sm:leading-snug">
          Transforming Businesses With Technology That Transcends Geographies
          And Platforms
        </h2>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:w-[50%]">
          Appinventiv is one of the world’s largest IT service providers helping
          companies redefine their digital possibilities for nearly a decade now.
          With our team of 1600+ tech evangelists, we are building the digital
          infrastructure of our clients positioning them to be the market leaders
          of their respective industries.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-6 sm:gap-x-8 md:gap-x-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative border-l border-gray-700 pl-4 sm:pl-5 md:pl-6 pr-2"
          >
            <div className="text-blue-500 text-xl sm:text-2xl md:text-[28px] font-semibold">
              {stat.value}
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-1 sm:mt-2">
              {stat.title}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base md:text-sm mt-2 sm:mt-3">
              {stat.description}
            </p>
          </div>
        ))}

        {/* CTA Card */}
        <div className="bg-[#1B1B1B] rounded-2xl p-6 sm:p-7 md:p-8 flex flex-col justify-between border border-[#2E2E2E] shadow-md relative overflow-hidden">
          {/* Background SVG Image */}
          <img
            src={polyLine}
            alt="Growth chart"
            className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 opacity-10 pointer-events-none select-none"
          />

          {/* Text and Button */}
          <div>
            <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">
              Ready to innovate and drive an impact?
            </h4>
          </div>
          <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-lg w-fit z-10 text-sm sm:text-base">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;