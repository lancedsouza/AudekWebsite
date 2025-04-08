


import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const HeroSection = ({ imageName }) => {
  const images = ['bte8.png','bte11.png','bte12.png','bte13.png']; // Your list of images

  return (
    <section className="w-full bg-black h-[600px] bg-gradient-to-r from-black to-red-500 border-amber-600 border">
      <h1 className="text-3xl font-semibold text-white drop-shadow-xl text-center">
        Hear the World with Audek
      </h1>

      <div
        className="overflow-hidden relative"
        style={{ width: '100%' }} // Make the container the width of the viewport
      >
        {/* Scrolling container */}
        <div
          className="flex animate-scroll whitespace-nowrap"
          style={{ animation: 'scroll 30s linear infinite' }}
        >
          {/* Duplicated images to create infinite scroll effect */}
          {images.concat(images).map((image, index) => (
            <div key={index} className="flex-shrink-0 mx-4">
              <Image
                className="rounded-lg"
                src={`/${image}`}
                alt={`Hero Image ${image}`}
                width={500}
                height={500}
                objectFit="cover"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

