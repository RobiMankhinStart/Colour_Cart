import React from "react";

import ProCard from "../Common/ProCard";

const HomeProList = () => {
  return (
    <div>
      <div className="container">
        <div className="mainRow flex gap-8 text-[#8B8B8B] flex-col">
          <div className="header  flex items-center gap-8">
            <h3 className="text-[18px] font-medium font-inter">New Arrival</h3>
            <h3 className="text-[18px] font-medium font-inter">BestSeller</h3>
            <h3 className="text-[18px] font-medium font-inter">Featured</h3>
          </div>
          <div className="list flex flex-wrap gap-4">
            <ProCard />
            <ProCard />
            <ProCard />
            <ProCard />
            <ProCard />
            <ProCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProList;
