import React from 'react';
import { ArrowUp, Instagram, X, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2C2C30] text-white pt-16 pb-6 px-6 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Section Headers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8 mb-8">
          <div className="text-[18px] font-medium text-white">About</div>
          <div className="text-[18px] font-medium text-white">Services</div>
          <div className="text-[18px] font-medium text-white">Technologies</div>
          <div className="text-[18px] font-medium text-white">Industries</div>
          <div className="text-[18px] font-medium text-white">Portfolio</div>
          <div className="text-[18px] font-medium text-white">Resources</div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8 text-[14px] mb-16">
          {/* Column 1 - About */}
          <div className="flex flex-col gap-3">
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Our company</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Core Team</span>
            <div className="flex items-center gap-2">
              <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Career</span>
              <span className="text-[10px] text-white bg-[#FF5722] px-2 py-0.5 rounded-sm font-medium uppercase tracking-wider">CLICK HERE</span>
            </div>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">CSR</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">How We Work</span>
          </div>

          {/* Column 2 - Services */}
          <div className="flex flex-col gap-3">
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">iOS App Development</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Android App Development</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Software Development</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Ideation & Design</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Mobile App Dev</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Research & Innovation</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Digital Transformation</span>
            <span className="text-[#777777] cursor-pointer hover:text-[#BBBBBB] transition-colors">more...</span>
          </div>

          {/* Column 3 - Technologies */}
          <div className="flex flex-col gap-3">
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Blockchain</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Artificial Intelligence</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">AR and VR</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Cloud Computing</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Internet of Things</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Metaverse Development</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">NFT Development</span>
            <span className="text-[#777777] cursor-pointer hover:text-[#BBBBBB] transition-colors">more...</span>
          </div>

          {/* Column 4 - Industries */}
          <div className="flex flex-col gap-3">
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Healthcare</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Education</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">SaaS</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Finance</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">On-Demand</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">eCommerce</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Logistics</span>
            <span className="text-[#777777] cursor-pointer hover:text-[#BBBBBB] transition-colors">more...</span>
          </div>

          {/* Column 5 - Portfolio */}
          <div className="flex flex-col gap-3">
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">KFC</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Adidas</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">IKEA</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Hukoomi</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Domino's</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Pizza Hut</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">YouCOMM</span>
            <span className="text-[#777777] cursor-pointer hover:text-[#BBBBBB] transition-colors">more...</span>
          </div>

          {/* Column 6 - Resources */}
          <div className="flex flex-col gap-3">
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Blog</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Press Release</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Guides</span>
            <span className="text-[#BBBBBB] hover:text-white cursor-pointer transition-colors">Ebooks</span>
          </div>
        </div>

        {/* DMCA Section */}
        <div className="flex items-center gap-6 mb-12">
          <div className="bg-[#4CAF50] px-3 py-2 rounded-sm flex items-center gap-2">
            <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-[#4CAF50]">
                <path d="M6 10V8C6 5.79086 7.79086 4 10 4H14C16.2091 4 18 5.79086 18 8V10" stroke="currentColor" strokeWidth="2.5"/>
                <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2.5"/>
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-[12px] tracking-wide">DMCA</span>
              <span className="text-white text-[10px] tracking-wide">PROTECTED</span>
            </div>
          </div>
          <p className="text-[#BBBBBB] text-[14px] max-w-md leading-relaxed">
            Full stack mobile (iOS, Android) and web app design and development agency
          </p>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-[#404040] mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <span className="text-[#BBBBBB] text-[14px] cursor-pointer hover:text-white transition-colors">
              Statutory legal information
            </span>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3">
            <div className="flex items-center text-[14px] text-[#BBBBBB]">
              <span>2025-2026 (c) Appinventiv</span>
              <span className="mx-2 text-[#777777]">|</span>
              <span className="cursor-pointer hover:text-white transition-colors">SiteMap</span>
              <span className="mx-2 text-[#777777]">|</span>
              <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            </div>

            <div className="flex gap-4">
              <Instagram className="w-5 h-5 text-[#BBBBBB] cursor-pointer hover:text-white transition-colors" />
              <X className="w-5 h-5 text-[#BBBBBB] cursor-pointer hover:text-white transition-colors" />
              <Linkedin className="w-5 h-5 text-[#BBBBBB] cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="fixed bottom-6 right-6 bg-white text-black rounded-full p-3 shadow-lg cursor-pointer hover:bg-gray-50 transition-all">
        <ArrowUp className="w-4 h-4" />
      </div>
    </footer>
  );
};

export default Footer;