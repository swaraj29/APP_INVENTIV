import React from "react";

const PortfolioShowcase = () => {
  return (
    <div className="absolute top-10 -left-248 w-[1300px] bg-white text-black rounded-lg shadow-2xl z-50 border border-gray-100 overflow-hidden ">
      <div className="">
        {/* Left Column - Header */}
        <div className="flex">
          {/* Header Section - Takes up 3 columns */}
          <div className="w-80 p-8">
            <h1 className="text-[56px] font-bold text-black leading-[1.1] mb-6">
              Enabling<br />
              Innovation
            </h1>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              to steadfast success for top globally leading brands
            </p>
            <button className="border-2 border-black px-6 py-2.5 text-black font-medium hover:bg-black hover:text-white transition-colors duration-200 flex items-center rounded-sm">
              View all
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Portfolio Grid - Takes up remaining space */}
          <div className="flex-1 p-8">
            <div className="grid grid-cols-3 gap-x-16 gap-y-12">
              {/* Row 1 */}
              {/* Adidas */}
              <div className="space-y-4">
                <div className="h-8 flex items-center mb-4">
                  <span className="text-2xl font-semibold text-black tracking-wide">adidas</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A leading digital platform to offer engaging shopping experience to users
                </p>
              </div>

              {/* KFC */}
              <div className="space-y-4">
                <div className="h-8 flex items-center mb-4">
                  <span className="text-2xl font-bold text-black italic tracking-wide">KFC</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A mobile app to digitalize & expand KFC's digital footprint
                </p>
              </div>

              {/* Jobget */}
              <div className="space-y-4">
                <div className="h-8 flex items-center mb-4">
                  <span className="text-xl font-semibold text-black">jobget</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The MIT Innovation award-winning app with $52 Million funding reshaping the employment landscape
                </p>
              </div>

              {/* Row 2 */}
              {/* IKEA */}
              <div className="space-y-4">
                <div className="h-8 flex items-center mb-4">
                  <span className="text-2xl font-bold text-gray-600 tracking-[0.2em]">IKEA</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A transforming ERP Solution for the world's largest furniture retailer
                </p>
              </div>

              {/* Domino's */}
              <div className="space-y-4">
                <div className="h-8 flex items-center mb-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-600 transform rotate-45 mr-2"></div>
                    <span className="text-xl font-semibold text-gray-600">Domino's</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A refined UX strategy for Domino's to increase their conversion rate by 23%
                </p>
              </div>

              {/* Edfundo */}
              <div className="space-y-4">
                <div className="h-8 flex items-center mb-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-600 mr-2 clip-path-triangle"></div>
                    <span className="text-xl font-semibold text-gray-600">edfundo</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A SaaS-based financial literacy and smart money management platform for kids
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Testimonial Card */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-green-700 via-green-600 to-blue-600 rounded-2xl p-8 text-white max-w-md relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-sm mb-6 leading-relaxed opacity-95">
                Learn more about our process<br />
                from our clients.
              </p>
              <div className="w-6 h-6">
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            {/* Background person image placeholder */}
            <div className="absolute right-0 top-0 w-24 h-full opacity-20">
              <div className="w-16 h-16 bg-white opacity-40 rounded-full absolute top-4 right-4"></div>
              <div className="w-12 h-20 bg-white opacity-30 rounded-t-full absolute top-12 right-6"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .clip-path-triangle {
          clip-path: polygon(0 0, 100% 50%, 0 100%);
          background: #6b7280;
        }
      `}</style>
    </div>
  );
};

export default PortfolioShowcase;