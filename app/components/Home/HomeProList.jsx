import React from "react";
// `https://dummyjson.com/products?limit=20&skip=10&select=title,price`,

import ProCard from "../Common/ProCard";

async function getProducts() {
  const res = await fetch(`https://dummyjson.com/products`, {
    cache: "no-store",
  });
  return res.json();
}
const HomeProList = async () => {
  const data = await getProducts();
  console.log("products : ", data);
  return (
    <div className="py-14">
      <div className="container">
        <div className="mainRow flex gap-8 text-[#8B8B8B] flex-col">
          <div className="header  flex items-center gap-8">
            <h3 className="text-[18px] hover:text-black hover:scale-110 duration-300 cursor-pointer font-medium font-inter">
              New Arrival
            </h3>
            <h3 className="text-[18px] hover:text-black hover:scale-110 duration-300 cursor-pointer font-medium font-inter">
              BestSeller
            </h3>
            <h3 className="text-[18px] hover:text-black hover:scale-110 duration-300 cursor-pointer font-medium font-inter">
              Featured
            </h3>
          </div>
          <div className="flex items-center flex-wrap gap-5">
            {data?.products.slice(0, 9).map((item) => (
              <ProCard key={item.id} item={item} />
            ))}
          </div>
          <div className="list flex flex-wrap gap-4">
            <h1 className="text-4xl">hello</h1>
            {/* <ProCard />
            <ProCard />
            <ProCard />
            <ProCard />
            <ProCard />
            <ProCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProList;
