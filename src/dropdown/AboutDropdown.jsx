import React from "react";

const AboutDropdown = () => {
  return (
    <div className="absolute top-10 -left-188 w-[1400px] bg-white text-black rounded-lg shadow-2xl z-50 border border-gray-100 overflow-hidden">
      <div className="p-8 grid grid-cols-4 gap-8">
        {/* Left section with image and industries */}
        <div className="col-span-1 space-y-8">
          {/* Image section */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden bg-gray-900 relative h-30">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop&crop=faces"
                alt="Team collaboration"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-sm font-medium text-white leading-tight max-w-48">
                  See how we empower, energize and make time for each other
                </p>
              </div>
            </div>
          </div>

          {/* Technology offerings */}
          <div>
            <h4 className="text-sm text-gray-500 font-medium mb-4 tracking-wide">
              Leading Technology Offerings For
            </h4>
            <ul className="space-y-3">
              <li className="text-base font-semibold text-gray-900 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                Startup
              </li>
              <li className="text-base font-semibold text-gray-900 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                Public Entities
              </li>
              <li className="text-base font-semibold text-gray-900 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                Enterprises
              </li>
            </ul>
          </div>
        </div>

        {/* About Appinventiv */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-gray-900 tracking-wider mb-3">
            ABOUT APPINVENTIV
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            We believe in change driven by technology and innovation.
          </p>
        </div>

        {/* Start your career */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-gray-900 tracking-wider mb-3">
            START YOUR CAREER WITH US
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Join our team of experts to make a difference in the real world.
          </p>
        </div>

        {/* How we work */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-gray-900 tracking-wider mb-3">
            HOW WE WORK AND FUNCTION
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Learn about Appinventiv's product lifecycle development process.
          </p>
        </div>
      </div>

      {/* Bottom section - Core team */}
      <div className="px-8 pb-8">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-1"></div>
          <div className="col-span-1 space-y-4">
            <h4 className="text-sm font-bold text-gray-900 tracking-wider mb-3">
              CORE TEAM OF APPINVENTIV
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Meet the brains behind our smooth running and powerful machine.
            </p>
          </div>
          <div className="col-span-2"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutDropdown;