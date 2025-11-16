import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import UserPic from "../../../public/UserPic.png";

export default function Reviews({ product }) {
  const ratingBars = [
    { label: "Excellent", value: 100 },
    { label: "Good", value: 11 },
    { label: "Average", value: 3 },
    { label: "Below Average", value: 8 },
    { label: "Poor", value: 1 },
  ];

  return (
    <div className=" p-6">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-6">Reviews</h2>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left Rating Box */}
        <div className="w-full md:w-1/4 bg-white shadow rounded-2xl p-6 text-center">
          <h1 className="text-[56px] font-medium">{product.rating}</h1>
          <p className="text-gray-500 text-sm mt-2">
            of {product.reviews.length} reviews
          </p>

          <div className="flex justify-center mt-3 text-yellow-400 text-xl">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>

        {/* Right Rating Bars */}
        <div className="w-full md:w-3/4 space-y-3">
          {ratingBars.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <p className="w-28 text-gray-700 text-[18px] font-medium">
                {item.label}
              </p>

              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-yellow-400 h-2 rounded-full"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>

              <p className="w-10 text-gray-600 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Comment Box */}
      <input
        type="text"
        placeholder="Leave Comment"
        className="w-full outline-none border border-[#cecece] mt-10 p-3 rounded-xl shadow-sm"
      />

      {/* User Review 1 */}
      <div className="mt-10 flex gap-4 p-5 bg-[#fafafa] shadow rounded-2xl">
        <div>
          <Image
            width={48}
            height={48}
            src={UserPic}
            alt="avatar"
            className=" object-cover"
          />
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center">
            <p className="font-semibold">{product?.reviews[0].reviewerName}</p>
            <p className="text-gray-400 text-sm">
              {product?.reviews[0].date.split("T")[0]}
            </p>
          </div>

          <div className="flex text-yellow-400 mt-1">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <FaStar className="text-gray-300" />
          </div>

          <p className="text-sm text-[#7E7E7E] mt-2 leading-relaxed">
            {product?.reviews[0].comment}
          </p>
        </div>
      </div>

      {/* User Review 2 */}
      <div className="mt-10 flex gap-4 p-5 bg-[#fafafa] shadow rounded-2xl">
        <div>
          <Image
            width={48}
            height={48}
            src={UserPic}
            alt="avatar"
            className=" object-cover"
          />
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center">
            <p className="font-semibold">{product?.reviews[1].reviewerName}</p>
            <p className="text-gray-400 text-sm">
              {product?.reviews[0].date.split("T")[1]}
            </p>
          </div>

          <div className="flex text-yellow-400 mt-1">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <FaStar className="text-gray-300" />
          </div>

          <p className="text-sm text-[#7E7E7E] mt-2 leading-relaxed">
            {product?.reviews[1].comment}
          </p>
        </div>
      </div>
    </div>
  );
}
