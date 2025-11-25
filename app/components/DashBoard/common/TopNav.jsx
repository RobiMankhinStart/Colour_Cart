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
    <div className="flex ml-2 gap-[47px]  py-6 px-12 bg-white">
      <div className=" flex items-center pl-4 gap-0.5 w-[360px] h-12 rounded-xl bg-[#F5F5FA]">
        <CiSearch className="text-[20px] text-[#7E7E8F]" />
        <input
          type="text"
          className="text-[#C6CBD9] outline-none w-[290px] text-[14px] font-poppins font-semibold "
          placeholder="Search"
        />
        <CiMicrophoneOn className="text-[20px]" />
      </div>
      <div className="w-[142px] text-[#7E7E8F] flex items-center gap-2">
        <RiEditBoxLine className="text-[16px] " />
        <button className="text-[14px] font-semibold font-poppins">
          Browse
        </button>
        <MdKeyboardArrowDown className="text-[20px] text-[#C6CBD9] ml-auto" />
      </div>
      <div className="flex items-center gap-8 ml-[600px] ">
        <IoChatbubblesOutline className="text-[34px] text-[#7E7E8F]" />
        <MdOutlineNotificationImportant className="text-[34px] text-[#7E7E8F]" />
        <Image src={avator} alt="avator" />
      </div>
    </div>
  );
};

export default TopNav;
