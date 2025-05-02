import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import productData from '@/data/product';

const Hero1 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
      {/* Column 1 */}
      <Link href="/our_product/e-senzeB" className="group">
        <div className="flex flex-col  rounded-3xl items-center justify-center bg-gray-200 hover:bg-red-500 transition duration-300 p-6">
          <Image
            src="/esenze-b-1.png"
            alt="Esenze-b"
            width={200}
            height={200}
            className="cursor-pointer transition-transform duration-300 group-hover:scale-120"
          />
          <p className="mt-4 text-center text-lg font-semibold text-gray-800 group-hover:text-white">
            Esenze-b
          </p>
        </div>
      </Link>

      {/* Col 2 */}
      <Link href="/our_product/esenze-nxt" className="group">
        <div className="flex flex-col rounded-3xl  items-center justify-center bg-gray-200 hover:bg-red-500 transition duration-300 p-6">
          <Image
            src="/esenze-nxt.png"
            alt="Esenze-next"
            width={200}
            height={200}
            className="cursor-pointer transition-transform duration-300 group-hover:scale-120"
          />
          <p className="mt-4 text-center text-lg font-semibold text-gray-800 group-hover:text-white">
            Esenze-nxt
          </p>
        </div>
      </Link>





      {/* Col3  */}
      <Link href="/our_product/airbuds" className="group">
        <div className="flex flex-col items-center justify-center rounded-3xl  bg-gray-200 hover:bg-red-500 transition duration-300 p-6">
          <Image
            src="/airbud.png"
            alt="Airbud"
            width={200}
            height={200}
            className="cursor-pointer transition-transform duration-300 group-hover:scale-120"
          />
          <p className="mt-4 text-center text-lg font-semibold text-gray-800 group-hover:text-white">
            Airbuds
          </p>
        </div>
      </Link>




      {/* Column 2 and 3 can be added here similarly */}
    </div>
  );
};

export default Hero1;
