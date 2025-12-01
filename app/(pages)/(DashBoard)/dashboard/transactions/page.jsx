import React from "react";
import { GoHome } from "react-icons/go";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import product1 from "../../../../../public/product1.png";
import product2 from "../../../../../public/product2.png";
import Image from "next/image";
import { CiCalendar, CiFilter, CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const page = () => {
  return (
    <div className="px-[23px] font-poppins! ">
      <h2 className="text-[28px] font-bold font-poppins">Transaction List</h2>
      {/* bread Curmbs  */}
      <div className="flex items-center gap-2 pt-3 pb-6">
        <Link
          href={"/dashboard"}
          className=" flex gap-0.5 items-center cursor-pointer hover:scale-110 duration-200"
        >
          <GoHome />
          <h3 className="text-[#7E7E8F] font-poppins text-[12px]">
            Home/Dashboard
          </h3>
        </Link>
        <MdKeyboardDoubleArrowRight className="text-[#7E7E8F]" />
        <h3 className="text-[#7364DB] font-poppins text-[12px] cursor-pointer hover:scale-110 duration-200">
          Transaction List
        </h3>
      </div>
      {/* category  */}
      <div className="my-6 flex items-center justify-between">
        <button className="cursor-pointer w-[225px] border border-[#E8EDF2] bg-white rounded-lg h-12 flex px-3 items-center justify-between">
          <p className="text-[#7E7E8F] text-[14px]">All Category</p>
          <p className="text-[#7E7E8F] text-[14px]">
            <IoIosArrowDown />
          </p>
        </button>
        <div className="flex items-center gap-3">
          <button className="cursor-pointer w-[174px] border border-[#E8EDF2] bg-white rounded-lg h-12 flex px-3 items-center justify-between">
            <p className="text-[#7E7E8F] text-[14px]">10-02-2021</p>
            <p className="text-[#7E7E8F] text-[18px]">
              <CiCalendar />
            </p>
          </button>
          <button className="cursor-pointer w-[174px] border border-[#E8EDF2] bg-white rounded-lg h-12 flex px-3 items-center justify-between">
            <p className="text-[#7E7E8F] text-[14px]">Status</p>
            <p className="text-[#7E7E8F] text-[18px]">
              <CiCalendar />
            </p>
          </button>
          <button className="cursor-pointer w-[90px] border border-[#E8EDF2] bg-white rounded-lg h-12 flex px-3 items-center justify-between">
            <p className="text-[#7E7E8F] text-[18px]">
              <CiFilter />
            </p>
            <p className="text-[#7E7E8F] text-[14px]">Filters</p>
          </button>
        </div>
      </div>
      {/* ...Pendings......  */}
      <div className="proList rounded-xl p-6 bg-white">
        {/* ...header .... */}
        <h3 className="text-[18px] font-semibold border-b border-[#E8EDF2] pb-4 mb-2">
          Pending Transactions
        </h3>
        <div className="w-full  border-b border-[#E8EDF2] pb-2 flex items-center gap-[235px]">
          <div className="flex text-[#7E7E8F]! gap-14  items-center ">
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
          {/* <div className="w-full my-3 border-b border-[#E8EDF2] pb-2 flex items-center gap-[60px]">
            <div className="flex text-[#7E7E8F]! gap-10  items-center ">
              <div className=" ">
                <Image src={product1} width={82} alt="productImg" />
              </div>

              <div className="flex items-center gap-10 ">
                <div className="flex flex-col gap-1">
                  <p className=" text-[16px] font-semibold">
                    Cubitt Smart Watch
                  </p>
                  <p className="text-[12px] text-[#7E7E8F] w-[250px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex text-[#7E7E8F]! gap-14  items-center ">
              <p className=" text-[16px] text-[#7E7E8F]">FROX-13563</p>

              <p className=" text-[16px] ">$576.28</p>

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

              <p className=" text-[14px] font-semibold ml-4">186 / 2058</p>
              <button className="cursor-pointer">
                <SlOptions />
              </button>
            </div>
          </div> */}
          <div className="w-full my-3 border-b border-[#E8EDF2] pb-2 flex items-center gap-[60px]">
            <div className="flex text-[#7E7E8F]! gap-10  items-center ">
              <div className=" ">
                <Image src={product1} width={82} alt="productImg" />
              </div>

              <div className="flex items-center gap-10 ">
                <div className="flex flex-col gap-1">
                  <p className=" text-[16px] font-semibold">
                    Cubitt Smart Watch
                  </p>
                  <p className="text-[12px] text-[#7E7E8F] w-[250px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex text-[#7E7E8F]! gap-14  items-center ">
              <p className=" text-[16px] text-[#7E7E8F]">FROX-13563</p>

              <p className=" text-[16px] ">$576.28</p>

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

              <p className=" text-[14px] font-semibold ml-4">186 / 2058</p>
              <button className="cursor-pointer">
                <SlOptions />
              </button>
            </div>
          </div>
          <div className="w-full my-3 border-b border-[#E8EDF2] pb-2 flex items-center gap-[60px]">
            <div className="flex text-[#7E7E8F]! gap-10  items-center ">
              <div className=" ">
                <Image src={product2} width={82} alt="productImg" />
              </div>

              <div className="flex items-center gap-10 ">
                <div className="flex flex-col gap-1">
                  <p className=" text-[16px] font-semibold">
                    Cubitt Smart Watch
                  </p>
                  <p className="text-[12px] text-[#7E7E8F] w-[250px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex text-[#7E7E8F]! gap-14  items-center ">
              <p className=" text-[16px] text-[#7E7E8F]">FROX-13563</p>

              <p className=" text-[16px] ">$576.28</p>

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

              <p className=" text-[14px] font-semibold ml-4">186 / 2058</p>
              <button className="cursor-pointer">
                <SlOptions />
              </button>
            </div>
          </div>
          <div className="w-full my-3 border-b border-[#E8EDF2] pb-2 flex items-center gap-[60px]">
            <div className="flex text-[#7E7E8F]! gap-10  items-center ">
              <div className=" ">
                <Image src={product1} width={82} alt="productImg" />
              </div>

              <div className="flex items-center gap-10 ">
                <div className="flex flex-col gap-1">
                  <p className=" text-[16px] font-semibold">
                    Cubitt Smart Watch
                  </p>
                  <p className="text-[12px] text-[#7E7E8F] w-[250px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex text-[#7E7E8F]! gap-14  items-center ">
              <p className=" text-[16px] text-[#7E7E8F]">FROX-13563</p>

              <p className=" text-[16px] ">$576.28</p>

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

              <p className=" text-[14px] font-semibold ml-4">186 / 2058</p>
              <button className="cursor-pointer">
                <SlOptions />
              </button>
            </div>
          </div>
          <div className="w-full my-3 border-b border-[#E8EDF2] pb-2 flex items-center gap-[60px]">
            <div className="flex text-[#7E7E8F]! gap-10  items-center ">
              <div className=" ">
                <Image src={product2} width={82} alt="productImg" />
              </div>

              <div className="flex items-center gap-10 ">
                <div className="flex flex-col gap-1">
                  <p className=" text-[16px] font-semibold">
                    Cubitt Smart Watch
                  </p>
                  <p className="text-[12px] text-[#7E7E8F] w-[250px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex text-[#7E7E8F]! gap-14  items-center ">
              <p className=" text-[16px] text-[#7E7E8F]">FROX-13563</p>

              <p className=" text-[16px] ">$576.28</p>

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

              <p className=" text-[14px] font-semibold ml-4">186 / 2058</p>
              <button className="cursor-pointer">
                <SlOptions />
              </button>
            </div>
          </div>
          {/* <div className="w-full my-3 border-b border-[#E8EDF2] pb-2 flex items-center gap-[60px]">
            <div className="flex text-[#7E7E8F]! gap-10  items-center ">
              <div className=" ">
                <Image src={product2} width={82} alt="productImg" />
              </div>

              <div className="flex items-center gap-10 ">
                <div className="flex flex-col gap-1">
                  <p className=" text-[16px] font-semibold">
                    Cubitt Smart Watch
                  </p>
                  <p className="text-[12px] text-[#7E7E8F] w-[250px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex text-[#7E7E8F]! gap-14  items-center ">
              <p className=" text-[16px] text-[#7E7E8F]">FROX-13563</p>

              <p className=" text-[16px] ">$576.28</p>

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

              <p className=" text-[14px] font-semibold ml-4">186 / 2058</p>
              <button className="cursor-pointer">
                <SlOptions />
              </button>
            </div>
          </div> */}
        </div>
      </div>

      {/* ...Completed...... 
      .................. */}
      <div className="Completed rounded-xl p-6 mt-6 bg-white">
        {/* ...header .... */}
        <h3 className="text-[18px] font-semibold border-b border-[#E8EDF2] pb-4 mb-2">
          Completed Transactions
        </h3>
        <div className="w-full  border-b border-[#E8EDF2] pb-2 flex items-center gap-[235px]">
          <div className="flex text-[#7E7E8F]! gap-14  items-center ">
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
          {/* <div className="w-full my-3 border-b border-[#E8EDF2] pb-2 flex items-center gap-[60px]">
            <div className="flex text-[#7E7E8F]! gap-10  items-center ">
              <div className=" ">
                <Image src={product1} width={82} alt="productImg" />
              </div>

              <div className="flex items-center gap-10 ">
                <div className="flex flex-col gap-1">
                  <p className=" text-[16px] font-semibold">
                    Cubitt Smart Watch
                  </p>
                  <p className="text-[12px] text-[#7E7E8F] w-[250px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex text-[#7E7E8F]! gap-14  items-center ">
              <p className=" text-[16px] text-[#7E7E8F]">FROX-13563</p>

              <p className=" text-[16px] ">$576.28</p>

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

              <p className=" text-[14px] font-semibold ml-4">186 / 2058</p>
              <button className="cursor-pointer">
                <SlOptions />
              </button>
            </div>
          </div> */}
          <div className="w-full my-3 border-b border-[#E8EDF2] pb-2 flex items-center gap-[60px]">
            <div className="flex text-[#7E7E8F]! gap-10  items-center ">
              <div className=" ">
                <Image src={product1} width={82} alt="productImg" />
              </div>

              <div className="flex items-center gap-10 ">
                <div className="flex flex-col gap-1">
                  <p className=" text-[16px] font-semibold">
                    Cubitt Smart Watch
                  </p>
                  <p className="text-[12px] text-[#7E7E8F] w-[250px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex text-[#7E7E8F]! gap-14  items-center ">
              <p className=" text-[16px] text-[#7E7E8F]">FROX-13563</p>

              <p className=" text-[16px] ">$576.28</p>

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

              <p className=" text-[14px] font-semibold ml-4">186 / 2058</p>
              <button className="cursor-pointer">
                <SlOptions />
              </button>
            </div>
          </div>
          <div className="w-full my-3 border-b border-[#E8EDF2] pb-2 flex items-center gap-[60px]">
            <div className="flex text-[#7E7E8F]! gap-10  items-center ">
              <div className=" ">
                <Image src={product2} width={82} alt="productImg" />
              </div>

              <div className="flex items-center gap-10 ">
                <div className="flex flex-col gap-1">
                  <p className=" text-[16px] font-semibold">
                    Cubitt Smart Watch
                  </p>
                  <p className="text-[12px] text-[#7E7E8F] w-[250px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex text-[#7E7E8F]! gap-14  items-center ">
              <p className=" text-[16px] text-[#7E7E8F]">FROX-13563</p>

              <p className=" text-[16px] ">$576.28</p>

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

              <p className=" text-[14px] font-semibold ml-4">186 / 2058</p>
              <button className="cursor-pointer">
                <SlOptions />
              </button>
            </div>
          </div>
          <div className="w-full my-3 border-b border-[#E8EDF2] pb-2 flex items-center gap-[60px]">
            <div className="flex text-[#7E7E8F]! gap-10  items-center ">
              <div className=" ">
                <Image src={product1} width={82} alt="productImg" />
              </div>

              <div className="flex items-center gap-10 ">
                <div className="flex flex-col gap-1">
                  <p className=" text-[16px] font-semibold">
                    Cubitt Smart Watch
                  </p>
                  <p className="text-[12px] text-[#7E7E8F] w-[250px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex text-[#7E7E8F]! gap-14  items-center ">
              <p className=" text-[16px] text-[#7E7E8F]">FROX-13563</p>

              <p className=" text-[16px] ">$576.28</p>

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

              <p className=" text-[14px] font-semibold ml-4">186 / 2058</p>
              <button className="cursor-pointer">
                <SlOptions />
              </button>
            </div>
          </div>
          <div className="w-full my-3 border-b border-[#E8EDF2] pb-2 flex items-center gap-[60px]">
            <div className="flex text-[#7E7E8F]! gap-10  items-center ">
              <div className=" ">
                <Image src={product2} width={82} alt="productImg" />
              </div>

              <div className="flex items-center gap-10 ">
                <div className="flex flex-col gap-1">
                  <p className=" text-[16px] font-semibold">
                    Cubitt Smart Watch
                  </p>
                  <p className="text-[12px] text-[#7E7E8F] w-[250px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex text-[#7E7E8F]! gap-14  items-center ">
              <p className=" text-[16px] text-[#7E7E8F]">FROX-13563</p>

              <p className=" text-[16px] ">$576.28</p>

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

              <p className=" text-[14px] font-semibold ml-4">186 / 2058</p>
              <button className="cursor-pointer">
                <SlOptions />
              </button>
            </div>
          </div>
          {/* <div className="w-full my-3 border-b border-[#E8EDF2] pb-2 flex items-center gap-[60px]">
            <div className="flex text-[#7E7E8F]! gap-10  items-center ">
              <div className=" ">
                <Image src={product2} width={82} alt="productImg" />
              </div>

              <div className="flex items-center gap-10 ">
                <div className="flex flex-col gap-1">
                  <p className=" text-[16px] font-semibold">
                    Cubitt Smart Watch
                  </p>
                  <p className="text-[12px] text-[#7E7E8F] w-[250px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex text-[#7E7E8F]! gap-14  items-center ">
              <p className=" text-[16px] text-[#7E7E8F]">FROX-13563</p>

              <p className=" text-[16px] ">$576.28</p>

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

              <p className=" text-[14px] font-semibold ml-4">186 / 2058</p>
              <button className="cursor-pointer">
                <SlOptions />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default page;
