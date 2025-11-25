import Image from "next/image";
import React from "react";
import favicon from "../../../../public/favicon.png";
import dashboard from "../../../../public/favorite-chart.png";
import { RiBarChartBoxAiLine } from "react-icons/ri";
import { CiSquarePlus, CiCirclePlus } from "react-icons/ci";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

import person1 from "../../../../public/personimg1.png";
import person2 from "../../../../public/personimg2img.png";

const SideNav = () => {
  return (
    <div className="relative  bg-white">
      <div className="absolute top-5 z-30 left-[97%] rounded-full shadow-gray-700 border border-[#e9d5d5] cursor-pointer shadow-2xl p-2">
        <MdOutlineArrowBackIosNew className="text-[16px] " />
      </div>
      <div className=" logo p-6 flex items-center gap-2 ">
        <Image src={favicon} alt="iconLogo" />
        <h2 className="font-semibold text-[24px] text-[#9A9AAF]">Frox</h2>
      </div>
      <div className="ml[25px] p-6 flex flex-col justify-center gap-0.5">
        <div className="hover:bg-[#7364DB] cursor-pointer hover:text-white duration-300 flex items-center gap-1 text-[#7E7E8F]  w-[206px] h-14 pl-[21px] rounded-xl">
          <RiBarChartBoxAiLine className="] text-[22px]" />
          <h3 className=" font-poppins font-semibold  text-[14px]">
            DashBoard
          </h3>
        </div>
        <div className="hover:bg-[#7364DB] cursor-pointer hover:text-white duration-300 flex items-center gap-1 text-[#7E7E8F]  w-[206px] h-14 pl-[21px] rounded-xl">
          <RiBarChartBoxAiLine className="] text-[22px]" />
          <h3 className=" font-poppins font-semibold  text-[14px]">Products</h3>
        </div>
        <div className="hover:bg-[#7364DB] cursor-pointer hover:text-white duration-300 flex items-center gap-1 text-[#7E7E8F]  w-[206px] h-14 pl-[21px] rounded-xl">
          <RiBarChartBoxAiLine className="] text-[22px]" />
          <h3 className=" font-poppins font-semibold  text-[14px]">Orders</h3>
        </div>
        <div className="hover:bg-[#7364DB] cursor-pointer hover:text-white duration-300 flex items-center gap-1 text-[#7E7E8F]  w-[206px] h-14 pl-[21px] rounded-xl">
          <RiBarChartBoxAiLine className="] text-[22px]" />
          <h3 className=" font-poppins font-semibold  text-[14px]">Payments</h3>
        </div>
        <div className="hover:bg-[#7364DB] cursor-pointer hover:text-white duration-300 flex items-center gap-1 text-[#7E7E8F]  w-[206px] h-14 pl-[21px] rounded-xl">
          <RiBarChartBoxAiLine className="] text-[22px]" />
          <h3 className=" font-poppins font-semibold  text-[14px]">
            Transactions
          </h3>
        </div>
        <div className="hover:bg-[#7364DB] cursor-pointer hover:text-white duration-300 flex items-center gap-1 text-[#7E7E8F]  w-[206px] h-14 pl-[21px] rounded-xl">
          <RiBarChartBoxAiLine className="] text-[22px]" />
          <h3 className=" font-poppins font-semibold  text-[14px]">Clients</h3>
        </div>
      </div>
      <div className=" border-b border-[#E8EDF2] w-[206px] ml-[25px]"></div>
      <div className="Categories mt-5 ml-6">
        <h3 className="text-sm font-semibold py-3 pl-6">Categories</h3>
        <div className="flex items-center  py-3 p-6 justify-between ">
          <h3 className="text-[14px] text-[#7E7E8F] font-poppins cursor-pointer">
            Laptops{" "}
          </h3>
          <p className="bg-[#ECE663] text-[11px] font-poppins rounded-md px-1">
            8
          </p>
        </div>
        <div className="flex items-center  py-3 p-6 justify-between ">
          <h3 className="text-[14px] text-[#7E7E8F] font-poppins cursor-pointer">
            Mobile phones
          </h3>
          <p className="bg-[#EC8C56] text-[11px] font-poppins rounded-md px-1">
            8
          </p>
        </div>
        <div className="flex items-center  py-3 p-6 justify-between ">
          <h3 className="text-[14px] text-[#7E7E8F] font-poppins cursor-pointer">
            Desktops
          </h3>
          <p className="bg-[#ECE663] text-[11px] font-poppins rounded-md px-1"></p>
        </div>
        <div className="flex items-center  py-3 p-6 justify-between ">
          <h3 className="text-[14px] text-[#7E7E8F] font-poppins cursor-pointer">
            Accessories
          </h3>
          <p className="bg-[#FB7BB8] text-[11px] font-poppins rounded-md px-1">
            8
          </p>
        </div>
        <div className="flex items-center  py-3 p-6 justify-between ">
          <h3 className="text-[14px] text-[#7E7E8F] font-poppins cursor-pointer">
            Portable storage
          </h3>
          <p className="bg-[#50D1B2] text-[11px] font-poppins rounded-md px-1">
            8
          </p>
        </div>
        <div className="flex items-center  py-3 p-6 justify-between ">
          <h3 className="text-[14px] text-[#7E7E8F] font-poppins cursor-pointer">
            Portable storage
          </h3>
          <p className="bg-[#ECE663] text-[11px] font-poppins rounded-md px-1"></p>
        </div>
        <div className="flex items-center  py-3 p-6 gap-3 ">
          <CiSquarePlus className="text-[#7E7E8F] text-[20px]" />
          <h3 className="text-[14px] font-medium font-poppins cursor-pointer">
            Add category
          </h3>
        </div>
      </div>
      <div className=" border-b border-[#E8EDF2] w-[206px] mt-[22px] mb-[35px] ml-[25px]"></div>
      <div className="flex flex-col gap-4 ml-[51px]">
        <h3 className="font-poppins text-[14px] font-semibold">Top Sellers</h3>
        <div className="flex items-center ">
          <Image src={person1} alt="person" className="" />
          <Image src={person2} alt="person" className="-ml-[5%]" />
          <Image src={person1} alt="person" className="-ml-[5%]" />
          <Image src={person2} alt="person" className="-ml-[5%]" />
          <div className="p-2 rounded-full bg-[#7364DB] -ml-[5%] relative -z-2 cursor-pointer">
            <FiPlusCircle className="text-[18px] text-white" />
          </div>
        </div>
      </div>
      <div className=" border-b border-[#E8EDF2] w-[206px]  my-[35px] ml-[25px]"></div>
    </div>
  );
};

export default SideNav;
