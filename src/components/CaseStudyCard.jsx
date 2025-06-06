import React, { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

// Replace with your actual image imports
import img1 from "../assets/Images/showcase-adidas.webp";
import img2 from "../assets/Images/showcase-ikea.webp";
import img3 from "../assets/Images/showcase-pizzahut.webp";

const images = [img1, img2, img3];

const CaseStudyCard = () => {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  const handleWheel = (e) => {
    if (!containerRef.current) return;

    const delta = e.deltaY;
    if (delta > 0 && index < images.length - 1) {
      setIndex((prev) => prev + 1);
    } else if (delta < 0 && index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const ref = containerRef.current;
    if (ref) {
      ref.addEventListener("wheel", handleWheel, { passive: true });
    }
    return () => {
      if (ref) {
        ref.removeEventListener("wheel", handleWheel);
      }
    };
  }, [index]);

  const progressHeight = `${((index + 1) / images.length) * 100}%`;

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Scrollbar Line */}
      <div className="absolute top-24 right-20  h-136  w-[2px] bg-gray-600 z-10">
        <div
          className="absolute left-0 top-0 w-full bg-blue-600 transition-all duration-300"
          style={{ height: progressHeight }}
        />
      </div>

      <section className="px-4 md:px-24 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="flex-1 w-full">
            <p className="text-sm text-blue-500 mb-3">Case Study</p>
            <h2 className="text-4xl font-semibold mb-3">Adidas</h2>
            <p className="text-xl text-gray-300 mb-10">
              Scores the perfect digital landing in <br className="hidden md:block" />
              UAE
            </p>

            <p className="text-sm text-gray-400 uppercase mb-3">Results</p>

            <div className="flex gap-12 mb-10">
              <div>
                <p className="text-2xl font-bold">2M+</p>
                <p className="text-sm text-gray-400 mt-1">App downloads</p>
              </div>
              <div className="border-l border-gray-600 pl-12">
                <p className="text-2xl font-bold">500K</p>
                <p className="text-sm text-gray-400 mt-1">New users acquired</p>
              </div>
            </div>

            <button className="flex items-center gap-2 px-5 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300">
              View Case Study <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Scrollable Image */}
          <div className="flex-1 w-full relative">
            <div
              ref={containerRef}
              className="rounded-xl overflow-hidden h-[550px] w-[900px] relative"
            >
              <img
                src={images[index]}
                alt="Case Study"
                className="w-full h-full object-cover rounded-xl shadow-md transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyCard;
