import React from "react";
import { CiMobile4 } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";

const Category = () => {
  return (
    <div className="py-[80px]">
      <div className="container">
        <div className="mainRow gap-8 items-center flex flex-col">
          <h3 className="font-inter font-medium text-[24px]">
            Browse By Category
          </h3>
          <div className="flex items-center gap-8">
            <div className="rounded-[15px] bg-[#EDEDED] w-[160px] h-[128px] flex items-center justify-center ">
              <CiMobile4 className="text-[48px]" />
            </div>
            <div className="rounded-[15px] bg-[#EDEDED] w-[160px] h-[128px] flex items-center justify-center ">
              <FaLaptopCode className="text-[48px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
