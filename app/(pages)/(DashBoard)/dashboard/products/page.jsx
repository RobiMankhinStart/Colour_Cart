"use client";
import React, { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import product1 from "../../../../../public/product1.png";
import product2 from "../../../../../public/product2.png";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import Link from "next/link";

const page = () => {
  const [products, setProducts] = useState([]);
  console.log("products", products);
  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        setProducts(data.products);
      } catch (error) {
        console.log("fetching error : ", error);
      }
    }
    getProducts();
  }, []);
  return (
    <div className="px-[23px] font-poppins! ">
      <h2 className="text-[28px] font-bold font-poppins">All Products</h2>

      {/* bread Curmbs  */}
      <div className="flex items-center gap-2 pt-3 pb-6">
        <div className=" flex gap-0.5 items-center cursor-pointer hover:scale-110 duration-200">
          <GoHome className="mb-1" />
          <h3 className="text-[#7E7E8F] font-poppins text-[12px]">Home</h3>
        </div>
        <MdKeyboardDoubleArrowRight className="text-[#7E7E8F]" />
        <h3 className="text-[#7364DB] font-poppins text-[12px] cursor-pointer hover:scale-110 duration-200">
          All Products
        </h3>
      </div>
      {/* ...productList......  */}
      <div className="proList bg-white! w-full rounded-xl p-6">
        {/* ...header .... */}
        <div className="w-full border-b border-[#E8EDF2] pb-6 p-2 flex items-center justify-betwee gap-[390px]">
          <div className="flex  text-[#7E7E8F]! gap-14   items-center ">
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
          {products?.map((item) => (
            <div
              key={item.id}
              className="w-full my-3  border-b border-[#E8EDF2] pb-2 flex items-center  gap-[60px]"
            >
              <div className="flex  text-[#7E7E8F]! gap-10   w-[35%] items-center ">
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
                      className=" text-[16px] font-semibold cursor-pointer hover:scale-110 duration-500 hover:text-gray-800"
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
                <p className=" text-[16px] text-[#7E7E8F] [20%]">{item.sku}</p>

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
