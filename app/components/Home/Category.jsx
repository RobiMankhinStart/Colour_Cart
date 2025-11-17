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
        // console.log(data);
        setcategories(data);
      } catch (error) {
        console.log("fetching error : ", error);
      }
    }
    getcategories();
  }, []);
  console.log("categories", categories);
  return (
    <div className="py-20">
      <div className="container">
        <div className="mainRow gap-8 items-center flex flex-col">
          <h3 className="font-inter font-medium text-[24px]">
            Browse By Category
          </h3>
          <div className="flex items-center gap-6 flex-wrap">
            {categories.map((item) => (
              <div
                key={item.name}
                className="rounded-[15px] bg-[#EDEDED]  px-6 py-5 flex items-center justify-center "
              >
                {/* <CiMobile4 className="text-[48px]" /> */}
                <p className="text-xl">{item.name}</p>
              </div>
            ))}
            {/* <div className="rounded-[15px] bg-[#EDEDED] w-40 h-32 flex items-center justify-center ">
              <FaLaptopCode className="text-[48px]" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
