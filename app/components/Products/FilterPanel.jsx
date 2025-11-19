// "use client";
// import React, { useState } from "react";
// import Left from "./Left";
// import { IoIosClose } from "react-icons/io";

// const FilterPanel = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Mobile Button */}
//       <div className="md:hidden mb-4">
//         <button
//           onClick={() => setIsOpen(true)}
//           className="px-4 py-2 border rounded-md font-medium w-full"
//         >
//           Filters
//         </button>
//       </div>

//       {/* Overlay */}
//       {isOpen && (
//         <div
//           onClick={() => setIsOpen(false)}
//           className="fixed inset-0 bg-black/40 z-40 md:hidden"
//         ></div>
//       )}

//       {/* Slide-Out Panel */}
//       <div
//         className={`
//           fixed top-0 left-0 h-full bg-white z-50 w-[80%] max-w-[320px]
//           transform transition-transform duration-300 md:hidden
//           ${isOpen ? "translate-x-0" : "-translate-x-full"}
//         `}
//       >
//         {/* Close button */}
//         <div className="p-4 flex justify-between items-center border-b">
//           <h3 className="text-lg font-medium">Filters</h3>
//           <button onClick={() => setIsOpen(false)}>
//             <IoIosClose className="text-3xl" />
//           </button>
//         </div>

//         {/* Sidebar Content */}
//         <div className="overflow-y-auto h-[calc(100%-60px)] p-4">
//           <Left />
//         </div>
//       </div>

//       {/* Desktop Sidebar (normal) */}
//       <div className="hidden md:block w-[260px]">
//         <Left />
//       </div>
//     </>
//   );
// };

// export default FilterPanel;

"use client";
import React from "react";
import Left from "./Left";

export default function FilterPanel() {
  return (
    <div className="p-4">
      <Left />
    </div>
  );
}
