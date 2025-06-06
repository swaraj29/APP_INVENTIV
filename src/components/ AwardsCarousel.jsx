import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import badge1 from "../assets/images/clutch-badge-top-100.png";
import badge2 from "../assets/images/clutch-badge-top-100.png";
import badge3 from "../assets/images/clutch-badge-top-100.png";
import badge4 from "../assets/images/clutch-badge-top-100.png";
import badge5 from "../assets/images/clutch-badge-top-100.png";

const awards = [
  { image: badge1, year: "2022", title: "Best Place To Work" },
  { image: badge2, year: "2020", title: "Top Mobile App Developers" },
  { image: badge3, year: "2020", title: "App Development Company Of The Year" },
  { image: badge4, year: "2025", title: "Fastest-Growing Company" },
];

const AwardsCarousel = () => {
  const scrollRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    const container = scrollRef.current;

    // Clone items for infinite scroll illusion
    if (container && container.children.length === awards.length) {
      awards.forEach((award) => {
        const clone = container.children[0].cloneNode(true);
        container.appendChild(clone);
      });
    }

    const interval = setInterval(() => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      container.scrollBy({ left: 340, behavior: "smooth" });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const manualScroll = (dir) => {
    if (!scrollRef.current) return;
    const offset = dir === "left" ? -340 : 340;
    scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white py-16 relative">
      <div className="flex items-center justify-center gap-6 mb-10 px-6">
        <h2 className="text-4xl font-semibold text-center max-w-4xl">
          Our Growth Journey As A Mobile App Development Company
          <br />
          Has Bagged A Few Reputed Accolades As Well
        </h2>

        {/* Arrows beside heading */}
        <div className="flex gap-4">
          <button
            onClick={() => manualScroll("left")}
            className="w-12 h-12 border border-white rounded-full flex items-center justify-center"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => manualScroll("right")}
            className="w-12 h-12 border border-white rounded-full flex items-center justify-center"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* Scrollable Awards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar px-8 scroll-smooth"
      >
        {[...awards, ...awards].map((award, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-[300px] bg-zinc-900 border border-zinc-700 rounded-xl flex flex-col items-center p-6 text-center"
          >
            <img
              src={award.image}
              alt={award.title}
              className="w-36 h-36 object-contain mb-4"
            />
            <p className="text-gray-400 text-sm">{award.year}</p>
            <p className="text-lg font-medium mt-1">{award.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsCarousel;
