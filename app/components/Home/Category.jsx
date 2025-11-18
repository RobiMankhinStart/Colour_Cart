"use client";

import React, { useEffect, useState, useRef } from "react";
import { TbCategoryPlus } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

// swipper
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

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
    <div className="py-20 bg-[#FAFAFA]">
      <div className="container">
        <div className="mainRow  gap-8 items-center flex flex-col">
          <div className="flex items-center w-full justify-between">
            <h3 className="font-inter font-semibold text-[24px]">
              Browse By Category
            </h3>
            <div className="flex gap-4">
              {/* Custom arrows */}
              <button className="prev-btn hover:scale-110 duration-200 hover:text-gray-600 text-4xl cursor-pointer">
                <IoIosArrowBack />
              </button>
              <button className="next-btn hover:scale-110 duration-200 hover:text-gray-600 text-4xl cursor-pointer">
                <IoIosArrowForward />
              </button>
            </div>
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              639: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              767: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1023: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            // navigation={true}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper w-full"
          >
            {categories.map((item) => (
              <SwiperSlide
                key={item.name}
                className=" rounded-[15px] cursor-pointer bg-[#EDEDED] p-6 "
              >
                <div className="flex items-center justify-center gap-3">
                  <TbCategoryPlus className="text-[46px]" />
                  <p className="text-xl">{item.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className="custom-pagination mt-4 flex justify-center "></div> */}
        </div>
      </div>
    </div>
  );
};

export default Category;
