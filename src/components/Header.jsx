import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-black text-white py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="text-[#2970FF] text-3xl font-bold">A</div>
        <span className="text-lg font-semibold text-white">appinventiv</span>
      </div>

      {/* Navigation Menu */}
      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <a href="#talk-ai" className="hover:text-[#2970FF] transition">LET'S TALK AI</a>
        <a href="#about" className="hover:text-[#2970FF] transition">ABOUT</a>
        <a href="#services" className="hover:text-[#2970FF] transition">SERVICES</a>
        <a href="#industries" className="hover:text-[#2970FF] transition">INDUSTRIES</a>
        <a href="#portfolio" className="hover:text-[#2970FF] transition">PORTFOLIO</a>
        <a href="#resources" className="hover:text-[#2970FF] transition">RESOURCES</a>
      </nav>

      {/* Contact Button */}
      <div className="ml-6">
        <button className="bg-[#2970FF] text-white font-semibold px-5 py-2 rounded-md hover:bg-[#165DFF] transition">
          CONTACT US
        </button>
      </div>
    </header>
  );
};

export default Header;
