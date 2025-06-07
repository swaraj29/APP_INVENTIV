import React from 'react';
import heroVideo from '../assets/Videos/hero-video.mp4'; // Video for both mobile and desktop

const Hero = () => {
  return (
    <section className="relative w-full flex flex-col md:h-screen md:overflow-hidden">
      {/* Mobile Layout: Split into two parts */}
      <div className="flex flex-col h-screen md:h-full md:bg-transparent bg-black">
        {/* Top Part: Text Content on Black Background (Mobile) */}
        <div className="flex-1 flex flex-col justify-center items-start text-white px-4 sm:px-6 md:px-16 lg:px-32 md:bg-transparent mt-12">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-4xl font-bold leading-tight max-w-4xl">
            Meet The Digital Drivers Of Global Disruptors
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-lg max-w-2xl text-gray-200">
            We catalyze business growth by reimagining digital experiences that conquer complex challenges through innovation and agility.
          </p>
          <button className="mt-4 sm:mt-6 bg-[#2970FF] hover:bg-[#165DFF] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold transition">
            Consult Our Experts →
          </button>
        </div>

        {/* Bottom Part: Video (Mobile) */}
        <div className="md:hidden w-full h-[250px] sm:h-[300px] px-4 mb-6">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={heroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Desktop Layout: Video as Background with Overlay */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full z-[-1]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Hero;
