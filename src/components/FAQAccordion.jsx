import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  "What mobile app development services do you offer?",
  "What software development services do you offer?",
  "What is the average cost and timeline for developing a mobile app?",
  "How do you ensure the security and quality of the software you develop?",
  "Do you offer app maintenance and support services?",
  "Do you assist with software integration and data migration?",
];

const FAQSection = () => {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
          Frequently Asked Questions
        </h2>
        
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((question, index) => (
            <div
              key={index}
              className="bg-[#EEEEFF] rounded-[24px] px-8 py-8 flex justify-between items-start hover:shadow-sm transition-shadow min-h-[120px] md:min-h-[140px]"
            >
              <p className="text-[18px] md:text-[19px] font-medium text-black leading-relaxed pr-4 flex-1">
                {question}
              </p>
              <div className="flex-shrink-0 ml-4 mt-1">
                <ChevronDown className="w-6 h-6 text-black" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;