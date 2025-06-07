import React, { useState } from 'react';
import { ArrowUp, Instagram, X, Linkedin } from 'lucide-react';
import path from "../assets/Images/path.svg"; // Adjust the path as necessary

const Footer = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionIndex) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex],
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const sections = [
    {
      title: "About",
      items: [
        { text: "Our company", link: "#" },
        { text: "Core Team", link: "#" },
        { text: "Career", link: "#", badge: "CLICK HERE" },
        { text: "CSR", link: "#" },
        { text: "How We Work", link: "#" },
      ],
    },
    {
      title: "Services",
      items: [
        { text: "iOS App Development", link: "#" },
        { text: "Android App Development", link: "#" },
        { text: "Software Development", link: "#" },
        { text: "Ideation & Design", link: "#" },
        { text: "Mobile App Dev", link: "#" },
        { text: "Research & Innovation", link: "#" },
        { text: "Digital Transformation", link: "#" },
        { text: "more...", link: "#", isMore: true },
      ],
    },
    {
      title: "Technologies",
      items: [
        { text: "Blockchain", link: "#" },
        { text: "Artificial Intelligence", link: "#" },
        { text: "AR and VR", link: "#" },
        { text: "Cloud Computing", link: "#" },
        { text: "Internet of Things", link: "#" },
        { text: "Metaverse Development", link: "#" },
        { text: "NFT Development", link: "#", isMore: true },
      ],
    },
    {
      title: "Industries",
      items: [
        { text: "Healthcare", link: "#" },
        { text: "Education", link: "#" },
        { text: "SaaS", link: "#" },
        { text: "Finance", link: "#" },
        { text: "On-Demand", link: "#" },
        { text: "eCommerce", link: "#" },
        { text: "Logistics", link: "#" },
        { text: "more...", link: "#", isMore: true },
      ],
    },
    {
      title: "Portfolio",
      items: [
        { text: "KFC", link: "#" },
        { text: "Adidas", link: "#" },
        { text: "IKEA", link: "#" },
        { text: "Hukoomi", link: "#" },
        { text: "Domino's", link: "#" },
        { text: "Pizza Hut", link: "#" },
        { text: "YouCOMM", link: "#" },
        { text: "more...", link: "#", isMore: true },
      ],
    },
    {
      title: "Resources",
      items: [
        { text: "Blog", link: "#" },
        { text: "Press Release", link: "#" },
        { text: "Guides", link: "#" },
        { text: "Ebooks", link: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#1D1D25] text-white pt-8 sm:pt-10 md:pt-12 pb-4 sm:pb-5 md:pb-6 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20" style={{ fontFamily: 'inter, sans-serif' }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Mobile Layout: Accordion with + and - */}
        <div className="block md:hidden">
          {sections.map((section, index) => (
            <div key={index} className="border-b border-[#333333] py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(index)}
              >
                <h3 className="text-xl sm:text-2xl font-medium text-white">{section.title}</h3>
                <span className="text-white text-2xl">{openSections[index] ? '−' : '+'}</span>
              </div>
              <div
                className={`flex flex-col gap-3 text-[14px] sm:text-[15px] leading-relaxed overflow-hidden transition-all duration-300 ${
                  openSections[index] ? 'max-h-96 mt-3' : 'max-h-0'
                }`}
              >
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <a
                      href={item.link}
                      className={`${
                        item.isMore ? 'text-[#888888] hover:text-[#b3b3b3]' : 'text-[#b3b3b3] hover:text-white'
                      } cursor-pointer transition-colors`}
                    >
                      {item.text}
                    </a>
                    {item.badge && (
                      <span className="text-[8px] sm:text-[9px] text-black bg-[#FF5722] px-1.5 sm:px-2 py-0.5 rounded-sm font-bold uppercase tracking-wider">
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop/Tablet Layout: Grid */}
        <div className="hidden md:block">
          {/* Main Section Headers */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10 mb-6 sm:mb-8 md:mb-10">
            {sections.map((section, index) => (
              <div key={index} className="text-xl sm:text-2xl md:text-3xl font-medium text-white">
                {section.title}
              </div>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10 text-[13px] sm:text-[14px] md:text-[15px] mb-10 sm:mb-12 md:mb-16 leading-relaxed">
            {sections.map((section, index) => (
              <div key={index} className="flex flex-col gap-2 sm:gap-3">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <a
                      href={item.link}
                      className={`${
                        item.isMore ? 'text-[#888888] hover:text-[#b3b3b3]' : 'text-[#b3b3b3] hover:text-white'
                      } cursor-pointer transition-colors`}
                    >
                      {item.text}
                    </a>
                    {item.badge && (
                      <span className="text-[8px] sm:text-[9px] text-black bg-[#FF5722] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-sm font-bold uppercase tracking-wider">
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* DMCA Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10">
          <div className="bg-[#4CAF50] px-2 sm:px-3 py-1 sm:py-1.5 rounded flex items-center gap-2 sm:gap-3">
            <div className="w-3 sm:w-4 h-3 sm:h-4 bg-white rounded flex items-center justify-center">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" className="text-[#4CAF50] sm:w-10 sm:h-10">
                <path d="M6 10V8C6 5.79086 7.79086 4 10 4H14C16.2091 4 18 5.79086 18 8V10" stroke="currentColor" strokeWidth="2"/>
                <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-[10px] sm:text-[11px] tracking-wide">DMCA</span>
              <span className="text-white text-[8px] sm:text-[9px] tracking-wide">PROTECTED</span>
            </div>
          </div>
          <p className="text-[#b3b3b3] text-[12px] sm:text-[13px] md:text-[14px] max-w-md leading-normal">
            Full stack mobile (iOS, Android) and web app design and development agency
          </p>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-[#333333] mb-4 sm:mb-5 md:mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 sm:gap-4 md:gap-5">
          <div>
            <span className="text-[#b3b3b3] text-[12px] sm:text-[13px] md:text-[14px] cursor-pointer hover:text-white transition-colors">
              Statutory legal information
            </span>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-2 sm:gap-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center text-[12px] sm:text-[13px] md:text-[14px] text-[#b3b3b3] gap-2 sm:gap-0">
              <span>2025-2026 (c) Appinventiv</span>
              <span className="mx-0 sm:mx-3 text-[#666666] hidden sm:block">|</span>
              <span className="cursor-pointer hover:text-white transition-colors">SiteMap</span>
              <span className="mx-0 sm:mx-3 text-[#666666] hidden sm:block">|</span>
              <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <Instagram className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-[#b3b3b3] cursor-pointer hover:text-white transition-colors" />
              <X className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-[#b3b3b3] cursor-pointer hover:text-white transition-colors" />
              <Linkedin className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-[#b3b3b3] cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
        </div>

        {/* Scroll to top button - Now inside the footer with functionality */}
        <div className="relative flex justify-end">
          <div
            className="bg-white text-black rounded-full p-2 sm:p-3 md:p-4 shadow-lg cursor-pointer hover:bg-gray-50 transition-all relative bottom-6 sm:bottom-8 md:bottom-40"
            onClick={scrollToTop}
          >
            <ArrowUp className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
          </div>
        </div>
      </div>

      {/* Fixed Path Image */}
      <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8">
        <img src={path} alt="Path Icon" className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" />
      </div>
    </footer>
  );
};

export default Footer;