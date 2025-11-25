// "use client";
// import Image from "next/image";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import avator from "../../../../public/AvatarReview.png";

// const purchases = [
//   {
//     product: "MacBook Pro",
//     orderId: "#25413",
//     date: "Aug 5th, 2021",
//     customer: { name: "Bessie Cooper", avatar: avator },
//     status: "Delivered",
//     amount: "$400.00",
//   },
//   {
//     product: "iPhone 11 Pro",
//     orderId: "#25413",
//     date: "Aug 5th, 2021",
//     customer: { name: "Annette Black", avatar: avator },
//     status: "Pending",
//     amount: "$200.00",
//   },
//   {
//     product: "Oppo A20",
//     orderId: "#25413",
//     date: "Aug 5th, 2021",
//     customer: { name: "Bessie Cooper", avatar: avator },
//     status: "Delivered",
//     amount: "$250.00",
//   },
// ];

// const statusColor = {
//   Delivered: "bg-green-500",
//   Pending: "bg-orange-400",
//   Canceled: "bg-red-500",
// };

// export default function RecentPurchases() {
//   return (
//     <div className="bg-white p-6 shadow rounded-xl mt-6">
//       <h2 className="text-[18px] font-semibold mb-4">Recent Purchases</h2>

//       <table className="w-full text-left">
//         <thead>
//           <tr className="text-gray-500 text-sm border-b">
//             <th className="pb-3">Products</th>
//             <th className="pb-3">Order ID</th>
//             <th className="pb-3">Date</th>
//             <th className="pb-3">Customer name</th>
//             <th className="pb-3">Status</th>
//             <th className="pb-3">Amount</th>
//             <th className="pb-3">Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {purchases.map((p, i) => (
//             <tr key={i} className="border-b last:border-none">
//               <td className="py-4">{p.product}</td>
//               <td>{p.orderId}</td>
//               <td>{p.date}</td>
//               <td className="flex items-center gap-2">
//                 <Image
//                   width={24}
//                   height={24}
//                   src={p.customer.avatar}
//                   className=" rounded-full"
//                   alt="customer"
//                 />
//                 {p.customer.name}
//               </td>
//               <td className="flex items-center gap-1">
//                 <span
//                   className={`w-2 h-2 rounded-full ${statusColor[p.status]}`}
//                 ></span>
//                 {p.status}
//               </td>
//               <td>{p.amount}</td>
//               <td>
//                 <BsThreeDotsVertical className="cursor-pointer" />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import avator from "../../../../public/AvatarReview.png";

const purchases = [
  {
    product: "MacBook Pro",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: { name: "Bessie Cooper", avatar: avator },
    status: "Delivered",
    amount: "$400.00",
  },
  {
    product: "iPhone 11 Pro",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: { name: "Annette Black", avatar: avator },
    status: "Pending",
    amount: "$200.00",
  },
  {
    product: "Oppo A20",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: { name: "Bessie Cooper", avatar: avator },
    status: "Delivered",
    amount: "$250.00",
  },
];

const statusColor = {
  Delivered: "bg-green-500",
  Pending: "bg-orange-400",
  Canceled: "bg-red-500",
};

export default function RecentPurchases() {
  return (
    <div className=" w-[99%] bg-white p-6 shadow rounded-xl mt-6 font-poppins!">
      <h2 className="text-[18px] font-semibold mb-4">Recent Purchases</h2>

      {/* HEADER ROW */}
      <div className="flex justify-between text-[#9A9AAF] font-medium border-b border-[#E8EDF2] pb-3">
        {/* <div className="w-1 border"></div> */}
        <div className=" ml-10">Products</div>
        <div className="">Order ID</div>
        <div className="">Date</div>
        <div className="">Customer name</div>
        <div className="">Status</div>
        <div className="">Amount</div>
        <div className="">Actions</div>
      </div>

      {/* ROWS */}
      {purchases.map((p, i) => (
        <div
          key={i}
          className="flex items-center border-b border-[#E8EDF2] py-4 last:border-none"
        >
          {/* Square Check Box */}
          <div className="w-9  flex justify-center">
            <div className="w-[18px] h-[18px] rounded border border-[#B0BAC9]"></div>
          </div>

          {/* Product */}
          <div className="flex-1">{p.product}</div>

          {/* Order ID */}
          <div className="flex-1">{p.orderId}</div>

          {/* Date */}
          <div className="flex-1">{p.date}</div>

          {/* Customer */}
          <div className="flex-1 flex items-center gap-2">
            <Image
              src={p.customer.avatar}
              width={26}
              height={26}
              alt="avatar"
              className="rounded-full"
            />
            {p.customer.name}
          </div>

          {/* Status */}
          <div className="flex-1 flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${statusColor[p.status]}`}
            ></span>
            {p.status}
          </div>

          {/* Amount */}
          <div className="flex-1">{p.amount}</div>

          {/* Actions */}
          <div className="w-[30px]">
            <BsThreeDotsVertical className="cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
}
