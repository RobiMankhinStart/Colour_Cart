"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// import Swiper JS
// import Swiper from "swiper";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";

// import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function ProductDetails({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {product?.images?.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item}
              alt="product img"
              width={200}
              height={500}
              className="object-cover rounded-md border w-full h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {product?.images.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item}
              alt="product img"
              height={300}
              width={300}
              className="object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper> */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {product?.images.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item}
              alt="product img"
              height={300}
              width={300}
              className="object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
