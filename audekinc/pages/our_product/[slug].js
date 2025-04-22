// pages/products/[slug].js

import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Mock product data (this could come from a CMS or API)
const productData = {
  "e-senzeB": {
    title: "Esenze-B",
    type: "BTE Hearing Aids",
    fittingRange: "MILD TO PROFOUND",
    colors: ["#edbb99", "#17202a"],
    images: ["/esenze-b.png", "/esenze-b.png"], // You can add more images
  },
};

export default function ProductInfo() {
  const router = useRouter();
  const { slug } = router.query;

  const data = productData[slug];
  const [currentImage, setCurrentImage] = useState(0);

  if (!slug || !data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg animate-pulse">
          Loading product details...
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Left - Info */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
          <p className="text-lg font-semibold text-gray-700">{data.type}</p>
          <p className="text-lg text-gray-600">{data.fittingRange}</p>

          <p className="mt-4 font-medium">Available Colors:</p>
          <div className="flex gap-2 mt-2">
            {data.colors.map((color, index) => (
              <div
                key={index}
                className="w-5 h-5 rounded-full border"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>

        {/* Middle - Image + Dots */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <Image
            src={data.images[currentImage]}
            alt={`Image ${currentImage + 1}`}
            width={300}
            height={200}
            className="rounded-lg shadow-sm transition duration-500 ease-in-out"
          />

          {/* Dots */}
          <div className="flex gap-2 mt-4">
            {data.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === currentImage ? "bg-gray-800" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right - You can add more info or a call to action here */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center">
          <p className="text-gray-500">More features coming soon!</p>
          <Link href="/">
            <span className="mt-4 text-blue-600 hover:underline cursor-pointer">
              Back to Home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
