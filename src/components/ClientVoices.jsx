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

  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.currentTime = 0;
        video.play();
      } else {
        video.pause();
      }
    }
  };

  return (
    <section className="py-14 px-4 sm:px-6 bg-gradient-to-br from-[#0c0320] to-[#330066] text-white">
      <h2 className="text-[24px] md:text-[40px] font-semibold text-center leading-snug md:leading-tight max-w-[320px] md:max-w-none mx-auto mb-10 md:mb-16">
        Our Clients Are Our Superheroes. We Prioritize <br />
        Delivering Excellent Products, Thorough Training, <br />
        And Optimal Execution
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
        {clients.map((client, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="w-[44vw] max-w-[300px] aspect-[3/4] bg-black rounded-2xl overflow-hidden shadow-lg relative group cursor-pointer"
              onClick={() => handleVideoClick(index)}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="w-full h-full object-cover"
                muted={mutedStates[index]}
                preload="metadata"
                playsInline
              >
                <source src={client.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button - always visible on mobile */}
              <div className="absolute inset-0 flex items-center justify-center z-10 sm:group-hover:opacity-0 opacity-100 transition-opacity duration-200">
                <div className="w-14 h-14 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-0 h-0 border-l-[18px] border-l-gray-800 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>

            <p className="mt-2 text-sm font-semibold text-white">{client.name}</p>
            <p className="text-xs text-gray-400 text-center">{client.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientVoices;
