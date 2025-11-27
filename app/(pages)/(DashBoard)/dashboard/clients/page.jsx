"use client";
import ReviewList from "@/app/components/DashBoard/ClientList/ReviewList";
import React from "react";
import { FiChevronDown, FiFilter } from "react-icons/fi";
// import ReviewsList from "../../components/client/ReviewsList";

const page = () => {
  return (
    <>
      <div className="w-full p-4 md:p-6 lg:p-8 bg-[#F9FAFB] min-h-screen">
        {/* Filters */}
        <div className="flex justify-between mt-[27px] mb-[26px]">
          {/* Category */}
          <div className="">
            <button className="w-[225px] text-[14px] font-normal font-main text-[#7E7E8F] border border-[#E8EDF2] flex items-center justify-between py-4 px-[15px] bg-white rounded-lg shadow-sm">
              All Category <FiChevronDown className="text-[20px]" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            {/* Date */}
            <div className="">
              <button className="w-full flex items-center justify-between px-4 py-2 border border-[#E8EDF2] bg-white rounded-lg shadow-sm">
                10-02-2021 <FiChevronDown />
              </button>
            </div>

            {/* Status */}
            <div className="">
              <button className="w-[180px] flex items-center justify-between border border-[#E8EDF2] text-[14px] font-normal font-main text-[#7E7E8F] bg-white rounded-md  py-4 px-[15px]">
                Status <FiChevronDown />
              </button>
            </div>

            {/* Filters Button */}
            <button className="w-[90px] border border-[#E8EDF2] text-[14px] font-normal font-main text-[#7E7E8F] bg-white rounded-lg flex justify-center items-center py-4 gap-[5px] ">
              <FiFilter /> Filters
            </button>
          </div>
        </div>

        <ReviewList />
      </div>
    </>
  );
};

export default page;
