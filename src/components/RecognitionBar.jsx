import React from 'react';
import Deloitte from '../assets/Images/deloitte-2024.svg';
import Entrepreneur from '../assets/Images/entrepreneur-award-logo.svg';
import EconomicTimes from '../assets/Images/economictimes-badge.png';
import TimesBusiness from '../assets/Images/timesbusiness-badge.png';
import Clutch from '../assets/Images/clutch-badge-top-100.png';

const awards = [
  { src: Deloitte, alt: "Technology fast 50 award by Deloitte", height: "h-16 sm:h-16 md:h-24" },
  { src: Entrepreneur, alt: "Entrepreneur award", height: "h-10 sm:h-14 md:h-12", isEntrepreneur: true },
  { src: EconomicTimes, alt: "India's growth champions award by the Economic Times", height: "h-20 sm:h-12 md:h-16" },
  { src: TimesBusiness, alt: "Tech company of the year award by Times Business", height: "h-20 sm:h-10 md:h-14" },
  { src: Clutch, alt: "Top 100 Fastest-Growing Company for 2025 by Clutch", height: "h-20 sm:h-12 md:h-16" }
];

const RecognitionBar = () => {
  return (
    <div className="w-full bg-black py-8 flex justify-center items-center">
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-y-12 sm:gap-y-0 gap-x-8 sm:gap-x-20 max-w-screen-xl">
        {awards.map((award, index) => (
          <React.Fragment key={index}>
            <img
              src={award.src}
              alt={award.alt}
              className={`object-contain ${award.height}`}
            />
            {/* Divider: show only on medium and above between items */}
            {index !== awards.length - 1 && (
              <div className="hidden sm:block h-20 w-px bg-gray-600" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default RecognitionBar;