import React, { useState, useRef, useEffect } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

export default function ReviewList() {
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  // MORE ITEMS ADDED
  const reviews = Array.from({ length: 12 }).map((_, i) => ({
    name: `User ${i + 1}`,
    email: `user${i + 1}@gmail.com`,
    comment:
      "Amet ultricies convallis netus nec, quisque erat, velit amet cursus eros...",
    date: "28 Jan 2022",
    rating: 5,
  }));

  return (
    <div className="bg-white pl-[25px] pr-[9px] pt-[25px] pb-[25px] rounded-xl shadow-sm w-full">
      <h2 className="text-[16px] font-semibold font-main text-[#07070C] border-b pb-4 border-[#E8EDF2]">
        Reviews List
      </h2>

      {/* FIXED HEIGHT SO ACTION MENU DOESN'T CREATE SCROLL */}
      <div className="mt-4 max-h-[420px] overflow-y-auto">
        <div className="min-w-[900px]">
          {/* HEADER */}
          <div className="flex text-[14px] font-normal font-main text-[#9A9AAF] border-b border-[#E8EDF2] pb-3">
            <div className="flex items-center gap-[82px] w-[250px]">
              <input type="checkbox" className="w-4 h-4" />
              <span>Customer</span>
            </div>

            <div className="w-[300px]">Comment</div>
            <div className="w-[120px]">Rating</div>
            <div className="w-[140px]">Date</div>
            <div className="w-[60px]">Actions</div>
          </div>

          {/* ROWS */}
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start border-b border-[#E8EDF2] py-[15px]"
            >
              {/* Customer */}
              <div className="flex items-center gap-[82px] w-[250px]">
                <input type="checkbox" className="w-4 h-4" />

                <div>
                  <div className="text-[12px] font-semibold text-[#07070C]">
                    {item.name}
                  </div>
                  <div className="text-[12px] text-[#9A9AAF]">{item.email}</div>
                </div>
              </div>

              {/* Comment */}
              <div className="w-[300px] text-[12px] text-[#7E7E8F]">
                {item.comment}
              </div>

              {/* Rating */}
              <div className="w-[120px] flex items-center gap-1">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <AiFillStar key={i} className="text-yellow-500 text-lg" />
                ))}
              </div>

              {/* Date */}
              <div className="w-[140px] text-[12px] text-[#7E7E8F]">
                {item.date}
              </div>

              {/* Actions */}
              <div className="w-[60px] relative">
                <button
                  className="p-2"
                  // onClick={() => setOpenMenu(openMenu === idx ? null : idx)}
                  onClick={() => {
                    if (openMenu === idx) {
                      setOpenMenu(null); // close
                    } else {
                      setOpenMenu(idx); // open
                    }
                  }}
                >
                  <FiMoreVertical size={18} />
                </button>

                {/* POPUP MENU */}
                {openMenu === idx && (
                  <div
                    ref={menuRef}
                    className="absolute right-6 top-8 bg-white border border-[#E8EDF2] shadow-lg w-32 rounded-md p-2 z-50"
                  >
                    <ul className="text-sm">
                      <li className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
                        Approved
                      </li>
                      <li className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
                        Reply
                      </li>
                      <li className="py-2 px-3 text-red-500 hover:bg-red-50 cursor-pointer">
                        Delete
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
