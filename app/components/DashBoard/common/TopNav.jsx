import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";

const TopNav = () => {
  return (
    <div className="py-6 px-12 border">
      <div className=" flex items-center pl-4 gap-0.5 w-[360px] h-12 rounded-xl bg-[#F5F5FA]">
        <CiSearch className="text-[20px] text-[#7E7E8F]" />
        <input
          type="text"
          className="text-[#C6CBD9] outline-none w-[290px] text-[14px] font-poppins font-semibold "
          placeholder="Search"
        />
        <CiMicrophoneOn className="text-[20px]" />
      </div>
    </div>
  );
};

export default TopNav;
