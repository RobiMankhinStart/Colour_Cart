import BestSellers from "@/app/components/DashBoard/DashHome/BestSellers";
import Bottom from "@/app/components/DashBoard/DashHome/Bottom";
import MainChart from "@/app/components/DashBoard/DashHome/MainChart";
import RecentPurchases from "@/app/components/DashBoard/DashHome/RecentPurchases";
import Top from "@/app/components/DashBoard/DashHome/Top";
import React from "react";
import { GoHome } from "react-icons/go";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const page = () => {
  return (
    <div className="px-[23px] ">
      <h2 className="text-[28px] font-bold font-poppins">Dashboard</h2>

      {/* bread Curmbs  */}
      <div className="flex items-center gap-2 pt-3 pb-6">
        <div className=" flex gap-0.5 items-center cursor-pointer hover:scale-110 duration-200">
          <GoHome />
          <h3 className="text-[#7E7E8F] font-poppins text-[12px]">Home</h3>
        </div>
        <MdKeyboardDoubleArrowRight className="text-[#7E7E8F]" />
        <h3 className="text-[#7364DB] font-poppins text-[12px] cursor-pointer hover:scale-110 duration-200">
          Dashboard
        </h3>
      </div>
      {/* ....top  */}
      <Top />
      <div className="flex justify-between  w[99%]">
        <MainChart />
        <BestSellers />
      </div>
      <RecentPurchases />
      <Bottom />
    </div>
  );
};

export default page;
