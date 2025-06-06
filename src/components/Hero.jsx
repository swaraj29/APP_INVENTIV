import React from 'react';
import heroVideo from '../assets/Videos/hero-video.mp4'; // Make sure video is placed in src/assets

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start text-white px-6 md:px-16 lg:px-32">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl">
          Meet The Digital Drivers Of Global Disruptors
        </h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl max-w-2xl text-gray-200">
          We catalyze business growth by reimagining digital experiences that conquer complex challenges through innovation and agility.
        </p>
        <button className="mt-6 bg-[#2970FF] hover:bg-[#165DFF] text-white px-6 py-3 rounded-md font-semibold transition">
          Consult Our Experts →
        </button>
      </div>
    </section>
  );
};

export default Hero;
