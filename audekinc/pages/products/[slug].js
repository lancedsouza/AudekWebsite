import { useState, useEffect } from "react";
import Image from "next/image";
import productData from "../../data/product"; // Assuming your product data is stored in this file
import Footer from "@/component/footer";

// This function will generate the static paths for all products
export async function getStaticPaths() {
  // Get the keys (slugs) from the productData object
  const paths = Object.keys(productData).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: "blocking", // Or 'true', if you want to load the page dynamically
  };
}

// This function will fetch the product data based on the slug
export async function getStaticProps({ params }) {
  const { slug } = params;
  // Access product data using the slug
  const product = productData[slug] || null;

  return {
    props: {
      product, // If product is not found, it will return null
    },
  };
}

// Main product page component
export default function ProductPage({ product }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (product?.images) {
        setCurrentImage((prev) => (prev + 1) % product.images.length);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [product]);

  if (!product) {
    return <div>Product not found</div>; // Handle product not found case
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">{product.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Left Info Box */}
        <div className="bg-gray-100 rounded-xl p-6 shadow-md col-span-1">
          <h2 className="text-xl font-bold mb-2">{product.title}</h2>
          <p className="text-lg font-semibold">{product.type}</p>
          <p className="mt-2">Battery: {product.battery}</p>
          <p>Part Number: {product.partNumber}</p>
          <p>Fitting Range: {product.fittingRange}</p>
          <p className="mt-4 font-medium">Available Colors:</p>
          <div className="flex gap-2 mt-2">
            {product.colors.map((color, index) => (
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
            src={product.images[currentImage]}
            alt={`Product image ${currentImage + 1}`}
            width={300}
            height={300}
            className="rounded-lg shadow-md object-contain transition duration-500 ease-in-out"
          />
          <div className="flex gap-2 mt-4">
            {product.images.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${idx === currentImage ? "bg-gray-800" : "bg-gray-400"}`}
                onClick={() => setCurrentImage(idx)}
              />
            ))}
          </div>
        </div>

        {/* Right - Downloads and Certifications */}
        <div className="col-span-1 flex flex-col items-center justify-between">
          <div className="space-y-4">
            <a
              href={product.datasheet}
              download
              className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-6 py-2 rounded-md text-lg font-semibold block text-center"
            >
              Download Datasheet
            </a>
            <a
              href={product.instructions}
              download
              className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-6 py-2 rounded-md text-lg font-semibold block text-center"
            >
              Download Instructions
            </a>
          </div>
          <div className="flex gap-4 mt-8 flex-wrap justify-center">
            {product.certifications.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Certification"
                width={40}
                height={40}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Description & Features */}
      <section className="bg-white mt-12 p-6 rounded-xl shadow-md w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p className="mb-6 text-gray-700">
          {product.description || "Product description is unavailable."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Standard Features</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Specifications</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {product.specifications.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <p className="text-center text-gray-500 text-sm mt-8">
        ©2025 Audek India, Ltd. All rights reserved.
      </p>
      <Footer/>
    </div>
  );
}
