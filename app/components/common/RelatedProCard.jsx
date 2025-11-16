"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import ProCard from "./ProCard";

export default function RelatedProCard({ singleProduct }) {
  const [related, setRelated] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      const rel = data.products.filter(
        (item) => item.category === singleProduct.category
      );
      setRelated(rel);
    }
    fetchProducts();
  }, [singleProduct.category]);
  console.log("related :", related);

  return (
    <div className=" pt-20 ">
      <h3 className="text-[24px] font-medium mb-8">Related Products</h3>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper pb-12!"
      >
        {related?.map((item) => (
          <SwiperSlide key={item.id}>
            <ProCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
