"use client";
import Image from "next/image";

// Import images (Replace with actual image paths)
import chair1 from "../../public/pi1.png"; // Big Orange Chair
import chair2 from "../../public/pi4.png"; // White Fancy Chair
import chair3 from "../../public/Parent.png"; // Simple White Chair
import chair4 from "../../public/pi2.png"; // Grey Chair
import chair5 from "../../public/pi3.png"; // Wooden Stools

export default function PopularStyles() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 flex items-center gap-2">
      {/* Left Section */}
      <div className="relative w-[490px] h-[410px] ">
        <Image
          src={chair1}
          alt="Featured Chair"
          width={1000}
          height={1000}
          className="rounded-lg object-cover w-full h-full"
        />
        {/* Vertical Text */}
        <div className="absolute -left-[53%] top-1/2 -translate-y-1/2 rotate-[-90deg] text-lg font-bold tracking-widest text-gray-700">
          EXPLORE NEW AND POPULAR STYLES
        </div>
        {/* Floating Badge */}
        <div className="absolute bottom-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
          <span className="bg-green-500 w-6 h-6 flex items-center justify-center rounded-full text-white font-bold">
            M
          </span>
          2
        </div>
      </div>

      {/* Right Grid Section */}
      <div className="grid grid-cols-2 gap-2 w-[580px] ">
        <div className="relative w-[240px] h-[200px]">
          <Image
            src={chair2}
            alt="Chair 2"
            width={1500}
            height={1500}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="relative w-[240px] h-[200px]">
          <Image
            src={chair3}
            alt="Chair 3"
            width={2500}
            height={2500}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="relative w-[240px] h-[200px]">
          <Image
            src={chair4}
            alt="Chair 4"
            width={250}
            height={250}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="relative w-[240px] h-[200px]">
          <Image
            src={chair5}
            alt="Chair 5"
            width={250}
            height={250}
            className="rounded-lg object-cover w-full h-full"
          />
          {/* Floating Badge */}
          <div className="absolute bottom-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
            <span className="bg-gray-700 w-6 h-6 flex items-center justify-center rounded-full text-white font-bold">
              H
            </span>
            3
          </div>
        </div>
      </div>
    </div>
  );
}
