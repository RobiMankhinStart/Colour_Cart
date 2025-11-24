import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";
import { RiEditBoxLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

const TopNav = () => {
  return (
    <div className="flex border py-6 px-12 ">
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
        <MdKeyboardArrowDown className="text-[16px] text-[#C6CBD9] ml-auto" />
      </div>
    </div>
  );
};

export default TopNav;
