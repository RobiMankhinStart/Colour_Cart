"use client";

import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";
import { RiEditBoxLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineNotificationImportant } from "react-icons/md";
import avator from "../../../../public/Avatar.png";
import Image from "next/image";
import ThemeToggle from "@/app/components/common/ThemeToggle";

const TopNav = () => {
  return (
    <div className="flex left-[15%] right-0 rounded-lg z-40 fixed justify-between px-2 py-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="flex gap-12 ">
        <div className=" flex items-center pl-4 gap-0.5 w-[360px] h-12 rounded-xl bg-[#F5F5FA] dark:bg-slate-800 transition-colors duration-300">
          <CiSearch className="text-[20px] text-[#7E7E8F] dark:text-gray-400" />
          <input
            type="text"
            className="text-[#C6CBD9] dark:text-gray-500 dark:bg-slate-800 outline-none w-[290px] text-[14px] font-poppins font-semibold transition-colors duration-300 "
            placeholder="Search"
          />
          <CiMicrophoneOn className="text-[20px] dark:text-gray-400" />
        </div>
        <div className="w-[126px] rounded-md shadow-cyan-400 shadow-md px-1 hover:scale-110 duration-300 hover:text-gray-800! cursor-pointer text-[#7E7E8F] dark:text-gray-400 dark:hover:text-gray-200 flex items-center gap-2 transition-colors">
          <RiEditBoxLine className="text-[16px] " />
          <button className="text-[14px] font-semibold font-poppins">
            Browse
          </button>
          <MdKeyboardArrowDown className="text-[20px] text-[#b3b9ca] dark:text-gray-500 ml-auto" />
        </div>
      </div>
      <div className="flex items-center gap-8 ml-[600px]  ">
        <IoChatbubblesOutline className=" text-[#7E7E8F] dark:text-gray-400 hover:scale-110 cursor-pointer duration-300 shadow-md shadow-emerald-600 p-1 size-10 rounded-full transition-colors" />
        <MdOutlineNotificationImportant className=" dark:text-gray-400 shadow-md shadow-emerald-600 p-1 size-10 rounded-full hover:scale-110 cursor-pointer duration-300 text-[#7E7E8F] transition-colors" />
        <ThemeToggle />
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
