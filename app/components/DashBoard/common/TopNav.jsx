import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";
import { RiEditBoxLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineNotificationImportant } from "react-icons/md";
import avator from "../../../../public/Avatar.png";
import Image from "next/image";

const TopNav = () => {
  return (
    <div className="flex right-0 w-[85.5%] rounded-lg z-40 fixed ml-2 justify-between  py-6 px-12 bg-white">
      <div className="flex gap-12">
        <div className=" flex items-center pl-4 gap-0.5 w-[360px] h-12 rounded-xl bg-[#F5F5FA]">
          <CiSearch className="text-[20px] text-[#7E7E8F]" />
          <input
            type="text"
            className="text-[#C6CBD9] outline-none w-[290px] text-[14px] font-poppins font-semibold "
            placeholder="Search"
          />
          <CiMicrophoneOn className="text-[20px]" />
        </div>
        <div className="w-[126px] rounded-md shadow-cyan-400 shadow-md px-1 hover:scale-110 duration-300 hover:text-gray-800! cursor-pointer text-[#7E7E8F] flex items-center gap-2">
          <RiEditBoxLine className="text-[16px] " />
          <button className="text-[14px] font-semibold font-poppins">
            Browse
          </button>
          <MdKeyboardArrowDown className="text-[20px] text-[#b3b9ca] ml-auto" />
        </div>
      </div>
      <div className="flex items-center  gap-8 ml-[600px] ">
        <IoChatbubblesOutline className=" text-[#7E7E8F] hover:scale-110 cursor-pointer duration-300 shadow-md shadow-emerald-600 p-1 size-10 rounded-full" />
        <MdOutlineNotificationImportant className="text-[34px]  shadow-md shadow-emerald-600 p-1 size-10 rounded-full hover:scale-110 cursor-pointer duration-300 text-[#7E7E8F]" />
        <Image
          src={avator}
          className="hover:scale-110 cursor-pointer duration-300"
          alt="avator"
        />
      </div>
    </div>
  );
};

export default TopNav;
