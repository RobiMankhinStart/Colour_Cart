import Link from "next/link";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="py-4 shadow z-40 bg-[#ffff] fixed top-0 left-0 right-0">
      <div className="container">
        <nav className="flex font-semibold justify-between items-center">
          {/* <Link href={"/"} className="text-[25px] font-inter">
            OneMegaByte
          </Link> */}
          <Link
            href={"/"}
            className="relative overflow-hidden bg-gradient-to-r from-green-400 to-blue-500 text-white py-4 px-8 font-semibold rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:skew-x-12"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gray-50"></span>
            <span className="relative z-10 text-gray-600 text-2xl font-inter">
              <span className="text-3xl text-gray-600">O</span>ne
              <span className="text-3xl text-gray-600">M</span>ega
              <span className="text-3xl text-gray-600">B</span>yte
            </span>
          </Link>
          <div className="w-[372px] p-4 bg-[#F5F5F5] text-[#989898] rounded-[8px] flex items-center gap-1">
            <CiSearch className="text-[24px]" />
            <input className="outline-none " type="text" placeholder="Search" />
          </div>
          <ul className="flex text-[#989898] items-center gap-[52px]">
            <li className="text-[#989898] hover:text-black font-inter text-[20px] font-medium">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-[#989898] hover:text-black font-inter text-[20px] font-medium">
              <Link href={"/"}>About</Link>
            </li>
            <li className="text-[#989898] hover:text-black font-inter text-[20px] font-medium">
              <Link href={"/"}>Contact Us</Link>
            </li>
            <li className="text-[#989898] hover:text-black font-inter text-[20px] font-medium">
              <Link href={"/register"}>Register</Link>
            </li>
          </ul>
          <div className="flex items-center gap-6">
            <div className="text-[32px] text-black cursor-pointer hover:text-[#989898] hover:scale-110 duration-200">
              <IoMdHeartEmpty />
            </div>
            <div className="text-[32px] text-black cursor-pointer hover:text-[#989898] hover:scale-110 duration-200">
              <IoCartOutline />
            </div>
            <Link
              href={"/login"}
              className="text-[32px] text-black cursor-pointer hover:text-[#989898] hover:scale-110 duration-200"
            >
              <FiUser />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
