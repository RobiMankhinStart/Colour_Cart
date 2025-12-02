"use client";
import React, { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import Link from "next/link";

const page = () => {
  const [products, setProducts] = useState([]);
  console.log("products", products);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=100");
        const data = await res.json();

        setProducts(data.products);
      } catch (error) {
        console.log("fetching error : ", error);
      }
    }
    getProducts();
  }, []);

  // Pagination calculations
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = products.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const goNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);
  const goPrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  return (
    <div className="px-[23px] font-poppins! ">
      <h2 className="text-[28px] font-bold font-poppins">All Products</h2>

      {/* bread Curmbs  */}
      <div className="flex items-center gap-2 pt-3 pb-6">
        <Link
          href={"/dashboard"}
          className=" flex gap-0.5 items-center cursor-pointer hover:scale-110 duration-200"
        >
          <GoHome className="mb-1" />
          <h3 className="text-[#7E7E8F] font-poppins text-[12px]">
            Home/Dashboard
          </h3>
        </Link>
        <MdKeyboardDoubleArrowRight className="text-[#7E7E8F]" />
        <h3 className="text-[#7364DB] font-poppins text-[12px] cursor-pointer hover:scale-110 duration-200">
          All Products
        </h3>
      </div>
      {/* .....................pagination......................  */}
      <div className="w-full flex justify-between items-center mb-4 px-2">
        <button
          onClick={goPrev}
          disabled={currentPage === 1}
          className="px-4 py-2  hover:text-textHover rounded-lg bg-bg text-sm hover:bg-secondary disabled:opacity-40"
        >
          Previous
        </button>

        <p className="text-sm font-medium">
          Page <span className="text-blue-500">{currentPage}</span> of{" "}
          {totalPages}
        </p>

        <button
          onClick={goNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 hover:text-textHover rounded-lg bg-bg text-sm hover:bg-secondary disabled:opacity-40"
        >
          Next
        </button>
      </div>
      {/* ...productList......  */}
      <div className="proList bg-background w-full rounded-xl p-6">
        {/* ...header .... */}
        <div className="w-full border-b border-[#E8EDF2] pb-6 p-2 flex items-center justify-betwee gap-[390px]">
          <div className="flex  text-primary gap-14   items-center ">
            <div className="flex items-center gap-10 ">
              <div className="flex items-center gap-3">
                <p className=" text-[16px]">Image</p>
                <div className="flex flex-col">
                  <MdKeyboardArrowUp />
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-10 ">
              <div className="flex items-center gap-3">
                <p className=" text-[16px]">Name</p>
                <div className="flex flex-col">
                  <MdKeyboardArrowUp />
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
          </div>
          <div className="flex text-[#7E7E8F]! gap-x-20  items-center ">
            <div className="flex items-center gap-10 ">
              <div className="flex items-center gap-3">
                <p className=" text-[16px]">SKU</p>
                <div className="flex flex-col">
                  <MdKeyboardArrowUp />
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-10 ">
              <div className="flex items-center gap-3">
                <p className=" text-[16px]">Price</p>
                <div className="flex flex-col">
                  <MdKeyboardArrowUp />
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-10 ">
              <div className="flex items-center gap-3">
                <p className=" text-[16px]">Status</p>
                <div className="flex flex-col">
                  <MdKeyboardArrowUp />
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-10 ">
              <div className="flex items-center gap-3">
                <p className=" text-[16px]">QTy</p>
                <div className="flex flex-col">
                  <MdKeyboardArrowUp />
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-10 ">
              <div className="flex items-center gap-3">
                <p className=" text-[16px]">Rating</p>
                <div className="flex flex-col">
                  <MdKeyboardArrowUp />
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-10 ">
              <div className="flex items-center gap-3">
                <p className=" text-[16px]">Sales</p>
                <div className="flex flex-col">
                  <MdKeyboardArrowUp />
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ......proList....  */}
        <div className="">
          {currentItems?.map((item) => (
            <div
              key={item.id}
              className="w-full my-3  border-b border-[#E8EDF2] pb-2 flex items-center  gap-[60px]"
            >
              <div className="flex  text-[#7E7E8F] gap-10   w-[35%] items-center ">
                <Link
                  href={"/dashboard/products/id"}
                  className="cursor-pointer hover:scale-110 duration-300 "
                >
                  <Image
                    className=""
                    src={item.thumbnail}
                    height={80}
                    width={82}
                    alt="productImg"
                  />
                </Link>

                <div className="flex items-center gap-10">
                  <div className="flex flex-col gap-1">
                    <Link
                      href={"/dashboard/products/id"}
                      className=" text-[16px] font-semibold cursor-pointer hover:scale-110 duration-500 hover:text-secondary"
                    >
                      {item.title}
                    </Link>
                    <p className="text-[14px]  h-16 overflow-y-hidden text-[#7E7E8F] w-[250px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex text-[#7E7E8F]! gap-14  items-center ">
                <p className=" text-[16px] text-[#7E7E8F] w-[40%]">
                  {item.sku}
                </p>

                <p className=" text-[16px] ">${item.price}</p>

                <div className="flex items-center gap-2 ml-8 ">
                  <div className="bg-[#50D1B2] size-3 rounded-full"></div>
                  <p className=" text-[16px] ">Active</p>
                </div>
                <div className="flex items-center gap-10 ">
                  <p className=" text-[16px] ml-10">556</p>
                </div>

                <div className="text-[#FEA73E] ml-9 text-[20px] flex items-center gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p className=" text-[14px] font-semibold ml-4 w-[100px]">
                  186 / 2058
                </p>
                <button className="cursor-pointer">
                  <SlOptions />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
