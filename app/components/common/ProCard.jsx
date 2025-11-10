import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";

const ProCard = ({ item }) => {
  if (!item) return null;
  const { thumbnail, price, title, id } = item;
  return (
    <div className="w-[268px] bg-[#F6F6F6] rounded-[9px] px-4 py-6 flex flex-col gap-4 items-center justify-center">
      <div className=" w-full flex justify-end">
        <CiHeart className="text-[32px] hover:scale-110 duration-200 cursor-pointer" />
      </div>
      <img className="w-[160px]" src={thumbnail} alt="productImg" />
      <Link
        href={`/products/${id}`}
        className=" ml-5 text-[16px]  flex mx-auto font-medium font-inter"
      >
        {title}
      </Link>
      <h3 className="text-[24px] font-semibold font-inter">{price}</h3>
      <button className="cursor-pointer hover:bg-[#909090] py-3 px-[64px] font-medium font-inter text-[14px] rounded-[8px] bg-black text-white w-[188px] flex items-center justify-center">
        Buy Now
      </button>
    </div>
  );
};

export default ProCard;
