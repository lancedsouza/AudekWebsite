


// import React, { useEffect, useRef } from 'react';
// import Image from 'next/image';

// const HeroSection = ({ imageName }) => {
//   const images = ['bte8.png','bte11.png','bte12.png','bte13.png']; // Your list of images
//   const [showImages,setshowImages]=useState(false)

//   function useEffect(()=>{
//     const timer = setTimeout(()=>{setshowImages(true)})

//   },[2000])
    
//   };

//   return (
//     <section className="w-full bg-black h-[900  px] bg-gradient-to-r from-black to-red-500 border-amber-600 border">
//       <h1 className="text-3xl font-semibold text-white drop-shadow-xl text-center">
//         Hear the World with Audek
//       </h1>

//       <div
//         className="overflow-hidden relative"
//         style={{ width: '100%' }} // Make the container the width of the viewport
//       >
//         {/* Scrolling container */}
//         <div
//           className="flex animate-scroll whitespace-nowrap"
//           style={{ animation: 'scroll 32s linear infinite' }}
//         >
//           {/* Duplicated images to create infinite scroll effect */}
//           {images.concat(images).map((image, index) => (
//             <div key={index} className="flex-shrink-0 mx-4">
//               <Image
//                 className="rounded-lg"
//                 src={`/${image}`}
//                 alt={`Hero Image ${image}`}
//                 width={1000}
//                 height={500}
//                 objectFit="cover"
//                 priority
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CSS Styles */}
//       <style jsx>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection;
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const images = ['bte8.png', 'bte11.png', 'bte12.png', 'bte13.png'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[600px] bg-gradient-to-r from-black to-red-500 overflow-hidden">
      
      {/* Background Image - full width */}
      <div className="absolute inset-0">
        <Image
          src={`/${images[currentIndex]}`}
          alt={`Hero Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="contain" // Fills width & height, may crop
          objectPosition='top'
          priority
        />
      </div>

      {/* Centered Text Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <h1 className="text-4xl font-semibold text-white text-center drop-shadow-lg">
          Hear the World with <span className="text-red-500">Audek</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;

