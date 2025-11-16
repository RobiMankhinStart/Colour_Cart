// "use client";
// import React, { useState } from "react";
// // Import Swiper React components
// import Image from "next/image";

// // import Swiper JS
// // import Swiper from "swiper";
// import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// // import Swiper styles
// import "swiper/css";
// // Import Swiper styles
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// export default function ProductDetails({ product }) {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <div className="border">
//       <Swiper
//         style={{
//           "--swiper-navigation-color": "#fff",
//           "--swiper-pagination-color": "#fff",
//         }}
//         // loop={true}
//         spaceBetween={10}
//         navigation={true}
//         thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper2"
//       >
//         {product?.images?.map((item, index) => (
//           <SwiperSlide key={index}>
//             <Image
//               src={item}
//               alt="product img"
//               width={200}
//               height={500}
//               className="object-cover rounded-md border w-full h-auto"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <Swiper
//         onSwiper={setThumbsSwiper}
//         loop={true}
//         spaceBetween={10}
//         slidesPerView={4}
//         freeMode={true}
//         watchSlidesProgress={true}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper"
//       >
//         {product?.images.map((item, index) => (
//           <SwiperSlide key={index}>
//             <Image
//               src={item}
//               alt="product img"
//               height={300}
//               width={300}
//               className="object-cover rounded-md"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
"use client";

import React, { useState } from "react";
import Image from "next/image";

const ProductDetails = ({ product }) => {
  const [currantImage, setCurrantImage] = useState(product?.images[0] || "");
  return (
    <div className="flex flex-start gap-4">
      <div className="flex flex-col gap-2">
        {product?.images.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt={`productImage-${index}`}
            width={150}
            height={150}
            className={`cursor-pointer p-2  bg-gray-100 rounded-md w-28 h-28 object-contain opacity-80 hover:opacity-100 duration-200 ${
              currantImage === item
                ? "border-2 border-gray-200 opacity-100"
                : ""
            }`}
            onClick={() => setCurrantImage(item)}
          />
        ))}
      </div>
      <div className="bg-gray-100 rounded-md ml-5 w-full max-h-[550px] border-gray-200 shadow-sm flex items-center justify-center cursor-pointer">
        {product?.images[0] ? (
          <Image
            src={currantImage}
            alt="productImage"
            width={400}
            height={420}
            className="object-contain w-full h-full "
          />
        ) : (
          <p className="text-gray-500 text-sm">No image found</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
