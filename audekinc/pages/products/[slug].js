// // import { useRouter } from "next/router";
// // import { useEffect, useState } from "react";

// // const productData = {
// //   "ares-p": {
// //     title: "ARES - Programmable",
// //     type: "BTE Hearing Aids",
// //     battery: "13A Battery",
// //     partNumber: "BT9384P",
// //     fittingRange: "MODERATE TO PROFOUND",
// //     colors: ["#f1e9cf", "#000000", "#8b7c6e"],
// //     images: ["/ares-p.png","/ares-p-2.png","/ares-p-3.png","/ares-p-4.png","/ares-n-5.png","/ares-p-6.png"], // ✅ updated path
// //     datasheet: "/pdfs/ares-p-datasheet.pdf",
// //     instructions: "/pdfs/ares-p-instructions.pdf",
// //     certifications: ["/rohs.png"], // ✅ updated paths
// //   },
// // };

// // export default function ProductPage() {
// //   const router = useRouter();
// //   const { slug } = router.query;
// //   const data = productData[slug];

// //   const [currentImage, setCurrentImage] = useState(0);

// //   // Auto change image every 2 seconds
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       if (data?.images) {
// //         setCurrentImage((prev) => (prev + 1) % data.images.length);
// //       }
// //     }, 2000);
// //     return () => clearInterval(interval);
// //   }, [data]);

// //   if (!data) return <p className="p-6 text-red-600">Product not found</p>;

// //   return (
// //     <div className="flex flex-col items-center justify-center p-8">
// //       <h1 className="text-4xl font-bold mb-4">{data.title}</h1>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
// //         {/* Left Info Box */}
// //         <div className="bg-gray-100 rounded-xl p-6 shadow-md col-span-1">
// //           <h2 className="text-xl font-bold mb-2">{data.title}</h2>
// //           <p className="text-lg font-semibold">{data.type}</p>
// //           <p className="mt-2">Battery: {data.battery}</p>
// //           <p>Part Number: {data.partNumber}</p>
// //           <p>Fitting Range: {data.fittingRange}</p>
// //           <p className="mt-4 font-medium">Available Colors:</p>
// //           <div className="flex gap-2 mt-2">
// //             {data.colors.map((color, index) => (
// //               <div
// //                 key={index}
// //                 className="w-6 h-6 rounded-full border"
// //                 style={{ backgroundColor: color }}
// //               />
// //             ))}
       
// //           </div>
// //         </div>

        

// //         {/* Middle - Image Slider */}
// //         <div className="col-span-1 flex flex-col items-center justify-center">
// //           <img
// //             src={data.images[currentImage]}
// //             alt={`Image ${currentImage + 1}`}
// //             className="w-full max-w-sm rounded-lg shadow-md transition duration-500 ease-in-out"
// //           />
// //           <div className="flex gap-2 mt-4">
// //             {data.images.map((_, idx) => (
// //               <button
// //                 key={idx}
// //                 className={`w-3 h-3 rounded-full ${
// //                   idx === currentImage ? "bg-gray-800" : "bg-gray-400"
// //                 }`}
// //                 onClick={() => setCurrentImage(idx)}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         {/* Right - Downloads and Certifications */}
// //         <div className="col-span-1 flex flex-col items-center justify-between">
// //           <div className="space-y-4">
// //             <a
// //               href={data.datasheet}
// //               download
// //               className="bg-red-600 text-white px-6 py-2 rounded-md text-lg font-semibold block text-center"
// //             >
// //               Download Datasheet
// //             </a>
// //             <a
// //               href={data.instructions}
// //               download
// //               className="bg-red-600 text-white px-6 py-2 rounded-md text-lg font-semibold block text-center"
// //             >
// //               Download Instructions
// //             </a>
// //           </div>
// //           <div className="flex gap-4 mt-8 flex-wrap justify-center">
// //             {data.certifications.map((src, i) => (
// //               <img key={i} src={src} alt="certification" className="h-10" />
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
    
  
// //           );
// // }
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// const productData = {
//   "ares-p": {
//     title: "ARES - Programmable",
//     type: "BTE Hearing Aids",
//     battery: "13A Battery",
//     partNumber: "BT9384P",
//     fittingRange: "MODERATE TO PROFOUND",
//     colors: ["#f1e9cf", "#000000", "#8b7c6e"],
//     images: [
//       "/ares-p.png",
//       "/ares-p-2.png",
//       "/ares-p-3.png",
//       "/ares-p-4.png",
//       "/ares-n-5.png",
//       "/ares-p-6.png",
//     ],
//     datasheet: "/pdfs/ares-p-datasheet.pdf",
//     instructions: "/pdfs/ares-p-instructions.pdf",
//     certifications: ["/rohs.png"],
//   },
// };

// export default function ProductPage() {
//   const router = useRouter();
//   const { slug } = router.query;
//   const data = productData[slug];

//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (data?.images) {
//         setCurrentImage((prev) => (prev + 1) % data.images.length);
//       }
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [data]);

//   if (!data) return <p className="p-6 text-red-600">Product not found</p>;

//   return (
//     <div className="flex flex-col items-center justify-center p-8">
//       <h1 className="text-4xl font-bold mb-4">{data.title}</h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
//         {/* Left Info Box */}
//         <div className="bg-gray-100 rounded-xl p-6 shadow-md col-span-1">
//           <h2 className="text-xl font-bold mb-2">{data.title}</h2>
//           <p className="text-lg font-semibold">{data.type}</p>
//           <p className="mt-2">Battery: {data.battery}</p>
//           <p>Part Number: {data.partNumber}</p>
//           <p>Fitting Range: {data.fittingRange}</p>
//           <p className="mt-4 font-medium">Available Colors:</p>
//           <div className="flex gap-2 mt-2">
//             {data.colors.map((color, index) => (
//               <div
//                 key={index}
//                 className="w-6 h-6 rounded-full border"
//                 style={{ backgroundColor: color }}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Middle - Image Slider */}
//         <div className="col-span-1 flex flex-col items-center justify-center">
//           <img
//             src={data.images[currentImage]}
//             alt={`Image ${currentImage + 1}`}
//             className="w-full max-w-sm rounded-lg shadow-md transition duration-500 ease-in-out"
//           />
//           <div className="flex gap-2 mt-4">
//             {data.images.map((_, idx) => (
//               <button
//                 key={idx}
//                 className={`w-1 h-1 rounded-full ${
//                   idx === currentImage ? "bg-gray-800" : "bg-gray-400"
//                 }`}
//                 onClick={() => setCurrentImage(idx)}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Right - Downloads and Certifications */}
//         <div className="col-span-1 flex flex-col items-center justify-between">
//           <div className="space-y-4">
//             <a
//               href={data.datasheet}
//               download
//               className="bg-red-600 text-white px-6 py-2 rounded-md text-lg font-semibold block text-center"
//             >
//               Download Datasheet
//             </a>
//             <a
//               href={data.instructions}
//               download
//               className="bg-red-600 text-white px-6 py-2 rounded-md text-lg font-semibold block text-center"
//             >
//               Download Instructions
//             </a>
//           </div>
//           <div className="flex gap-4 mt-8 flex-wrap justify-center">
//             {data.certifications.map((src, i) => (
//               <img key={i} src={src} alt="certification" className="h-10" />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Description and Features Section */}
//       <div className="col-span-3 bg-white mt-12 p-6 rounded-xl shadow-md w-full max-w-6xl">
//         <h2 className="text-2xl font-bold mb-4">Description</h2>
//         <p className="mb-6 text-gray-700">
//           Classic model type covering moderate to profound hearing loss makes
//           this housing very popular in the market. Wheel VC and convenient
//           pushbutton makes it very easy to be adjusted, which frees you from
//           purchasing batteries frequently.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <h3 className="text-xl font-semibold mb-2">Standard Features</h3>
//             <ul className="list-disc list-inside text-gray-700 space-y-1">
//               <li>Exquisitely Well-fit</li>
//               <li>Low Battery Indicator and Start-Up Indicator</li>
//               <li>DFC, Expansion</li>
//               <li>Instantaneous Noise Blocking System</li>
//               <li>Power on Delay</li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-xl font-semibold mb-2">
//               Specification Creatively
//             </h3>
//             <ul className="list-disc list-inside text-gray-700 space-y-1">
//               <li>Channel / Band: 16/08</li>
//               <li>Battery Life: 220</li>
//               <li>Fitting Range: 10–110</li>
//               <li>Programs: 4</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <p className="text-center text-gray-500 text-sm mt-8">
//         ©2025 Audek India, Ltd. All rights reserved.
//       </p>
//     </div>
//   );
// }
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

const productData = {
  "ares-p": {
    title: "ARES - Programmable",
    type: "BTE Hearing Aids",
    battery: "13A Battery",
    partNumber: "BT9384P",
    fittingRange: "MODERATE TO PROFOUND",
    colors: ["#f1e9cf", "#000000", "#8b7c6e"],
    images: [
      "/ares-p.png",
      "/ares-p-2.png",
      "/ares-p-3.png",
      "/ares-p-4.png",
      "/ares-n-5.png",
      "/ares-p-6.png",
    ],
    datasheet: "/pdfs/ares-p-datasheet.pdf",
    instructions: "/pdfs/ares-p-instructions.pdf",
    certifications: ["/rohs.png"],
  },
};

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;
  const data = productData[slug];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (data?.images) {
        setCurrentImage((prev) => (prev + 1) % data.images.length);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [data]);

  if (!router.isReady) return null;
  if (!data) return <p className="p-6 text-red-600">Product not found</p>;

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">{data.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Left Info Box */}
        <div className="bg-gray-100 rounded-xl p-6 shadow-md col-span-1">
          <h2 className="text-xl font-bold mb-2">{data.title}</h2>
          <p className="text-lg font-semibold">{data.type}</p>
          <p className="mt-2">Battery: {data.battery}</p>
          <p>Part Number: {data.partNumber}</p>
          <p>Fitting Range: {data.fittingRange}</p>
          <p className="mt-4 font-medium">Available Colors:</p>
          <div className="flex gap-2 mt-2">
            {data.colors.map((color, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Middle - Image Slider */}
        <div className="col-span-1 flex flex-col items-center justify-center">
          <Image
            src={data.images[currentImage]}
            alt={`Product image ${currentImage + 1}`}
            width={300}
            height={300}
            className="rounded-lg shadow-md object-contain transition duration-500 ease-in-out"
          />
          <div className="flex gap-2 mt-4">
            {data.images.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Slide ${idx + 1}`}
                className={`w-3 h-3 rounded-full transition ${
                  idx === currentImage ? "bg-gray-800 scale-110" : "bg-gray-400"
                }`}
                onClick={() => setCurrentImage(idx)}
              />
            ))}
          </div>
        </div>

        {/* Right - Downloads and Certifications */}
        <div className="col-span-1 flex flex-col items-center justify-between">
          <div className="space-y-4">
            <a
              href={data.datasheet}
              download
              className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-6 py-2 rounded-md text-lg font-semibold block text-center"
            >
              Download Datasheet
            </a>
            <a
              href={data.instructions}
              download
              className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-6 py-2 rounded-md text-lg font-semibold block text-center"
            >
              Download Instructions
            </a>
          </div>
          <div className="flex gap-4 mt-8 flex-wrap justify-center">
            {data.certifications.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Certification"
                width={40}
                height={40}
                className="h-10"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Description & Features Section */}
      <section className="col-span-3 bg-white mt-12 p-6 rounded-xl shadow-md w-full max-w-6xl" aria-labelledby="features">
        <h2 id="features" className="text-2xl font-bold mb-4">Description</h2>
        <p className="mb-6 text-gray-700">
          Classic model type covering moderate to profound hearing loss makes
          this housing very popular in the market. Wheel VC and convenient
          pushbutton makes it very easy to be adjusted, which frees you from
          purchasing batteries frequently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Standard Features</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Exquisitely Well-fit</li>
              <li>Low Battery Indicator and Start-Up Indicator</li>
              <li>DFC, Expansion</li>
              <li>Instantaneous Noise Blocking System</li>
              <li>Power on Delay</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Specifications</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Channel / Band: 16 / 08</li>
              <li>Battery Life: 220 hours</li>
              <li>Fitting Range: 10–110 dB</li>
              <li>Programs: 4</li>
            </ul>
          </div>
        </div>
      </section>

      <p className="text-center text-gray-500 text-sm mt-8">
        ©2025 Audek India, Ltd. All rights reserved.
      </p>
    </div>
  );
}
