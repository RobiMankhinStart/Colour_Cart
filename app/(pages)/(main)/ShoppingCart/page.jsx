import Image from "next/image";
import React from "react";
import imagePhone from "../../../../public/imagePhone.png";
import { CiCircleRemove } from "react-icons/ci";

const page = () => {
  return (
    <div className="container">
      <div className="mainDiv">
        <div className="leftProduct">
          <h2 className="text-[24px] font-semibold mb-10">Shopping Cart</h2>
          <div className="flex py-5 gap-4 items-center border-b border-[#A3A3A3]">
            <Image
              src={imagePhone}
              width={90}
              alt="productImg"
              className="object-cover"
            />
            <div className="flex flex-col gap-1">
              <h3 className="text-[16px] font-medium">
                Apple iPhone 14 Pro Max 128Gb Deep Purple
              </h3>
              <p className="text-[14px]">#25139526913984</p>
            </div>
            <div className="flex mr-2 items-center gap-2 text-[16px] font-medium">
              <button className="text-[20px] mb-1 cursor-pointer hover:scale-105 duration-200">
                -
              </button>
              <p className="px-2.5 border border-[#D9D9D9]">1</p>
              <button className="text-[20px] cursor-pointer hover:scale-105 duration-200">
                +
              </button>
            </div>
            <h3 className="text-[20px] font-medium">$1399</h3>
            <button className="text-[28px] cursor-pointer hover:scale-105 duration-200">
              <CiCircleRemove />
            </button>
          </div>
          <div className="flex py-5 gap-4 items-center border-b border-[#A3A3A3]">
            <Image
              src={imagePhone}
              width={90}
              alt="productImg"
              className="object-cover"
            />
            <div className="flex flex-col gap-1">
              <h3 className="text-[16px] font-medium">
                Apple iPhone 14 Pro Max 128Gb Deep Purple
              </h3>
              <p className="text-[14px]">#25139526913984</p>
            </div>
            <div className="flex mr-2 items-center gap-2 text-[16px] font-medium">
              <button className="text-[20px] mb-1 cursor-pointer hover:scale-105 duration-200">
                -
              </button>
              <p className="px-2.5 border border-[#D9D9D9]">1</p>
              <button className="text-[20px] cursor-pointer hover:scale-105 duration-200">
                +
              </button>
            </div>
            <h3 className="text-[20px] font-medium">$1399</h3>
            <button className="text-[28px] cursor-pointer hover:scale-105 duration-200">
              <CiCircleRemove />
            </button>
          </div>
        </div>
        <div className="summary">
          <h2 className="text-[24px] font-semibold mb-10">Shopping Cart</h2>
          <div>
            <label className="text-[#545454] text-[14px]" htmlFor="promoCode">
              Discount code / Promo code
            </label>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
