import {
  FaHeartbeat,
  FaDollarSign,
  FaUtensils,
  FaShoppingCart,
  FaCarBattery,
  FaCogs,
  FaPlane,
  FaGraduationCap,
  FaMusic,
  FaRocket,
  FaBuilding,
  FaTruck,
  FaMobileAlt,
  FaWifi,
  FaUsers,
  FaSeedling,
} from 'react-icons/fa';

const industries = [
  { name: 'Healthcare', icon: FaHeartbeat },
  { name: 'Finance', icon: FaDollarSign },
  { name: 'Restaurant', icon: FaUtensils },
  { name: 'eCommerce', icon: FaShoppingCart },
  { name: 'Electric Vehicle (EV)', icon: FaCarBattery },
  { name: 'SaaS', icon: FaCogs },
  { name: 'Travel', icon: FaPlane },
  { name: 'Entertainment', icon: FaMusic },
  { name: 'On-Demand', icon: FaMobileAlt },
  { name: 'Social Media', icon: FaUsers },
  { name: 'Logistics', icon: FaTruck },
  { name: 'Education', icon: FaGraduationCap },
  { name: 'Real Estate', icon: FaBuilding },
  { name: 'Aviation', icon: FaRocket },
  { name: 'Agriculture', icon: FaSeedling },
  { name: 'Telecom', icon: FaWifi },
];

const IndustriesGrid = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-light leading-tight tracking-tight max-w-3xl">
            A Unified Vision That Caters To<br />Diverse Industry Demands
          </h2>
          <button className="mt-6 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-3 rounded-lg transition">
            Explore More In Industries
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {industries.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center bg-[#0D0D0D] rounded-xl p-6 border border-[#1F1F1F] hover:border-blue-600 transition duration-200"
            >
              <Icon className="w-6 h-6 mb-3 text-white" />
              <span className="text-white text-sm font-medium text-center">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;