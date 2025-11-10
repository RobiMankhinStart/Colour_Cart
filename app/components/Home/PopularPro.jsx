import Link from "next/link";
import React from "react";

const PopularPro = () => {
  return (
    <div className="pt-[56px]">
      <div className="mainDiv mx-4 flex flex-wrap gap-2">
        <div className="first flex flex-col w-[360px]">
          <div className="w-full">
            <img className="" src="/Group 1.png" alt="group1" />
          </div>
          <div className="flex px-8 pb-12 flex-col gap-4">
            <h3 className="font-inter font-light text-[33px]">
              Popular Products
            </h3>
            <p className=" text-[14px] text-[#909090] font-medium font-inter">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link
              className="inline-block text-[16px] font-medium font-inter rounded-md border w-[191px] py-4 px-[56px]"
              href={"/shop"}
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="bg-[#F9F9F9] flex flex-col w-[360px]">
          <div className="w-full ">
            <img className="" src="/Group 1.png" alt="group1" />
          </div>
          <div className="flex px-8 pb-12  flex-col gap-4">
            <h3 className="font-inter font-light text-[33px]">
              Popular Products
            </h3>
            <p className=" text-[14px] text-[#909090] font-medium font-inter">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link
              className="inline-block text-[16px] font-medium font-inter rounded-md border w-[191px] py-4 px-[56px]"
              href={"/shop"}
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="bg-[#F9F9F9] flex flex-col w-[360px]">
          <div className="w-full">
            <img className="" src="/Group 1.png" alt="group1" />
          </div>
          <div className="flex px-8 pb-12 flex-col gap-4">
            <h3 className="font-inter font-light text-[33px]">
              Popular Products
            </h3>
            <p className=" text-[14px] text-[#909090] font-medium font-inter">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link
              className="inline-block text-[16px] font-medium font-inter rounded-md border w-[191px] py-4 px-[56px]"
              href={"/shop"}
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="bg-[#F9F9F9] flex flex-col w-[360px]">
          <div className="w-full">
            <img className="" src="/Group 1.png" alt="group1" />
          </div>
          <div className="flex px-8 pb-12 flex-col gap-4">
            <h3 className="font-inter font-light text-[33px]">
              Popular Products
            </h3>
            <p className=" text-[14px] text-[#909090] font-medium font-inter">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link
              className="inline-block text-[16px] font-medium font-inter rounded-md border w-[191px] py-4 px-[56px]"
              href={"/shop"}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPro;
