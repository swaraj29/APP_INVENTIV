import React, { useState } from "react";
import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
  FaCogs,
  FaChartBar,
  FaBrain,
  FaProjectDiagram,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const categories = [
  { name: "Frontend Programming Languages", icon: FaCode, active: true },
  { name: "Backend Programming Languages", icon: FaServer },
  { name: "Mobile", icon: FaMobileAlt },
  { name: "Big Data", icon: FaChartBar },
  { name: "Databases / Data Storages", icon: FaDatabase },
  { name: "Cloud DB, Warehouses And Storage", icon: FaCloud },
  { name: "DevOps", icon: FaCogs },
  { name: "Architecture Designs And Patterns", icon: FaProjectDiagram },
  { name: "Artificial Intelligence", icon: FaBrain },
];

const technologies = [
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "Javascript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "ember", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ember/ember-original.svg" },
  { name: "Meteor", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/meteor/meteor-original.svg" },
  { name: "Nextjs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
];

const TechCapabilities = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (name) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  const frontendCategory = categories.find(cat => cat.name === "Frontend Programming Languages");
  const otherCategories = categories.filter(cat => cat.name !== "Frontend Programming Languages");

  return (
    <section className="bg-black text-white py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center md:text-left">
          Tech Capabilities Driving Digital<br className="hidden md:block" />
          <span className="md:hidden"> </span>Transformation For Our Clients
        </h2>

        {/* Desktop/Tablet Layout */}
        <div className="hidden md:flex gap-6">
          {/* Sidebar */}
          <div className="bg-[#0057FF] rounded-[24px] w-full md:w-1/2 p-4 sm:p-6 space-y-3 text-white overflow-hidden">
            {categories.map(({ name, icon: Icon, active }) => (
              <div
                key={name}
                className={`flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 rounded-[14px] ${
                  active ? "bg-[#3175FF]" : "hover:bg-[#3175FF]/60"
                } transition-all`}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <Icon className="text-white text-lg sm:text-xl" />
                  <span className="font-medium text-sm sm:text-base leading-tight">{name}</span>
                </div>
                {active && <FiArrowRight className="text-white text-lg sm:text-xl" />}
              </div>
            ))}
          </div>

          {/* Tech grid */}
          <div className="bg-white rounded-[24px] w-full md:w-1/2 p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {technologies.map(({ name, logo }) => (
              <div
                key={name}
                className="flex items-center gap-3 sm:gap-4 bg-[#F7F8FA] rounded-[12px] px-3 sm:px-4 py-2 sm:py-3 min-h-[50px] sm:min-h-[60px]"
              >
                <img src={logo} alt={name} className="w-6 sm:w-8 h-6 sm:h-8 object-contain" />
                <span className="text-black text-[13px] sm:text-[14px] font-medium leading-tight">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-3">
          {/* Frontend Category (Always Visible) */}
          <div className="bg-white rounded-[20px] p-4">
            <div className="flex items-center gap-3 px-2 py-3 rounded-[12px] bg-[#4285F4] text-white">
              <frontendCategory.icon className="text-lg flex-shrink-0" />
              <span className="font-medium text-base leading-tight">{frontendCategory.name}</span>
              <FiArrowRight className="ml-auto text-white text-lg" />
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {technologies.map(({ name, logo }) => (
                <div
                  key={name}
                  className="flex items-center gap-3 bg-[#F7F8FA] rounded-[12px] px-3 py-2 min-h-[50px]"
                >
                  <img src={logo} alt={name} className="w-6 h-6 object-contain flex-shrink-0" />
                  <span className="text-black text-[13px] font-medium leading-tight">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Other Categories (Simple Buttons) */}
          {otherCategories.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex items-center gap-4 bg-[#4285F4] text-white px-6 py-4 rounded-[20px] shadow-sm"
            >
              <Icon className="text-xl flex-shrink-0" />
              <span className="font-medium text-base leading-tight">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechCapabilities;