"use client";
import Image from "next/image";
import React from "react";
import DeliveryTruck from "../../../public/DeliveryTruck.png";
import shop from "../../../public/shop.png";
import verify from "../../../public/verify.png";
const ProClient = ({ product }) => {
  // ......add to cart
  const addToCart = (id) => {
    const localID = JSON.parse(localStorage.getItem("nextProID")) || [];
    if (localID.includes(id)) {
      // console.log("Already added!");
      alert("Already added!");
      return;
    }
    localID.push(id);
    localStorage.setItem("nextProID", JSON.stringify(localID));
  };
  return (
    <div>
      {" "}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-4xl font-bold">{product.title}</h2>
        <h3 className="text-3xl font-medium">${product.price}</h3>
        <p className="text-[#6C6C6C] text-[14px] my-6">{product.description}</p>
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="hover:text-white duration-500 text-black border border-black py-[15px] px-[82px] cursor-pointer rounded-md hover:bg-gray-800 w-fit">
            Add to Wishlist
          </button>
          <button
            onClick={() => addToCart(product.id)}
            className="bg-black text-white py-4 px-[84px] cursor-pointer rounded-md hover:bg-gray-800 w-fit"
          >
            Add to Cart
          </button>
        </div>
        {/* delivery part  */}
        <div className="flex flex-wrap gap-8">
          <div className="flex items-center gap-4">
            <div className="size-14 flex items-center justify-center bg-[#F6F6F6] rounded-xl">
              <Image
                src={DeliveryTruck}
                alt="product img"
                height={24}
                width={24}
                className="object-cover rounded-md"
              />
            </div>
            <div className="text-[14px] font-medium flex flex-col">
              <p className="text-[#717171]">Free Delivery</p>
              <p>1-2 day </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="size-14 flex items-center justify-center bg-[#F6F6F6] rounded-xl">
              <Image
                src={shop}
                alt="product img"
                height={24}
                width={24}
                className="object-cover rounded-md"
              />
            </div>
            <div className="text-[14px] font-medium flex flex-col">
              <p className="text-[#717171]">In Stock</p>
              <p>Today </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="size-14 flex items-center justify-center bg-[#F6F6F6] rounded-xl">
              <Image
                src={verify}
                alt="product img"
                height={24}
                width={24}
                className="object-cover rounded-md"
              />
            </div>
            <div className="text-[14px] font-medium flex flex-col">
              <p className="text-[#717171]">Guaranteed</p>
              <p>1 year </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProClient;
