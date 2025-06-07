import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/ttg3671/glowbal_assignment/refs/heads/main/testimonials');
        const data = await response.json();
        setTestimonials(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextTestimonial();
    }
    if (isRightSwipe) {
      prevTestimonial();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Elements - Hidden on mobile */}
      <div className="absolute top-0 left-0 w-full h-full hidden lg:block">
        {/* Left side testimonial cards - blurred background */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-20 blur-sm">
          <div className="w-64 h-40 bg-gray-800 rounded-lg border border-gray-700 p-4 mb-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-red-600 rounded text-xs flex items-center justify-center font-bold">
                A
              </div>
              <div className="ml-2 text-xs text-gray-400">AMERICANA</div>
            </div>
            <div className="text-xs text-gray-400">RESTAURANTS</div>
          </div>
        </div>

        {/* Right side testimonial card - blurred background */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20 blur-sm">
          <div className="w-64 h-40 bg-gray-800 rounded-lg border border-gray-700 p-4">
            <div className="text-xs text-gray-400 mb-2">
              We chose Appinventiv for their first-class finish. From the first meeting through delivery and commitment to receiving from us...
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 lg:mb-8 leading-tight px-2">
            First-Hand Opinions Of Clients On<br className="hidden sm:block" />
            <span className="block sm:inline"> Their Partnership Experience</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed px-4">
            We are a software and mobile application development company that ensures its expertise 
            extends to offer a seamlessly productive and growth-oriented partnership to its clients.
          </p>
        </div>

        {/* Navigation Arrows - Desktop only */}
        <div className="absolute top-20 lg:top-32 right-4 lg:right-8 z-20 hidden sm:block">
          <div className="flex gap-2 lg:gap-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors"
            >
              <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
          </div>
        </div>

        {/* Main Testimonial Cards with Touch Support */}
        <div 
          ref={containerRef}
          className="max-w-4xl mx-auto relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ minHeight: '450px' }}
        >
          {testimonials.map((testimonial, index) => {
            let position = 'translate-x-full opacity-0'; // Default: hidden to the right
            let zIndex = 0;
            
            if (index === currentIndex) {
              position = 'translate-x-0 opacity-100'; // Current: center and visible
              zIndex = 20;
            } else if (index === currentIndex - 1 || (currentIndex === 0 && index === testimonials.length - 1)) {
              position = '-translate-x-full opacity-0'; // Previous: hidden to the left
              zIndex = 10;
            }
            
            return (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${position}`}
                style={{ zIndex }}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-gray-800 p-4 sm:p-6 lg:p-8 xl:p-12 h-full min-h-[400px] lg:min-h-[450px]">
                  <div className="mb-6 lg:mb-8">
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-300">
                      {testimonial.testimonial}
                    </p>
                  </div>
                  
                  <hr className="border-gray-700 mb-6 lg:mb-8" />
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-700 rounded-full flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0">
                        <span className="text-base sm:text-lg lg:text-xl font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base leading-tight">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center self-end sm:self-auto">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mr-3 lg:mr-4">
                        {testimonial.position.includes('JobGet') ? 'JobGet' : 
                         testimonial.position.includes('Adidas') ? 'Adidas' : 
                         testimonial.position.includes('Americana') ? 'Americana' : 'FinTech'}
                      </div>
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-black font-bold text-sm sm:text-base lg:text-lg">
                          {testimonial.position.includes('JobGet') ? 'JG' : 
                           testimonial.position.includes('Adidas') ? 'AD' : 
                           testimonial.position.includes('Americana') ? 'AM' : 'FC'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="mt-4 lg:mt-6 flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 lg:w-5 lg:h-5 ${i < Math.floor(testimonial.rating) ? 'text-yellow-400' : 'text-gray-600'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-gray-400 text-sm lg:text-base">{testimonial.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex justify-center mt-6 gap-4 sm:hidden">
          <button 
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;