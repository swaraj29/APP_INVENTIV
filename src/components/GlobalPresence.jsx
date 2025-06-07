import React from "react";
import indiaImg from "../assets/Images/hq-india.svg";
import usaImg from "../assets/Images/hq-usa.svg";
import canadaImg from "../assets/Images/hq-canada.svg";
import uaeImg from "../assets/Images/hq-uae.svg";
import ausImg from "../assets/Images/hq-aus-new.svg";
import logo from "../assets/Images/appinventiv-mob-wht-logo.svg";
import Global from "../assets/Images/global.png";

const locations = [
  {
    title: "INDIA",
    address: "B-25, Sector 58,\nNoida- 201301,\nDelhi - NCR, India",
    image: indiaImg,
  },
  {
    title: "USA",
    address: "79, Madison Ave\nManhattan, NY 10001,\nUSA",
    image: usaImg,
  },
  {
    title: "Australia",
    address: "Appinventiv Australia,\nEast Brisbane\nQLD 4169, Australia",
    image: ausImg,
  },
  {
    title: "UK",
    address: "3rd Floor, 86-90\nPaul Street EC2A 4NE\nLondon, UK",
    image: usaImg, // Replace with UK image if available
  },
  {
    title: "UAE",
    address: "Tiger Al Yarmook Building,\n13th floor B-block\nAl Nahda St - Sharjah",
    image: uaeImg,
  },
  {
    title: "CANADA",
    address: "Suite 3810, Bankers Hall West,\n888 - 3rd Street Sw\nCalgary Alberta",
    image: canadaImg,
  },
];

const GlobalPresence = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="flex items-start justify-between px-4 py-4 sm:px-8 sm:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Appinventiv Logo" 
              className="h-6 sm:h-8 w-auto"
            />
          </div>

          {/* Badge Section */}
          <div className="flex bg-[#1f235a] rounded-md px-3 py-2 border border-[#2e3c73]">
            <img 
              src={Global} 
              alt="Clutch badge" 
              className="w-6 h-6 object-contain mr-2"
            />
            <p className="text-xs text-white font-medium leading-tight">
              Most trusted Mobile App<br />Consulting Company on Clutch
            </p>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="px-4 sm:px-8 lg:px-16 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {locations.map((location, index) => (
              <div key={index} className="text-center">
                {/* City Image */}
                <div className="mb-3 sm:mb-4 flex justify-center">
                  <div className="h-12 sm:h-16 flex items-end">
                    <img 
                      src={location.image} 
                      alt={`${location.title} skyline`}
                      className="h-full w-auto object-contain opacity-60"
                      style={{ filter: 'brightness(0.7)' }}
                    />
                  </div>
                </div>

                {/* City Title */}
                <h3 className="text-xs sm:text-sm font-bold mb-2 sm:mb-3 tracking-widest text-white">
                  {location.title}
                </h3>

                {/* Address */}
                <p className="text-gray-300 text-xs leading-relaxed whitespace-pre-line font-normal">
                  {location.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;
