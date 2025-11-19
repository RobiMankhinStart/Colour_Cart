// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import imagePhone from "../../../../public/imagePhone.png";
// import { CiCircleRemove } from "react-icons/ci";
// import Summary from "@/app/components/ShoppingCart/Summary";

// const page = () => {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [cartProducts, setCartProducts] = useState([]);
//   useEffect(() => {
//     const localIDs = JSON.parse(localStorage.getItem("nextProID")) || [];
//     async function getProducts() {
//       try {
//         const res = await fetch("https://dummyjson.com/products");
//         const data = await res.json();
//         const filteringIDs = data.products.filter((item) =>
//           localIDs.includes(item.id)
//         );
//         setCartProducts(filteringIDs);
//       } catch (error) {
//         console.log("fetching error : ", error);
//       }
//     }
//     getProducts();
//   }, []);
//   console.log("cartProducts", cartProducts);

//   // remove from cart
//   const removeFromCart = (id) => {
//     const localIDs = JSON.parse(localStorage.getItem("nextProID")) || [];
//     const removedID = localIDs.filter((item) => item !== id);
//     localStorage.setItem("nextProID", JSON.stringify(removedID));
//     // updating ui
//     setCartProducts((prev) => prev.filter((item) => item.id !== id));
//   };
//   return (
//     <div className="container">
//       <div className="mainDiv flex gap-12">
//         <div className="leftProduct">
//           <h2 className="text-[24px] font-semibold mb-10">Shopping Cart</h2>
//           {cartProducts?.map((item) => (
//             <div
//               key={item.id}
//               className="flex py-5 gap-4 items-center border-b border-[#A3A3A3]"
//             >
//               <Image
//                 src={item.thumbnail}
//                 width={90}
//                 height={90}
//                 alt="productImg"
//                 className="object-cover"
//               />
//               <div className="flex flex-col gap-1">
//                 <h3 className="text-[16px] font-medium">{item.title}</h3>
//                 <p className="text-[14px]">#{item.meta.barcode}</p>
//               </div>
//               <div className="flex mr-2 items-center gap-2 text-[16px] font-medium">
//                 <button className="text-[20px] mb-1 cursor-pointer hover:scale-105 duration-200">
//                   -
//                 </button>
//                 <p className="px-2.5 border border-[#D9D9D9]">1</p>
//                 <button className="text-[20px] cursor-pointer hover:scale-105 duration-200">
//                   +
//                 </button>
//               </div>
//               <h3 className="text-[20px] font-medium">${item.price}</h3>
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="text-[28px] cursor-pointer hover:scale-105 duration-200"
//               >
//                 <CiCircleRemove />
//               </button>
//             </div>
//           ))}
//         </div>
//         {/* ......summary..  */}
//         <Summary />
//       </div>
//     </div>
//   );
// };

// export default page;

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import Summary from "@/app/components/ShoppingCart/Summary";

const page = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const localIDs = JSON.parse(localStorage.getItem("nextProID")) || [];
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

  const removeFromCart = (id) => {
    const localIDs = JSON.parse(localStorage.getItem("nextProID")) || [];
    const removedID = localIDs.filter((item) => item !== id);
    localStorage.setItem("nextProID", JSON.stringify(removedID));
    setCartProducts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Shopping Cart</h2>
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Product List */}
        <div className="flex-1">
          {cartProducts?.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-4 border-b border-gray-300"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.thumbnail}
                  width={90}
                  height={90}
                  alt={item.title}
                  className="object-cover rounded-md"
                />
                <div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-500">
                    #{item.meta?.barcode || "N/A"}
                  </p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <button className="text-xl px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">
                  -
                </button>
                <p className="px-3 py-1 border border-gray-300 rounded text-center">
                  1
                </p>
                <button className="text-xl px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">
                  +
                </button>
              </div>

              {/* Price & Remove */}
              <div className="flex items-center gap-4 mt-2 sm:mt-0">
                <h3 className="text-lg font-medium">${item.price}</h3>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-2xl text-red-500 hover:text-red-700"
                >
                  <CiCircleRemove />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="w-full lg:w-1/3">
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default page;
