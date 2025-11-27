import Image from "next/image";
import React from "react";
import { FiX, FiCheck } from "react-icons/fi";
import controller from "../../../../public/controllerSmall.png";

export default function UploadList() {
  const uploads = [
    {
      name: "Product_thumbnail_1.png",
      img: controller,
      progress: "45%",
      error: true,
    },
    {
      name: "Product_thumbnail_2.png",
      img: controller,
      progress: "100%",
      success: true,
    },
    {
      name: "Product_thumbnail_3.png",
      img: controller,
      progress: "100%",
      success: true,
    },
    {
      name: "Product_thumbnail_4.png",
      img: controller,
      progress: "100%",
      success: true,
    },
    {
      name: "Product_thumbnail_5.png",
      img: controller,
      progress: "100%",
      success: true,
    },
  ];

  return (
    <div className="w-full space-y-4">
      {uploads.map((item, index) => (
        <div
          key={index}
          className="w-[503px] bg-white border border-[#E8EDF2] rounded-[5px] p-4 mt-[48px] flex items-center gap-4 hover:shadow-sm hover:scale-101 transition "
        >
          {/* Thumbnail */}
          <Image
            width={500}
            src={item.img}
            alt="thumb"
            className="w-12 h-12 rounded-md object-cover"
          />

          {/* Info */}
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <p className="text-sm font-medium text-gray-700">{item.name}</p>
              <span className="text-xs text-gray-500">{item.progress}</span>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  item.error ? "bg-red-400" : "bg-green-400"
                }`}
                style={{ width: item.progress }}
              ></div>
            </div>
          </div>

          {/* Status Icon */}
          {item.error ? (
            <div className="w-7 h-7 flex items-center justify-center bg-red-100 text-red-500 rounded-full">
              <FiX />
            </div>
          ) : (
            <div className="w-7 h-7 flex items-center justify-center bg-green-100 text-green-500 rounded-full">
              <FiCheck />
            </div>
          )}
        </div>
      ))}

      {/* ACTION BUTTONS */}
      <div className="flex gap-4 mt-6 flex-wrap">
        <button className="px-6 py-2 rounded-xl bg-purple-600 text-white font-medium">
          Update
        </button>

        <button className="px-6 py-2 rounded-xl bg-red-500 text-white font-medium">
          Delete
        </button>

        <button className="px-6 py-2 rounded-xl bg-gray-200 text-gray-600 font-medium">
          Cancel
        </button>
      </div>
    </div>
  );
}
