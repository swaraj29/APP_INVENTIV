import React from 'react';
import Deloitte from '../assets/Images/deloitte-2024.svg';
import Entrepreneur from '../assets/Images/entrepreneur-award-logo.svg';
import EconomicTimes from '../assets/Images/economictimes-badge.png';
import TimesBusiness from '../assets/Images/timesbusiness-badge.png';
import Clutch from '../assets/Images/clutch-badge-top-100.png';

const awards = [
  { src: Deloitte, alt: "Technology fast 50 award by Deloitte" },
  { src: Entrepreneur, alt: "Entrepreneur award" },
  { src: EconomicTimes, alt: "India's growth champions award by the Economic Times" },
  { src: TimesBusiness, alt: "Tech company of the year award by Times Business" },
  { src: Clutch, alt: "Top 100 Fastest-Growing Company for 2025 by Clutch" }
];

const RecognitionBar = () => {
  return (
    <div className="w-full bg-black py-8 flex justify-center items-center">
      <div className="flex flex-wrap items-center justify-center gap-x-12">
        {awards.map((award, index) => (
          <React.Fragment key={index}>
            <img
              src={award.src}
              alt={award.alt}
              className="h-20 object-contain"
            />
            {index !== awards.length - 1 && (
              <div className="h-14 w-px bg-gray-500 mx-4"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default RecognitionBar;
