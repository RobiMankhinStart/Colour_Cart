// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation"; // <-- added for navigation

// import favicon from "../../../../public/favicon.png";
// import { RiBarChartBoxAiLine } from "react-icons/ri";
// import { CiSquarePlus } from "react-icons/ci";
// import { FiPlusCircle } from "react-icons/fi";
// import { MdOutlineArrowBackIosNew } from "react-icons/md";

// import person1 from "../../../../public/personimg1.png";
// import person2 from "../../../../public/personimg2img.png";

// const menuItems = [
//   "Dashboard",
//   "Products",
//   "Orders",
//   "Payments",
//   "Transactions",
//   "Clients",
// ];

// const SideNav = () => {
//   const [active, setActive] = useState("Dashboard");
//   const router = useRouter(); // router instance

//   // Convert name to valid path
//   const generatePath = (name) => {
//     if (name === "Dashboard") return "/dashboard";
//     return `/dashboard/${name.toLowerCase()}`;
//   };

//   const handleClick = (item) => {
//     setActive(item);
//     router.push(generatePath(item)); // navigate on click
//   };

//   return (
//     <div className="relative bg-white">
//       {/* Back Button */}
//       <div className="absolute top-5 z-30 left-[95%] rounded-full shadow-gray-700 border border-[#e9d5d5] cursor-pointer shadow-2xl p-2">
//         <MdOutlineArrowBackIosNew className="text-[16px]" />
//       </div>

//       {/* Logo */}
//       <div className="logo p-6 flex items-center gap-2">
//         <Image src={favicon} alt="iconLogo" />
//         <h2 className="font-semibold text-[24px] text-[#9A9AAF]">Frox</h2>
//       </div>

//       {/* Top Menu */}
//       <div className="p-6 flex flex-col gap-0.5">
//         {menuItems.map((item) => (
//           <div
//             key={item}
//             onClick={() => handleClick(item)}
//             className={`flex items-center gap-2 hover:scale-110 w-[206px] h-14 pl-[21px] rounded-xl cursor-pointer duration-300
//               ${active === item ? "bg-[#7364DB] text-white" : "text-[#7E7E8F]"}
//             `}
//           >
//             <RiBarChartBoxAiLine className="text-[22px]" />
//             <h3 className="font-poppins font-semibold text-[14px]">{item}</h3>
//           </div>
//         ))}
//       </div>

//       <div className="border-b border-[#E8EDF2] w-[206px] ml-[25px]"></div>

//       {/* Categories */}
//       <div className="Categories mt-5 ml-6">
//         <h3 className="text-sm font-semibold py-3 pl-6">Categories</h3>

//         {[
//           { name: "Laptops", color: "#ECE663", count: 8 },
//           { name: "Mobile phones", color: "#EC8C56", count: 8 },
//           { name: "Desktops", color: "#ECE663", count: "" },
//           { name: "Accessories", color: "#FB7BB8", count: 8 },
//           { name: "Portable storage", color: "#50D1B2", count: 8 },
//           { name: "Portable storage", color: "#ECE663", count: "" },
//         ].map((cat, i) => (
//           <div
//             key={i}
//             className="flex items-center py-3 p-6 justify-between cursor-pointer hover:bg-gray-100 rounded-lg"
//           >
//             <h3 className="text-[14px] text-[#7E7E8F] font-poppins">
//               {cat.name}
//             </h3>
//             {cat.count !== "" && (
//               <p
//                 className="text-[11px] font-poppins rounded-md px-1"
//                 style={{ background: cat.color }}
//               >
//                 {cat.count}
//               </p>
//             )}
//           </div>
//         ))}

//         {/* Add Category */}
//         <div className="flex items-center py-3 p-6 gap-3 cursor-pointer hover:text-[#7364DB]">
//           <CiSquarePlus className="text-[#7E7E8F] text-[20px]" />
//           <h3 className="text-[14px] font-medium font-poppins">Add category</h3>
//         </div>
//       </div>

//       <div className="border-b border-[#E8EDF2] w-[206px] mt-[22px] mb-[35px] ml-[25px]"></div>

//       {/* Top Sellers */}
//       <div className="flex flex-col gap-4 ml-[51px]">
//         <h3 className="font-poppins text-[14px] font-semibold">Top Sellers</h3>

//         <div className="flex items-center">
//           <Image src={person1} alt="person" />
//           <Image src={person2} alt="person" className="-ml-[5%]" />
//           <Image src={person1} alt="person" className="-ml-[5%]" />
//           <Image src={person2} alt="person" className="-ml-[5%]" />
//           <div className="p-2 rounded-full bg-[#7364DB] -ml-[5%] cursor-pointer">
//             <FiPlusCircle className="text-[18px] text-white" />
//           </div>
//         </div>
//       </div>

//       <div className="border-b border-[#E8EDF2] w-[206px] my-[35px] ml-[25px]"></div>
//     </div>
//   );
// };

// export default SideNav;
"use client";

import Image from "next/image";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

import favicon from "../../../../public/favicon.png";
import { RiBarChartBoxAiLine } from "react-icons/ri";
import { CiSquarePlus } from "react-icons/ci";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

import person1 from "../../../../public/personimg1.png";
import person2 from "../../../../public/personimg2img.png";

const menuItems = [
  "Dashboard",
  "Products",
  "Orders",
  "Payments",
  "Transactions",
  "Clients",
];

const SideNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Simple active check
  const isActive = (item) => {
    if (item === "Dashboard") return pathname === "/dashboard";
    return pathname.includes(item.toLowerCase());
  };

  const handleClick = (item) => {
    const path =
      item === "Dashboard" ? "/dashboard" : `/dashboard/${item.toLowerCase()}`;

    router.push(path);
  };

  return (
    <div className="relative bg-background transition-colors duration-300">
      {/* Back Button */}
      {/* <div className="absolute top-5  z-50! left-[95%] rounded-full shadow-gray-700 border border-[#e9d5d5] cursor-pointer shadow-2xl p-2">
        <MdOutlineArrowBackIosNew className="text-[20px]" />
      </div> */}

      {/* Logo */}
      <div className="logo p-6 flex items-center gap-2">
        <Image src={favicon} alt="iconLogo" />
        <h2 className="font-semibold text-[24px] text-primary transition-colors duration-300">
          Frox
        </h2>
      </div>

      {/* Top Menu */}
      <div className="p-6 flex flex-col gap-0.5">
        {menuItems.map((item) => (
          <div
            key={item}
            onClick={() => handleClick(item)}
            className={`flex items-center gap-2  hover:scale-110 w-[206px] h-14 pl-[21px] rounded-xl cursor-pointer duration-300
              ${isActive(item) ? "bg-[#7364DB] text-white" : "text-primary"}
            transition-colors`}
          >
            <RiBarChartBoxAiLine className="text-[22px]" />
            <h3 className="font-poppins font-semibold text-[14px]">{item}</h3>
          </div>
        ))}
      </div>

      <div className="border-b border-[#E8EDF2] dark:border-slate-700 w-[206px] ml-[25px] transition-colors duration-300"></div>

      {/* Categories */}
      <div className="Categories mt-5 ml-6">
        <h3 className="text-sm font-semibold py-3 pl-6 text-gray-800 dark:text-gray-200 transition-colors duration-300">
          Categories
        </h3>

        {[
          { name: "Laptops", color: "#ECE663", count: 8 },
          { name: "Mobile phones", color: "#EC8C56", count: 8 },
          { name: "Desktops", color: "#ECE663", count: "" },
          { name: "Accessories", color: "#FB7BB8", count: 8 },
          { name: "Portable storage", color: "#50D1B2", count: 8 },
          { name: "Portable storage", color: "#ECE663", count: "" },
        ].map((cat, i) => (
          <div
            key={i}
            className="flex items-center py-3 p-6 justify-between cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-300"
          >
            <h3 className="text-[14px] text-[#7E7E8F] dark:text-gray-400 font-poppins transition-colors duration-300">
              {cat.name}
            </h3>

            {cat.count !== "" && (
              <p
                className="text-[11px] font-poppins rounded-md px-1"
                style={{ background: cat.color }}
              >
                {cat.count}
              </p>
            )}
          </div>
        ))}

        {/* Add Category */}
        <div className="flex items-center py-3 p-6 gap-3 cursor-pointer hover:text-[#7364DB] dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-300">
          <CiSquarePlus className="text-[#7E7E8F] dark:text-gray-500 text-[20px] transition-colors duration-300" />
          <h3 className="text-[14px] font-medium font-poppins">Add category</h3>
        </div>
      </div>

      <div className="border-b border-[#E8EDF2] dark:border-slate-700 w-[206px] mt-[22px] mb-[35px] ml-[25px] transition-colors duration-300"></div>

      {/* Top Sellers */}
      <div className="flex flex-col gap-4 ml-[51px]">
        <h3 className="font-poppins text-[14px] font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
          Top Sellers
        </h3>

        <div className="flex items-center">
          <Image src={person1} alt="person" />
          <Image src={person2} alt="person" className="-ml-[5%]" />
          <Image src={person1} alt="person" className="-ml-[5%]" />
          <Image src={person2} alt="person" className="-ml-[5%]" />
          <div className="p-2 rounded-full bg-[#7364DB] -ml-[5%] cursor-pointer hover:scale-110 transition-transform duration-300">
            <FiPlusCircle className="text-[18px] text-white" />
          </div>
        </div>
      </div>

      <div className="border-b border-[#E8EDF2] dark:border-slate-700 w-[206px] my-[35px] ml-[25px] transition-colors duration-300"></div>
    </div>
  );
};

export default SideNav;
