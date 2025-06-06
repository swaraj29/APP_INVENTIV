import React, { useRef, useState } from "react";
// Import video files
import video1 from "../assets/Videos/healthcare-product-testimonial.mp4";
import video2 from "../assets/Videos/plandid-testimonial.mp4";
import video3 from "../assets/Videos/saying-about-appinventiv.mp4";
import video4 from "../assets/Videos/tourist-testimonial.mp4";

const clients = [
  {
    name: "Edgar",
    title: "CEO, Street Smart 242",
    video: video1,
  },
  {
    name: "Tushar Patel",
    title: "CEO, DoList App",
    video: video2,
  },
  {
    name: "Daniel Zukich",
    title: "Co-founder, Plandid",
    video: video3,
  },
  {
    name: "Fred McCaw",
    title: "CEO, McCaw Digital LLC",
    video: video4,
  },
];

const ClientVoices = () => {
  const videoRefs = useRef([]);
  const [mutedStates, setMutedStates] = useState(clients.map(() => true));

  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const toggleMute = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.muted = !video.muted;
      setMutedStates(prev => {
        const newStates = [...prev];
        newStates[index] = video.muted;
        return newStates;
      });
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#0c0320] to-[#330066] text-white text-center">
      <h2 className="text-[32px] md:text-[40px] font-semibold leading-tight mb-16">
        Our Clients Are Our Superheroes. We Prioritize <br />
        Delivering Excellent Products, Thorough Training, And <br />
        Optimal Execution
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
        {clients.map((client, index) => (
          <div key={index} className="flex flex-col items-center">
            <div 
              className="w-[240px] h-[370px] bg-black rounded-xl overflow-hidden shadow-lg relative group cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <video
                ref={el => videoRefs.current[index] = el}
                className="w-full h-full object-cover"
                muted={mutedStates[index]}
                preload="metadata"
                playsInline
              >
                <source src={client.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Audio Control Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute(index);
                }}
                className="absolute top-4 right-4 w-8 h-8 bg-black bg-opacity-60 rounded-full flex items-center justify-center text-white hover:bg-opacity-80 transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                {mutedStates[index] ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.776L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.797-3.776zm2.617 5.11a1 1 0 011.414 0L15 9.772l1.586-1.586a1 1 0 011.414 1.414L16.414 11.2 18 12.786a1 1 0 11-1.414 1.414L15 12.614l-1.586 1.586a1 1 0 11-1.414-1.414L13.586 11.2 12 9.614a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.776L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.797-3.776zm7.824 5.09a1 1 0 01.04 1.414A7.001 7.001 0 0115 12a1 1 0 11-2 0 5.001 5.001 0 001.49-3.586 1 1 0 011.414-.04zm-2.07-2.07a1 1 0 01.04 1.414A3.001 3.001 0 0116 10a1 1 0 11-2 0c0-.464-.126-.898-.346-1.272a1 1 0 011.414-.04z" clipRule="evenodd" />
                  </svg>
                )}
              </button>

              {/* Play Button Overlay - Always visible initially */}
              <div className="absolute inset-0 flex items-center justify-center z-10 group-hover:opacity-0 transition-opacity duration-200">
                <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-opacity-100 transition-all duration-200">
                  <div className="w-0 h-0 border-l-[20px] border-l-gray-800 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-[16px] font-semibold">{client.name}</p>
            <p className="text-[14px] text-gray-300">{client.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientVoices;