import React from "react";
import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
  FaCogs,
  FaChartBar,
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
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[40px] md:text-[48px] font-light leading-tight tracking-tight mb-12">
          Tech Capabilities Driving Digital<br />Transformation For Our Clients
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="bg-[#0057FF] rounded-[30px] w-full lg:w-1/2 p-6 space-y-4 text-white overflow-hidden">
            {categories.map(({ name, icon: Icon, active }) => (
              <div
                key={name}
                className={`flex items-center justify-between px-6 py-4 rounded-[14px] ${
                  active ? "bg-[#3175FF]" : "hover:bg-[#3175FF]/60"
                } transition-all`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="text-white text-lg" />
                  <span className="font-medium text-base leading-tight">{name}</span>
                </div>
                {active && <FiArrowRight className="text-white" />}
              </div>
            ))}
          </div>

          {/* Tech grid */}
          <div className="bg-white rounded-[30px] w-full lg:w-1/2 p-6 grid grid-cols-2 gap-4">
            {technologies.map(({ name, logo }) => (
              <div
                key={name}
                className="flex items-center gap-4 bg-[#F7F8FA] rounded-[14px] px-4 py-3 min-h-[60px]"
              >
                <img src={logo} alt={name} className="w-8 h-8 object-contain" />
                <span className="text-black text-[14px] font-medium leading-tight">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechCapabilities;
