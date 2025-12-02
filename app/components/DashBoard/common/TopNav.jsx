// "use client";

// import React from "react";
// import { CiSearch } from "react-icons/ci";
// import { CiMicrophoneOn } from "react-icons/ci";
// import { RiEditBoxLine } from "react-icons/ri";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import { IoChatbubblesOutline } from "react-icons/io5";
// import { MdOutlineNotificationImportant } from "react-icons/md";
// import avator from "../../../../public/Avatar.png";
// import Image from "next/image";
// import ThemeToggle from "@/app/components/common/ThemeToggle";

// const TopNav = () => {
//   return (
//     <div className="flex left-[15%] right-0 rounded-lg z-40 fixed justify-between px-2 py-6 bg-background dark:bg-slate-900 transition-colors duration-300">
//       <div className="flex gap-12 ">
//         <div className=" flex border border-emerald-200 items-center pl-4 gap-0.5 w-[360px] h-12 rounded-xl bg-bgsecond  dark:bg-slate-800 transition-colors duration-300">
//           <CiSearch className="text-[20px] text-[#7E7E8F] dark:text-gray-400" />
//           <input
//             type="text"
//             className="text-[#C6CBD9] dark:text-gray-500 dark:bg-slate-800 outline-none w-[290px] text-[14px] font-poppins font-semibold transition-colors duration-300 "
//             placeholder="Search"
//           />
//           <CiMicrophoneOn className="text-[20px] dark:text-gray-400" />
//         </div>
//         <div className="w-[126px] rounded-md shadow-cyan-400 hover:bg-bg bg-background shadow-md px-1 hover:scale-110 duration-300 hover:text-primary cursor-pointer text-primary dark:text-gray-400 dark:hover:text-gray-200 flex items-center gap-2 transition-colors">
//           <RiEditBoxLine className="text-[16px] " />
//           <button className="text-[14px] font-semibold font-poppins">
//             Browse
//           </button>
//           <MdKeyboardArrowDown className="text-[20px] text-[#b3b9ca] dark:text-gray-500 ml-auto" />
//         </div>
//       </div>
//       <div className="flex items-center gap-8 ml-[600px]  ">
//         <IoChatbubblesOutline className=" text-secondary dark:text-gray-400 hover:scale-110 cursor-pointer duration-300 shadow-md shadow-emerald-600 p-1 size-10 rounded-full transition-colors" />
//         <MdOutlineNotificationImportant className="  shadow-md shadow-emerald-600 p-1 size-10 rounded-full hover:scale-110 cursor-pointer duration-300 text-secondary transition-colors" />
//         <ThemeToggle />
//         <Image
//           src={avator}
//           className="hover:scale-110 cursor-pointer duration-300"
//           alt="avator"
//         />
//       </div>
//     </div>
//   );
// };

// export default TopNav;
"use client";

import React from "react";
import { CiSearch, CiMicrophoneOn } from "react-icons/ci";
import { RiEditBoxLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineNotificationImportant } from "react-icons/md";
import Image from "next/image";
import ThemeToggle from "@/app/components/common/ThemeToggle";
import avator from "../../../../public/Avatar.png";

const TopNav = () => {
  return (
    <div
      className="
        fixed top-0 lg:left-[20%] left-[10%] right-0 z-40  
        flex  flex-wrap lg:flex-row lg:items-center justify-between gap-4
        px-4 py-4 
        bg-background dark:bg-slate-900 
        transition-colors duration-300
        shadow-sm
      "
    >
      {/* LEFT SIDE */}
      <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
        {/* Search Bar */}
        <div
          className="
            flex items-center gap-2 min-w-[270px]
            border border-emerald-200
            pl-4 pr-2 py-2 
            rounded-xl 
            bg-bgsecond dark:bg-slate-800 
            transition-colors duration-300
             md:min-w-[360px] lg:min-w-[400px]
          "
        >
          <CiSearch className="text-[20px] text-[#7E7E8F] dark:text-gray-400" />

          <input
            type="text"
            placeholder="Search"
            className="
              flex-1 bg-transparent outline-none 
              text-[14px] font-poppins font-semibold 
              text-[#C6CBD9] dark:text-gray-400
            "
          />

          <CiMicrophoneOn className="text-[20px] dark:text-gray-400" />
        </div>

        {/* Browse Button — hidden on small screens */}
        <div
          className="
             flex 
            items-center gap-2
            w-[130px] 
            px-2 py-2 
            rounded-md 
            shadow-md 
            hover:bg-bg hover:scale-110 
            cursor-pointer 
            text-primary dark:text-gray-300 
            transition-all
          "
        >
          <RiEditBoxLine className="text-[16px]" />
          <span className="text-[14px] font-semibold font-poppins">Browse</span>
          <MdKeyboardArrowDown className="text-[20px] ml-auto dark:text-gray-500" />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="
          flex items-center gap-4 
          ml-0 md:ml-10
        "
      >
        <IoChatbubblesOutline
          className="
            text-secondary dark:text-gray-400 
            p-1 size-9 rounded-full shadow-md shadow-emerald-600
            hover:scale-110 cursor-pointer duration-300
          "
        />

        <MdOutlineNotificationImportant
          className="
            text-secondary dark:text-gray-400 
            p-1 size-9 rounded-full shadow-md shadow-emerald-600
            hover:scale-110 cursor-pointer duration-300
          "
        />

        {/* Theme toggle always visible */}
        <ThemeToggle />

        {/* Avatar */}
        <Image
          src={avator}
          alt="avatar"
          className="size-10 rounded-full hover:scale-110 cursor-pointer duration-300"
        />
      </div>
    </div>
  );
};

export default TopNav;
