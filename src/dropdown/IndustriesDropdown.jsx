import React from "react";
import { 
  Smartphone, Heart, Stethoscope, Utensils, Clapperboard, 
  Plane, Bike, Calendar, Fuel, Radio, HardHat, Rocket,
  ShoppingCart, Monitor, Gamepad2, Dumbbell, DollarSign,
  Vote, Users, Building2, Shield, Store, Truck,
  Home, GraduationCap, Newspaper, Package, 
  Wheat, Zap, Car, Factory, Tv
} from "lucide-react";

const DiverseCapabilities = () => {
  const industriesColumn1 = [
    { icon: Smartphone, label: "On Demand" },
    { icon: Heart, label: "Healthcare" },
    { icon: Stethoscope, label: "Telemedicine" },
    { icon: Utensils, label: "Restaurant" },
    { icon: Clapperboard, label: "Entertainment" },
    { icon: Plane, label: "Travel" },
    { icon: Bike, label: "E-scooter" },
    { icon: Calendar, label: "Events" },
    { icon: Fuel, label: "Oil and Gas" },
    { icon: Radio, label: "Telecom" },
    { icon: HardHat, label: "Construction" },
    { icon: Rocket, label: "Startup" }
  ];

  const industriesColumn2 = [
    { icon: ShoppingCart, label: "eCommerce" },
    { icon: Monitor, label: "SaaS" },
    { icon: Gamepad2, label: "Games" },
    { icon: Dumbbell, label: "Wellness" },
    { icon: DollarSign, label: "Finance" },
    { icon: Vote, label: "Politics" },
    { icon: Users, label: "Social Networking" },
    { icon: Building2, label: "Banking" },
    { icon: Shield, label: "Insurance" },
    { icon: Store, label: "Retail" },
    { icon: Truck, label: "Food Delivery" }
  ];

  const industriesColumn3 = [
    { icon: Home, label: "Real Estate" },
    { icon: GraduationCap, label: "Education" },
    { icon: Newspaper, label: "News" },
    { icon: Package, label: "Logistics" },
    { icon: Plane, label: "Aviation" },
    { icon: Wheat, label: "Agriculture" },
    { icon: Zap, label: "EV" },
    { icon: Car, label: "Automotive" },
    { icon: Factory, label: "Manufacturing" },
    { icon: Tv, label: "OTT" }
  ];

  const IndustryItem = ({ icon: Icon, label }) => (
    <div className="flex items-center gap-3 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150 rounded-md px-2">
      <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-white" />
      </div>
      <span className="text-gray-800 font-medium text-sm">{label}</span>
    </div>
  );

  return (
    <div className="absolute top-full -left-204 mt-1 w-[1200px] bg-white text-gray-900 rounded-lg shadow-xl border border-gray-200 z-50">
      <div className="flex">
        {/* Left Column - Image and Content */}
        <div className="w-80 p-8 bg-white border-r border-gray-200">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
              Diverse Capabilities
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              that deploy customized solutions in a wide range of industries
            </p>
          </div>
          
          {/* Image Container */}
          <div className="mb-6 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop&crop=center" 
              alt="Supply Chain Solutions" 
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              Read our developments that has helped the{" "}
              <span className="text-red-500 underline cursor-pointer font-medium hover:text-red-600">
                Supply Chain
              </span>{" "}
              Industry boom in India
            </p>
            
            {/* Arrow Button */}
            <div className="flex">
              <button className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 border border-gray-300">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Columns - Industries Grid */}
        <div className="flex-1 p-8">
          <div className="grid grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="space-y-1">
              {industriesColumn1.map((industry, index) => (
                <IndustryItem key={index} icon={industry.icon} label={industry.label} />
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-1">
              {industriesColumn2.map((industry, index) => (
                <IndustryItem key={index} icon={industry.icon} label={industry.label} />
              ))}
            </div>

            {/* Column 3 */}
            <div className="space-y-1">
              {industriesColumn3.map((industry, index) => (
                <IndustryItem key={index} icon={industry.icon} label={industry.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiverseCapabilities;