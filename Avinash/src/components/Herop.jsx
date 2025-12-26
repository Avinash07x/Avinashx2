import React, { useState, useEffect } from 'react';
import hero1 from '../assets/DC1.png';
import hero2 from '../assets/Weather.png';
import hero3 from '../assets/Unnatii1.png';

const Herop = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [isHacked, setIsHacked] = useState(false);

  const slides = [
    {
      id: 1,
      title: 'Digital Commerce',
      description: 'E-commerce platform with modern design',
      image: hero1
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'Real-time weather forecasting',
      image: hero2
    },
    {
      id: 3,
      title: 'Unnatii Project',
      description: 'Innovative solutions for growth',
      image: hero3
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsHacked(true);
    }, 1000);
  }, []);

  const goToNext = () => {
    setActiveSlide(prev => (prev >= slides.length ? 1 : prev + 1));
  };

  const goToSlide = (number) => {
    setActiveSlide(number);
  };

  return (
    <div className="relative h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-[600ms] ease-in-out pointer-events-none ${
            activeSlide === slide.id 
              ? 'translate-x-0 z-[2]' 
              : 'translate-x-0 z-0'
          }`}
          style={{ transitionDelay: activeSlide === slide.id ? '0ms' : '600ms' }}
        >
          {/* Blurred Background Layer */}
          <div
            className={`absolute w-full h-full overflow-hidden transition-all ${
              activeSlide === slide.id
                ? 'translate-x-0 opacity-100'
                : isHacked
                ? 'translate-x-full opacity-100'
                : 'translate-x-full opacity-0'
            }`}
            style={{
              transitionDuration: activeSlide === slide.id ? '450ms' : '900ms',
              transitionTimingFunction: 'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
              transitionDelay: activeSlide === slide.id ? '450ms' : '0ms',
              transformOrigin: activeSlide === slide.id ? '100% 50%' : '0% 50%'
            }}
          >
            <div
              className="absolute w-full h-full bg-cover bg-center transition-all duration-[450ms]"
              style={{
                backgroundImage: `url(${slide.image})`,
                filter: activeSlide === slide.id 
                  ? 'blur(8px) brightness(0.7)' 
                  : 'blur(0)',
                transitionDelay: activeSlide === slide.id ? '900ms' : '0ms'
              }}
            />
          </div>

          {/* Main Content Layer */}
          <div
            className={`w-full h-full absolute inset-0 transition-all duration-[450ms] ${
              activeSlide === slide.id ? 'pointer-events-auto' : ''
            }`}
            style={{
              transform: activeSlide === slide.id 
                ? 'scale(0.85) translateY(0)' 
                : 'scale(0.75) translateY(0)',
              opacity: activeSlide === slide.id ? 1 : 0,
              boxShadow: activeSlide === slide.id 
                ? '0 8px 32px rgba(0,0,0,0.3)' 
                : '0 12px 12px rgba(0,0,0,0)',
              transitionDelay: activeSlide === slide.id ? '900ms' : '0ms',
              transitionProperty: 'transform, box-shadow, opacity'
            }}
          >
            <div className="w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16">
              <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Text Content */}
                <div
                  className="text-white space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1"
                  style={{
                    fontFamily: "'Heebo', sans-serif",
                    opacity: activeSlide === slide.id ? 1 : 0,
                    transitionDelay: activeSlide === slide.id ? '1350ms' : '0ms',
                    transition: 'opacity 450ms'
                  }}
                >
                  <h1 
                    className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight pointer-events-none"
                    style={{ 
                      textShadow: '0 4px 12px rgba(0,0,0,0.3)',
                      lineHeight: '1.1'
                    }}
                  >
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light">
                    {slide.description}
                  </p>
                  
                  <div className="flex gap-4 justify-center lg:justify-start pt-4">
                    <button
                      onClick={goToNext}
                      className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      View Project
                    </button>
                    <button
                      onClick={goToNext}
                      className="cursor-pointer text-sm sm:text-base tracking-wider font-thin relative group inline-flex items-center px-4 py-3 text-white"
                    >
                      <span className="relative z-10">Next</span>
                      <span
                        className="block w-8 sm:w-12 bg-white h-[1px] absolute top-1/2 right-[-40px] sm:right-[-50px] transform -translate-y-1/2 origin-left transition-transform duration-[600ms] ease-in-out group-hover:scale-x-150"
                      />
                      <span
                        className="block w-2 h-2 border-t border-r border-white absolute top-1/2 right-[-50px] sm:right-[-62px] transform -translate-y-1/2 rotate-45 transition-transform duration-[600ms] ease-in-out group-hover:translate-x-3"
                      />
                    </button>
                  </div>
                </div>

                {/* Image Container */}
                <div 
                  className="relative order-1 lg:order-2"
                  style={{
                    opacity: activeSlide === slide.id ? 1 : 0,
                    transform: activeSlide === slide.id ? 'translateX(0)' : 'translateX(50px)',
                    transitionDelay: activeSlide === slide.id ? '1200ms' : '0ms',
                    transition: 'opacity 600ms, transform 600ms'
                  }}
                >
                  <div className="relative w-full aspect-[4/3] sm:aspect-video max-w-2xl mx-auto">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {slides.map((slide) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(slide.id)}
            className={`transition-all duration-300 rounded-full ${
              activeSlide === slide.id 
                ? 'w-8 sm:w-10 h-2 sm:h-2.5 bg-white' 
                : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${slide.id}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 sm:top-8 right-6 sm:right-8 text-white/80 text-sm sm:text-base font-light z-20">
        <span className="text-xl sm:text-2xl font-bold">{activeSlide}</span>
        <span className="mx-1">/</span>
        <span>{slides.length}</span>
      </div>
    </div>
  );
};

export default Herop;