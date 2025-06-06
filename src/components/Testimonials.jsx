import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
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
      <div className="relative z-10 container mx-auto px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light mb-8 leading-tight">
            First-Hand Opinions Of Clients On<br />
            Their Partnership Experience
          </h1>
          <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
            We are a software and mobile application development company that ensures its expertise 
            extends to offer a seamlessly productive and growth-oriented partnership to its clients.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-32 right-8 z-20">
          <div className="flex gap-4">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Testimonial Cards with Individual Card Movement */}
        <div className="max-w-4xl mx-auto relative h-96">
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
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 md:p-12 h-full">
                  <div className="mb-8">
                    <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                      {testimonial.testimonial}
                    </p>
                  </div>
                  
                  <hr className="border-gray-700 mb-8" />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                        <span className="text-xl font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-400">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="text-4xl font-bold text-white mr-4">
                        {testimonial.position.includes('JobGet') ? 'JobGet' : 
                         testimonial.position.includes('Adidas') ? 'Adidas' : 'FinTech'}
                      </div>
                      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-black font-bold text-lg">
                          {testimonial.position.includes('JobGet') ? 'JG' : 
                           testimonial.position.includes('Adidas') ? 'AD' : 'FC'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="mt-6 flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(testimonial.rating) ? 'text-yellow-400' : 'text-gray-600'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-gray-400">{testimonial.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;