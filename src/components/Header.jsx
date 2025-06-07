import React, { useState, useEffect } from "react";
import { Menu, X, Plus } from "lucide-react";
import logo from "../assets/Images/appinventiv-mob-wht-logo.svg"; // Use black logo if available

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full py-4 px-4 sm:px-6 lg:px-10 flex items-center justify-between z-50 transition-all duration-500 ${
        scrolled
          ? "fixed top-0 bg-black text-white shadow-lg"
          : "absolute top-8 bg-transparent text-white"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Appinventiv Logo" className="h-8 w-auto" />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center justify-between w-full max-w-[1400px] mx-auto">
        <nav className="flex-1 flex justify-center gap-10 text-sm font-medium">
          <a href="#talk-ai" className="hover:text-[#2970FF] transition">LET'S TALK AI</a>
          <a href="#about" className="hover:text-[#2970FF] transition">ABOUT</a>
          <a href="#services" className="hover:text-[#2970FF] transition">SERVICES</a>
          <a href="#industries" className="hover:text-[#2970FF] transition">INDUSTRIES</a>
          <a href="#portfolio" className="hover:text-[#2970FF] transition">PORTFOLIO</a>
          <a href="#resources" className="hover:text-[#2970FF] transition">RESOURCES</a>
        </nav>
        <div>
          <button className="bg-[#2970FF] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#165DFF] transition">
            CONTACT US
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center gap-4">
        <button className="bg-[#2970FF] text-white font-semibold px-4 py-2 rounded-full hover:bg-[#165DFF] transition">
          Contact Us
        </button>
        <Menu
          onClick={() => setIsMobileMenuOpen(true)}
          className="h-6 w-6 text-white cursor-pointer"
        />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6 overflow-y-auto transition-transform duration-300">
          {/* Top: Logo + Close */}
          <div className="flex justify-between items-center mb-8">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <X
              onClick={() => setIsMobileMenuOpen(false)}
              className="h-7 w-7 text-black cursor-pointer"
            />
          </div>

          {/* Menu items */}
          <nav className="w-full text-gray-700 text-xl font-normal">
            <a href="#talk-ai" className="block py-4 border-b border-gray-300">Let's Talk AI</a>
            <a href="#about" className="block py-4 border-b border-gray-300">About</a>

            <div className="flex justify-between items-center py-4 border-b border-gray-300">
              <span>Industries</span>
              <Plus className="h-5 w-5" />
            </div>

            <div className="flex justify-between items-center py-4 border-b border-gray-300">
              <span>Services</span>
              <Plus className="h-5 w-5" />
            </div>

            <div className="flex justify-between items-center py-4 border-b border-gray-300">
              <span>Portfolio</span>
              <Plus className="h-5 w-5" />
            </div>

            <a href="#resources" className="block py-4 border-b border-gray-300">Resources</a>
          </nav>

          {/* Contact Button */}
          <div className="w-full mt-8">
            <button className="w-full bg-[#0050FF] text-white text-lg font-semibold py-4 rounded-lg hover:bg-[#165DFF] transition">
              CONTACT US
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
