import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const awards = [
  {
    year: "2023",
    title: "Top Mobile App Development Companies",
    badge: "MOBILE APP DAILY",
    subtitle: "FASTEST GROWING APP DEVELOPMENT COMPANIES",
    isClutch: false,
  },
  {
    year: "2022",
    title: "Best Place To Work",
    badge: "CLUTCH",
    subtitle: "TOP RATED WORKPLACE",
    isClutch: true,
  },
  {
    year: "2021",
    title: "Top Mobile App Developers",
    badge: "GOODFIRMS",
    subtitle: "LEADING APP DEVELOPERS",
    isClutch: false,
  },
  {
    year: "2020",
    title: "App Development Company Of The Year",
    badge: "TECHREVIEWER",
    subtitle: "EXCELLENCE IN MOBILE DEVELOPMENT",
    isClutch: false,
  },
];

const BadgeIcon = ({ badge, subtitle, isClutch }) => (
  <div className="w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center mb-4 border-4 border-gray-200">
    {isClutch ? (
      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
        <span className="text-gray-500 text-xs">CLUTCH LOGO</span>
      </div>
    ) : (
      <div className="text-black text-center">
        <div className="flex justify-center mb-1">
          <span className="text-xs">★</span>
          <span className="text-xs mx-1">★</span>
          <span className="text-xs">★</span>
        </div>
        <div className="text-xs font-semibold mb-1">FEATURED ON</div>
        <div className="bg-red-600 text-white text-xs px-2 py-1 rounded mb-1 font-bold">
          {badge}
        </div>
        <div className="text-xs font-medium px-1 leading-tight">
          {subtitle}
        </div>
      </div>
    )}
  </div>
);

const MobileAwardsCarousel = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(awards.length); // Start in the middle set for infinite scroll
  const [leftButtonClicked, setLeftButtonClicked] = useState(false);
  const [rightButtonClicked, setRightButtonClicked] = useState(false);

  // Duplicate awards array for infinite scrolling
  const extendedAwards = [...awards, ...awards, ...awards];

  // Update scroll position
  useEffect(() => {
    if (scrollRef.current) {
      // Calculate card width dynamically based on screen size, including gap
      const getCardWidth = () => {
        if (window.innerWidth < 768) return 260 + 24; // min-w-[260px] + gap-6
        if (window.innerWidth < 1024) return 300 + 24; // md:min-w-[300px] + gap-6
        return 320 + 24; // lg:min-w-[320px] + gap-6
      };
      const cardWidth = getCardWidth();

      const scrollPosition = currentIndex * cardWidth;
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });

      // Reset scroll to middle set when reaching boundaries for infinite effect
      if (currentIndex >= awards.length * 2) {
        // If we've scrolled past the second set, reset to the equivalent position in the first set
        setTimeout(() => {
          scrollRef.current.scrollTo({
            left: awards.length * cardWidth,
            behavior: "auto", // Use 'auto' for instant jump
          });
          setCurrentIndex(awards.length);
        }, 300); // Small delay to allow smooth scroll to finish
      } else if (currentIndex < awards.length) {
        // If we've scrolled back before the first set, reset to the equivalent position in the second set
        setTimeout(() => {
          scrollRef.current.scrollTo({
            left: awards.length * cardWidth,
            behavior: "auto", // Use 'auto' for instant jump
          });
          setCurrentIndex(awards.length);
        }, 300); // Small delay to allow smooth scroll to finish
      }
    }
  }, [currentIndex]);

  const manualScroll = (direction) => {
    if (direction === "left") {
      setLeftButtonClicked(true);
      setTimeout(() => setLeftButtonClicked(false), 200); // Reset color after 200ms
      setCurrentIndex((prev) => prev - 1);
    } else {
      setRightButtonClicked(true);
      setTimeout(() => setRightButtonClicked(false), 200); // Reset color after 200ms
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight mb-6 max-w-4xl mx-auto">
          Our Growth Journey As A Mobile App Development Company Has Bagged A
          Few Reputed Accolades As Well
        </h1>
      </div>

      {/* Awards Carousel */}
      <div className="flex justify-center mb-8">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth max-w-xs md:max-w-4xl lg:max-w-6xl no-scrollbar"
          // Removed inline style for scrollbarWidth and msOverflowStyle and used utility class
        >
          {extendedAwards.map((award, index) => (
            <div
              key={index} // Using index as key is generally discouraged but acceptable for static lists
              className="min-w-[260px] max-w-[260px] md:min-w-[300px] md:max-w-[300px] lg:min-w-[320px] lg:max-w-[320px] bg-zinc-900 border border-zinc-700 rounded-lg flex flex-col items-center p-6 text-center"
            >
              <BadgeIcon
                badge={award.badge}
                subtitle={award.subtitle}
                isClutch={award.isClutch}
              />
              <p className="text-gray-400 text-lg mb-2">{award.year}</p>
              <p className="text-white text-lg font-medium leading-tight">
                {award.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => manualScroll("left")}
          className={`w-14 h-14 border border-white rounded-full flex items-center justify-center transition-colors duration-200 ${
            leftButtonClicked
              ? "bg-blue-600 text-white"
              : "bg-black text-white hover:bg-white hover:text-black"
          }`}
          aria-label="Previous award"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={() => manualScroll("right")}
          className={`w-14 h-14 border border-white rounded-full flex items-center justify-center transition-colors duration-200 ${
            rightButtonClicked
              ? "bg-blue-600 text-white"
              : "bg-black text-white hover:bg-white hover:text-black"
          }`}
          aria-label="Next award"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default MobileAwardsCarousel;