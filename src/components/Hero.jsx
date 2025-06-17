import React, { useState, useEffect, useRef } from "react";
import { MoveRight } from 'lucide-react';

const Hero = () => {
  // State for counter animation
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(null);
  const targetValue = 500; // Target value for counter
  const duration = 2000; // Animation duration in ms

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    // Callback for Intersection Observer
    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start counter animation when element is visible
          animateCounter();
          observer.unobserve(entry.target);
        }
      });
    };

    // Create Intersection Observer
    const observer = new IntersectionObserver(handleIntersect, options);

    // Observe counter element
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  // Function for counter animation
  const animateCounter = () => {
    const start = 0;
    const end = targetValue;
    const increment = end / (duration / 60); // Estimated 60fps
    let current = start;

    const updateCounter = () => {
      current += increment;

      if (current < end) {
        setCounter(Math.floor(current));
        requestAnimationFrame(updateCounter);
      } else {
        setCounter(end);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return (
    <section className="w-full relative overflow-hidden min-h-[110vh] flex flex-col">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-teal-700 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-50/30 to-teal/100 animate-gradient z-0"></div>
      </div>

      {/* Desktop hero image */}
      <div className="absolute inset-0 z-0 hidden md:block -mt-24 pb-5"> {/* lebih naik gambar */}
        <img
          src="/image/hero-2.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 "></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-40 md:pt-48 md:px-6">
        <div className="max-w-3xl px-2 mx-auto text-center md:mt-7 md:pt-6">
          {/* Label */}
          {/* <div className="mb-3">
        <span className="font-sf text-xs py-1 px-4 text-gray-500 rounded-full border-gray-300 border-2 inline-block">
          Layanan Terapi Anak
        </span>
      </div> */}

          {/* Main headline */}
          <h1 className="font-sf md:pt-8 md:mt-8 text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:text-teal-700 border-3">
            Klinik Tumbuh Kembang Yamet Batam Batu Aji
          </h1>

          {/* Description */}
          <p className="font-sf text-white mb-8 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Layanan Terapi dan Konsultasi Tumbuh Kembang Anak oleh Tim Profesional
            Berpengalaman. Kami menyediakan pendekatan holistik untuk membantu anak Anda
            mencapai potensi maksimal.
          </p>

          {/* Call to action button */}
          <button className="font-sf bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium py-3 px-8 rounded-full hover:shadow-sm transition duration-400 text-lg up-transition border border-gray-200">
            Jadwalkan Konsultasi
          </button>
        </div>

        {/* Mobile hero image */}
        <div className="inset-0 md:hidden w-full h-full mt-10 relative">
          <div className="w-full h-full overflow-hidden shadow-lg relative">
            <img
              src="/image/hero-2.jpg" // Path diperbaiki, tidak perlu ../../public
              alt="Hero Mobile"
              className="w-full h-full object-cover object-top"
            />

      
          </div>
        </div>

      </div>
    </section>


  );
};

// Add this CSS to your global stylesheet or tailwind.config.js
// @keyframes gradient {
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// }
// 
// .animate-gradient {
//   background-size: 200% 200%;
//   animation: gradient 6s ease infinite;
// }

export default Hero;