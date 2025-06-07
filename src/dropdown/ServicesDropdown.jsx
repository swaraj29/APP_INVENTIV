import React from "react";

const ServicesDropdown = () => {
  return (
    <div className="absolute top-8 -left-208 mt-1 w-[1400px] bg-white text-gray-900 rounded-lg shadow-2xl shadow-black/10 z-50 border border-gray-200 ">
      <div className="flex">
        {/* Left Section - Hero Content */}
        <div className="w-80 p-8 bg-gray-50 rounded-l-lg">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Made to <span className="text-blue-600">Scale</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Our software development services are built to evolve your business idea into a successful growth story
            </p>
            
            {/* Featured Case Study */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-lg p-4 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-sm font-medium leading-tight">
                    See how we made a powerful ERP solution for the world's largest furniture retailer
                  </p>
                </div>
                <div className="absolute -right-2 -top-2 opacity-20">
                  <div className="w-20 h-20 bg-white/30 rounded-lg flex items-center justify-center transform rotate-12">
                    <span className="text-2xl font-bold">IK</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Target Audience */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-4">Leading Technology Offerings For</h3>
              <div className="space-y-2">
                <div className="text-sm text-gray-700">Startup</div>
                <div className="text-sm text-gray-700">Public Entities</div>
                <div className="text-sm text-gray-700">Enterprises</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Services Grid */}
        <div className="flex-1 p-8">
          <div className="grid grid-cols-3 gap-12">
            
            {/* Column 1 */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">
                  IDEATION AND<br />PRODUCT DESIGN
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      UI/UX
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">
                  MOBILE APP DEV
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      PWA
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      Mobile first Design
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">
                  DIGITAL<br />TRANSFORMATION
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      Supply chain management
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      Legacy Modernization
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">
                  ELECTRIC VEHICLES
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      E-mobility
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">
                  DEVOPS
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      SecOps
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">
                  SOFTWARE<br />DEVELOPMENT
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      ERP Software development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      Custom CRM
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      AR/VR Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      IoT Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      Microservices
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      Product Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      Payment Software
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">
                  CLOUD SERVICES
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      Cloud Managed Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      Cloud Consulting
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      AWS
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">
                  DATA ANALYTICS
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      Business Intelligence
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">
                  BLOCKCHAIN<br />SERVICES
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      NFT Marketplace
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      Metaverse Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      Dapp Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      Blockchain Consulting
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      Cryptocurrency Exchange Development
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">
                  IT CONSULTING
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      Healthcare IT Consulting Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      IT Outsourcing Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      Managed IT Services
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">
                  ARTIFICIAL INTELLIGENCE
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      Generative AI
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      Computer Vision
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors block">
                      Machine Learning
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;