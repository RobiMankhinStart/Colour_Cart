"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import imagePhone from "../../../../public/imagePhone.png";
import { CiCircleRemove } from "react-icons/ci";
import Summary from "@/app/components/ShoppingCart/Summary";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cartProducts, setCartProducts] = useState([]);
  const localIDs = JSON.parse(localStorage.getItem("nextProID")) || [];
  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        const filteringIDs = data.products.filter((item) =>
          localIDs.includes(item.id)
        );
        setCartProducts(filteringIDs);
      } catch (error) {
        console.log("fetching error : ", error);
      }
    }
    getProducts();
  }, []);
  console.log("cartProducts", cartProducts);

  // remove from cart
  const removeFromCart = (id) => {
    const removedID = localIDs.filter((item) => item !== id);
    localStorage.setItem("nextProID", JSON.stringify(removedID));
    // updating ui
    setCartProducts((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className="container">
      <div className="mainDiv flex gap-12">
        <div className="leftProduct">
          <h2 className="text-[24px] font-semibold mb-10">Shopping Cart</h2>
          {cartProducts?.map((item) => (
            <div
              key={item.id}
              className="flex py-5 gap-4 items-center border-b border-[#A3A3A3]"
            >
              <Image
                src={item.thumbnail}
                width={90}
                height={90}
                alt="productImg"
                className="object-cover"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-[16px] font-medium">{item.title}</h3>
                <p className="text-[14px]">#{item.meta.barcode}</p>
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
              <h3 className="text-[20px] font-medium">${item.price}</h3>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-[28px] cursor-pointer hover:scale-105 duration-200"
              >
                <CiCircleRemove />
              </button>
            </div>
          ))}
        </div>
        {/* ......summary..  */}
        <Summary />
      </div>
    </div>
  );
};

export default page;
