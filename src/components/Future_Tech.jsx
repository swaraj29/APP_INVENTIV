import React from 'react';
import { ChevronRight, Send, Cpu, Sparkles, Brain, Eye, Cloud, BarChart3, Wifi, Glasses } from 'lucide-react';

const TechSolutionsUI = () => {
  const features = [
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Artificial Intelligence",
      description: "We leverage our AI Development services to craft intelligent solutions that streamline operations and enhance decision-making capabilities."
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Generative AI", 
      description: "We utilize Generative AI technology to create solutions that produce new content, automate creative processes and enhance user experiences."
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Machine Learning",
      description: "We use ML to build intelligent systems that analyze data patterns and predict outcomes while continuously improving operations."
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Computer Vision",
      description: "We employ computer vision to analyze visual data, automate image processing tasks and enhance the accuracy and speed of visual recognition systems."
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      title: "Cloud",
      description: "We offer scalable and secure cloud consulting services that enhance flexibility and reduce IT overhead, allowing your team to focus on business growth."
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Data Science And Analytics",
      description: "We leverage data to extract actionable insights, helping your business make informed decisions and optimize operations."
    },
    {
      icon: <Wifi className="w-5 h-5" />,
      title: "IoT",
      description: "We create IoT apps that connect various devices seamlessly, boosting efficiency and opening new possibilities for enhanced automation and monitoring."
    },
    {
      icon: <Glasses className="w-5 h-5" />,
      title: "AR/VR",
      description: "We design and develop immersive AR and VR applications that offer engaging and interactive user experiences."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Main container with responsive flex direction */}
      <div className="flex flex-col lg:flex-row">
        {/* Left section - full width on mobile, 45% on desktop */}
        <div className="w-full lg:w-[45%] px-4 sm:px-8 lg:px-16 py-12 lg:py-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-8 lg:mb-16 max-w-lg">
            We Create New Solutions And Transform Existing Ones With Technologies That Beat Industry-Best Timelines
          </h1>

          {/* Card section */}
          <div className="bg-zinc-900 rounded-2xl p-6 sm:p-8 max-w-md relative">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 right-4 w-32 h-32 border border-white/10 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-20 h-20 border border-white/10 rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white/20 rounded-full"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/20 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="mb-6">
                <Send className="w-8 h-8 text-white transform rotate-45" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-medium mb-2">
                Fuel Your Digital-First Idea
              </h3>
              
              <p className="text-gray-400 mb-6 sm:mb-8 text-base">
                With 1600+ Transformation Experts
              </p>
              
              <button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 px-5 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-white w-full sm:w-auto">
                Innovate With Us
              </button>
            </div>
          </div>
        </div>

        {/* Right section - full width on mobile, 55% on desktop */}
        <div className="w-full lg:w-[55%] px-4 sm:px-8 lg:px-16 py-12 lg:py-20">
          <div className="h-full lg:max-h-[600px] lg:overflow-y-auto lg:pr-4">
            <div className="space-y-0">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 sm:gap-6 py-6 sm:py-8 border-b border-gray-800 last:border-b-0 group cursor-pointer hover:bg-gray-900/20 transition-colors duration-200 px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-lg"
                >
                  <div className="bg-white rounded-full p-2 sm:p-3 mt-1 flex-shrink-0">
                    <div className="text-black">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <h4 className="text-lg sm:text-xl font-medium text-white">
                        {feature.title}
                      </h4>
                      <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 ml-2 sm:ml-4" />
                    </div>
                    
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed pr-2 sm:pr-8">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSolutionsUI;