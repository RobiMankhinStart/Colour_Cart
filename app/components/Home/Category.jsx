"use client";

import React, { useEffect, useState } from "react";
import { CiMobile4 } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";

const Category = () => {
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    async function getcategories() {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();
        const filteringIDs = data.products.filter((item) =>
          localIDs.includes(item.id)
        );
        setcategories(filteringIDs);
      } catch (error) {
        console.log("fetching error : ", error);
      }
    }
    getcategories();
  }, []);
  console.log("cartProducts", cartProducts);
  return (
    <div className="py-20">
      <div className="container">
        <div className="mainRow gap-8 items-center flex flex-col">
          <h3 className="font-inter font-medium text-[24px]">
            Browse By Category
          </h3>
          <div className="flex items-center gap-8">
            <div className="rounded-[15px] bg-[#EDEDED] w-40 h-32 flex items-center justify-center ">
              <CiMobile4 className="text-[48px]" />
            </div>
            <div className="rounded-[15px] bg-[#EDEDED] w-40 h-32 flex items-center justify-center ">
              <FaLaptopCode className="text-[48px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
