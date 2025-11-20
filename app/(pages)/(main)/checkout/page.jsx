// "use client";
// import React, { useState } from "react";
// import { FiEdit, FiX } from "react-icons/fi";
// import { GrRadialSelected } from "react-icons/gr";
// import imagePhone from "../../../../public/imagePhone.png";
// import Image from "next/image";

// const addresses = [
//   {
//     id: 1,
//     label: "2118 Thornridge",
//     type: "HOME",
//     address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
//     phone: "(209) 555-0104",
//   },
//   {
//     id: 2,
//     label: "Headoffice",
//     type: "OFFICE",
//     address: "2715 Ash Dr. San Jose, South Dakota 83475",
//     phone: "(704) 555-0127",
//   },
// ];

// export default function CheckoutSteps() {
//   const [step, setStep] = useState(1);
//   const [selectedAddress, setSelectedAddress] = useState(addresses[0].id);

//   const handleNext = () => {
//     if (step < 3) setStep(step + 1);
//   };

//   const handleBack = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-10">
//       {/* Step indicators */}
//       <div className="flex justify-between mb-8">
//         {["Address", "Shipping", "Payment"].map((title, index) => (
//           <div key={index} className="flex flex-col items-center relative">
//             <div
//               className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                 step === index + 1
//                   ? "bg-black text-white"
//                   : step > index + 1
//                   ? "bg-green-500 text-white"
//                   : "bg-gray-300 text-gray-600"
//               }`}
//             >
//               {index + 1}
//             </div>
//             <p className="text-sm mt-2">{title}</p>
//             {index < 2 && (
//               <div
//                 className={`absolute top-3 left-10 w-20 h-1 ${
//                   step > index + 1 ? "bg-green-500" : "bg-gray-300"
//                 }`}
//               ></div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Step content */}
//       {step === 1 && (
//         <div className="bg-white p-6 rounded-lg shadow space-y-4">
//           <h3 className="font-semibold mb-4">Select Address</h3>
//           {addresses.map((addr) => (
//             <div
//               key={addr.id}
//               className={`flex items-center justify-between p-4 rounded-md border ${
//                 selectedAddress === addr.id
//                   ? "border-black bg-gray-50"
//                   : "border-gray-200 bg-white"
//               }`}
//             >
//               <label className="flex items-center gap-4 cursor-pointer flex-1">
//                 <input
//                   type="radio"
//                   name="address"
//                   value={addr.id}
//                   checked={selectedAddress === addr.id}
//                   onChange={() => setSelectedAddress(addr.id)}
//                   className="w-4 h-4"
//                 />
//                 <div>
//                   <p className="font-medium">
//                     {addr.label}{" "}
//                     <span className="text-xs bg-gray-800 text-white px-2 py-0.5 rounded ml-2">
//                       {addr.type}
//                     </span>
//                   </p>
//                   <p className="text-gray-500 text-sm">{addr.address}</p>
//                   <p className="text-gray-500 text-sm">{addr.phone}</p>
//                 </div>
//               </label>
//               <div className="flex gap-2">
//                 <button className="text-gray-500 hover:text-black">
//                   <FiEdit size={18} />
//                 </button>
//                 <button className="text-gray-500 hover:text-red-500">
//                   <FiX size={18} />
//                 </button>
//               </div>
//             </div>
//           ))}
//           <button className="flex items-center justify-center gap-2 mt-4 text-black font-medium">
//             + Add New Address
//           </button>
//         </div>
//       )}

//       {step === 2 && (
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h3 className="font-semibold mb-4">Shipping Options</h3>
//           <div className="flex flex-col justify-center gap-4">
//             <div className="border border-[#D1D1D8] rounded-lg px-6 flex gap-2 items-center py-6 tetx-[16px]">
//               <GrRadialSelected /> <h3>Free</h3> <p>Regulary shipment</p>
//             </div>
//             <div className="border border-[#D1D1D8] text-[#A2A3B1] rounded-lg px-6 flex gap-2 items-center py-6 tetx-[16px]">
//               <GrRadialSelected /> <h3>$5.60</h3>{" "}
//               <p>Get your delivery as soon as possible</p>
//             </div>
//             <div className="border border-[#D1D1D8] text-[#A2A3B1] rounded-lg px-6 flex gap-2 items-center py-6 tetx-[16px]">
//               <GrRadialSelected /> <h3>Schedule</h3>{" "}
//               <p>Pick a date when you want to get your delivery</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {step === 3 && (
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h3 className="font-semibold mb-4">Payment</h3>
//           {/* ............pro 1...................  */}
//           <div className="flex-1">
//             <div
//               // key={item.id}
//               className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-4 border-b border-gray-300"
//             >
//               <div className="flex items-center gap-4">
//                 <Image
//                   src={imagePhone}
//                   width={90}
//                   height={90}
//                   alt={"product"}
//                   className="object-cover rounded-md"
//                 />
//                 <div>
//                   <h3 className="text-lg font-medium">Apple iphone</h3>
//                   <p className="text-sm text-gray-500">
//                     {/* #{item.meta?.barcode || "N/A"} */}
//                   </p>
//                 </div>
//               </div>

//               {/* Price & Remove */}
//               <div className="flex items-center gap-4 mt-2 sm:mt-0">
//                 <h3 className="text-lg font-medium">$10.00</h3>
//               </div>
//             </div>
//           </div>
//           {/*............................ pro2.................  */}
//           <div className="flex-1">
//             <div
//               // key={item.id}
//               className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-4 border-b border-gray-300"
//             >
//               <div className="flex items-center gap-4">
//                 <Image
//                   src={imagePhone}
//                   width={90}
//                   height={90}
//                   alt={"product"}
//                   className="object-cover rounded-md"
//                 />
//                 <div>
//                   <h3 className="text-lg font-medium">Apple iphone</h3>
//                   <p className="text-sm text-gray-500">
//                     {/* #{item.meta?.barcode || "N/A"} */}
//                   </p>
//                 </div>
//               </div>

//               {/* Price & Remove */}
//               <div className="flex items-center gap-4 mt-2 sm:mt-0">
//                 <h3 className="text-lg font-medium">$10.00</h3>
//               </div>
//             </div>
//           </div>
//           {/* pro 3 .................... */}
//           <div className="flex-1">
//             <div
//               // key={item.id}
//               className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-4 border-b border-gray-300"
//             >
//               <div className="flex items-center gap-4">
//                 <Image
//                   src={imagePhone}
//                   width={90}
//                   height={90}
//                   alt={"product"}
//                   className="object-cover rounded-md"
//                 />
//                 <div>
//                   <h3 className="text-lg font-medium">Apple iphone</h3>
//                   <p className="text-sm text-gray-500">
//                     {/* #{item.meta?.barcode || "N/A"} */}
//                   </p>
//                 </div>
//               </div>

//               {/* Price & Remove */}
//               <div className="flex items-center gap-4 mt-2 sm:mt-0">
//                 <h3 className="text-lg font-medium">$10.00</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Navigation buttons */}
//       <div className="flex justify-end gap-4 mt-6">
//         {step > 1 && (
//           <button
//             onClick={handleBack}
//             className="border border-gray-400 px-4 py-2 rounded-md"
//           >
//             Back
//           </button>
//         )}
//         {step < 3 && (
//           <button
//             onClick={handleNext}
//             className="bg-black text-white px-6 py-2 rounded-md"
//           >
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import { FiEdit, FiX } from "react-icons/fi";
import { GrRadialSelected } from "react-icons/gr";
import imagePhone from "../../../../public/imagePhone.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const addresses = [
  {
    id: 1,
    label: "2118 Thornridge",
    type: "HOME",
    address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    phone: "(209) 555-0104",
  },
  {
    id: 2,
    label: "Headoffice",
    type: "OFFICE",
    address: "2715 Ash Dr. San Jose, South Dakota 83475",
    phone: "(704) 555-0127",
  },
];

export default function CheckoutSteps() {
  const [step, setStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(addresses[0].id);
  const router = useRouter();

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handlePay = () => {
    router.push("/");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-10">
      {/* Step indicators */}
      <div className="flex justify-between mb-8">
        {["Address", "Shipping", "Payment"].map((title, index) => (
          <div key={index} className="flex flex-col items-center relative">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === index + 1
                  ? "bg-black text-white"
                  : step > index + 1
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {index + 1}
            </div>
            <p className="text-sm mt-2">{title}</p>
            {index < 2 && (
              <div
                className={`absolute top-3 left-10 w-20 h-1 ${
                  step > index + 1 ? "bg-green-500" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <h3 className="font-semibold mb-4">Select Address</h3>
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className={`flex items-center justify-between p-4 rounded-md border ${
                selectedAddress === addr.id
                  ? "border-black bg-gray-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <label className="flex items-center gap-4 cursor-pointer flex-1">
                <input
                  type="radio"
                  name="address"
                  value={addr.id}
                  checked={selectedAddress === addr.id}
                  onChange={() => setSelectedAddress(addr.id)}
                  className="w-4 h-4"
                />
                <div>
                  <p className="font-medium">
                    {addr.label}{" "}
                    <span className="text-xs bg-gray-800 text-white px-2 py-0.5 rounded ml-2">
                      {addr.type}
                    </span>
                  </p>
                  <p className="text-gray-500 text-sm">{addr.address}</p>
                  <p className="text-gray-500 text-sm">{addr.phone}</p>
                </div>
              </label>
              <div className="flex gap-2">
                <button className="text-gray-500 hover:text-black">
                  <FiEdit size={18} />
                </button>
                <button className="text-gray-500 hover:text-red-500">
                  <FiX size={18} />
                </button>
              </div>
            </div>
          ))}
          <button className="flex items-center justify-center gap-2 mt-4 text-black font-medium">
            + Add New Address
          </button>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4">Shipping Options</h3>
          <div className="flex flex-col justify-center gap-4">
            <div className="border border-[#D1D1D8] rounded-lg px-6 flex gap-2 items-center py-6 text-[16px]">
              <GrRadialSelected /> <h3>Free</h3> <p>Regular shipment</p>
            </div>
            <div className="border border-[#D1D1D8] text-[#A2A3B1] rounded-lg px-6 flex gap-2 items-center py-6 text-[16px]">
              <GrRadialSelected /> <h3>$5.60</h3>{" "}
              <p>Get your delivery as soon as possible</p>
            </div>
            <div className="border border-[#D1D1D8] text-[#A2A3B1] rounded-lg px-6 flex gap-2 items-center py-6 text-[16px]">
              <GrRadialSelected /> <h3>Schedule</h3>{" "}
              <p>Pick a date when you want your delivery</p>
            </div>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4">Payment</h3>

          {[1, 2, 3].map((item) => (
            <div key={item} className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-4 border-b border-gray-300">
                <div className="flex items-center gap-4">
                  <Image
                    src={imagePhone}
                    width={90}
                    height={90}
                    alt={"product"}
                    className="object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-lg font-medium">Apple iPhone</h3>
                    <p className="text-sm text-gray-500"></p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-2 sm:mt-0">
                  <h3 className="text-lg font-medium">$10.00</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
        {step > 1 && (
          <button
            onClick={handleBack}
            className="border border-gray-400 px-5 py-2 rounded-md"
          >
            Back
          </button>
        )}

        {step < 3 ? (
          <button
            onClick={handleNext}
            className="bg-black text-white px-6 py-2 rounded-md"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handlePay}
            className="bg-black text-white px-6 py-2 rounded-md"
          >
            Pay
          </button>
        )}
      </div>
    </div>
  );
}
