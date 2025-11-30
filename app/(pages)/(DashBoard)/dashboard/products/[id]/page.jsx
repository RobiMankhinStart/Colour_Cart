import React from "react";

import {
  Bold,
  Italic,
  Underline,
  ImageIcon,
  LinkIcon,
  List,
  ListOrdered,
  Minus,
} from "lucide-react";
import { FiChevronDown, FiX } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import ProductGallery from "@/app/components/DashBoard/productsDetails/ProductGallery";
import UploadList from "@/app/components/DashBoard/productsDetails/UploadList";
import Link from "next/link";
// import ProductGallery from "./ProductGallery";
// import UploadList from "./UploadList";

const ProductDetails = () => {
  return (
    <div className="flex flex-col px-[23px]">
      <div>
        <h2 className="text-[28px] font-bold font-poppins">Orders List</h2>

        {/* bread Curmbs  */}
        <div className="flex items-center gap-2 pt-3 pb-6">
          <Link
            href={"/dashboard"}
            className=" flex gap-0.5 items-center cursor-pointer hover:scale-110 duration-200"
          >
            <GoHome className="mb-0.5 text-[#7E7E8F]" />
            <h3 className="text-[#7E7E8F] font-poppins text-[12px]">Home</h3>
          </Link>
          <MdKeyboardDoubleArrowRight className="text-[#7E7E8F]" />
          <Link
            href={"/dashboard/products"}
            className="text-[#7E7E8F] font-poppins text-[12px] cursor-pointer hover:scale-110 duration-200"
          >
            Products
          </Link>
          <MdKeyboardDoubleArrowRight className="text-[#7E7E8F]" />
          <h3 className="text-[#7364DB] font-poppins text-[12px] cursor-pointer hover:scale-110 duration-200">
            Product Details
          </h3>
        </div>
      </div>
      <div className="    ">
        <div className="flex w-[1200px] justify-between  bg-white rounded-xl shadow border border-gray-200 p-8">
          {/* LEFT SECTION */}
          <div className="space-y-6 ">
            {/* Product Name */}
            <div className="flex flex-col">
              <label className="text-[16px] font-medium font-main text-[#07070C]">
                Product Name
              </label>
              <input
                type="text"
                placeholder="Type name here "
                className="mt-2.5 w-[527px] border text-[14px] font-normal font-main text-[#9A9AAF] border-[#E8EDF2] bg-white rounded-lg py-4 px-[13px] outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label className="text-[16px] font-medium font-main text-[#07070C]">
                Description
              </label>

              <div className="mt-2.5 border border-[#E8EDF2] w-[527px] rounded-xl bg-white pt-[13px] px-[13px] ">
                <div className="flex gap-3 pb-2 text-[#7E7E8F]">
                  <Bold className="w-[13px] h-[13px] cursor-pointer" />
                  <Italic className="w-[13px] h-[13px] cursor-pointer" />
                  <Underline className="w-[13px] h-[13px] cursor-pointer" />
                  <ImageIcon className="w-[13px] h-[13px] cursor-pointer" />
                  <LinkIcon className="w-[13px] h-[13px] cursor-pointer" />
                  <List className="w-[13px] h-[13px] cursor-pointer" />
                  <ListOrdered className="w-[13px] h-[13px] cursor-pointer" />
                  <Minus className="w-[13px] h-[13px] cursor-pointer" />
                </div>

                <textarea
                  placeholder="Type description here"
                  className="w-full mt-3 h-32 p-3  rounded-xl outline-none"
                ></textarea>
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="text-[16px] font-medium font-main text-[#07070C]">
                Category
              </label>
              <select className="mt-2.5 w-full text-[14px] font-normal font-main text-[#9A9AAF] border border-[#E8EDF2] px-[13px] py-4  bg-white rounded-xl  outline-none">
                <option className=" w-full text-[14px] font-normal font-main text-[#9A9AAF] border border-[#E8EDF2] px-[13px] py-4  bg-white rounded-xl  outline-none">
                  Select Category
                </option>
                <option
                  className=" w-full text-[14px] font-normal font-main text-[#9A9AAF] border border-[#E8EDF2] px-[13px] py-4  bg-white rounded-xl  outline-none"
                  value="watch"
                >
                  Smartwatch
                </option>
                <option
                  className=" w-full text-[14px] font-normal font-main text-[#9A9AAF] border border-[#E8EDF2] px-[13px] py-4  bg-white rounded-xl  outline-none"
                  value="headphone"
                >
                  Headphone
                </option>
              </select>
            </div>

            {/* Brand */}
            <div>
              <label className="text-[16px] font-medium font-main text-[#07070C]">
                Brand
              </label>
              <div className="mt-2 flex items-center border border-[#E8EDF2] rounded-xl px-3 py-3 bg-white">
                <input
                  type="text"
                  placeholder="Type Brand name here"
                  className="w-full outline-none"
                />
                <FiChevronDown className="text-gray-500" />
              </div>
            </div>
            <div className=" flex flex-col ">
              <div className="flex gap-6">
                {/* SKU */}
                <div className="flex flex-col">
                  <label className="text-[16px] font-medium font-main text-[#07070C]">
                    SKU
                  </label>
                  <input
                    type="text"
                    placeholder="FOX-2983"
                    className="mt-2 border-[#E8EDF2] w-[252px] border rounded-xl p-3 outline-none"
                  />
                </div>

                {/* Stock Quantity */}
                <div className="flex flex-col">
                  <label className="text-[16px] font-medium font-main text-[#07070C]">
                    Stock quantity
                  </label>
                  <input
                    type="text"
                    placeholder="1258"
                    className="mt-2 border-[#E8EDF2] w-[252px] border rounded-xl p-3 outline-none"
                  />
                </div>
              </div>
              <div className="flex gap-6 my-10">
                {/* Regular Price */}
                <div className="flex flex-col">
                  <label className="text-[16px] font-medium font-main text-[#07070C]">
                    Regular Price
                  </label>
                  <input
                    type="text"
                    placeholder="$500"
                    className="mt-2 border-[#E8EDF2] w-[252px] border rounded-xl p-3 outline-none"
                  />
                </div>

                {/* Sale Price */}
                <div className="flex flex-col">
                  <label className="text-[16px] font-medium font-main text-[#07070C]">
                    Sale price
                  </label>
                  <input
                    type="text"
                    placeholder="$450"
                    className="mt-2  border border-[#E8EDF2] w-[252px] rounded-xl p-3 outline-none"
                  />
                </div>
              </div>
              <div className="flex gap-6">
                {/* Tax Status */}
                <div className="flex flex-col">
                  <label className="text-[16px] font-medium font-main text-[#07070C]">
                    Tax status
                  </label>
                  <div className="mt-2 flex items-center border border-[#E8EDF2] w-[252px] rounded-xl px-3 py-3 bg-white">
                    <select className="w-full outline-none bg-transparent">
                      <option>Taxable</option>
                      <option>None</option>
                    </select>
                  </div>
                </div>

                {/* Tax Class */}
                <div className="flex flex-col">
                  <label className="text-[16px]  font-medium font-main text-[#07070C]">
                    Tax class
                  </label>
                  <div className="mt-2 flex items-center border border-[#E8EDF2] w-[252px] rounded-xl px-3 py-3 bg-white">
                    <select className="w-full outline-none bg-transparent">
                      <option>Standard</option>
                      <option>Reduced</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6">
              <label className="text-[16px] font-medium font-main text-[#07070C]">
                Tag
              </label>

              <div className="mt-3 w-full border-[#E8EDF2] border rounded-xl p-3 flex flex-wrap gap-2 bg-white">
                {[
                  "smartwatch",
                  "Apple",
                  "Watch",
                  "smartphone",
                  "iPhone13 max",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1 bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-sm"
                  >
                    {tag}
                    <FiX className="cursor-pointer" />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}

          <div>
            <ProductGallery />
            <UploadList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
