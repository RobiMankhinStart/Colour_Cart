import React from "react";

const Summary = () => {
  return (
    <div>
      <div className="summary py-14 px-14 border border-[#EBEBEB]">
        <h2 className="text-[24px] font-semibold mb-10">Order Summary</h2>
        <div className="flex flex-col mb-6">
          <label
            className="text-[#545454] text-[14px] mb-2"
            htmlFor="promoCode"
          >
            Discount code / Promo code
          </label>
          <input
            className="text-[#545454] text-[14px] p-4 border w-[400px] rounded-md border-[#979797]"
            type="text"
            id="promoCode"
            placeholder="Code"
          />
        </div>
        <div className="flex flex-col relative">
          <label
            className="text-[#545454] text-[14px] mb-2"
            htmlFor="promoCode"
          >
            Your bonus card number
          </label>
          <input
            className="text-[#545454] text-[14px] p-4 border w-[400px] rounded-md border-[#979797]"
            type="text"
            id="promoCode"
            placeholder="Enter Card Number"
          />
          <button className="cursor-pointer absolute right-4 top-11 px-2 py-1 text-[12px] font-medium border rounded-md ">
            Apply
          </button>
        </div>
        <div className="flex items-center justify-between mt-6 text-[16px] font-medium">
          <h3>Subtotal</h3>
          <h3>$2347</h3>
        </div>
        <div className="flex mt-4 mb-2 items-center justify-between  text-[16px] font-medium">
          <h3 className="text-[#545454] font-normal">Estimated Tax</h3>
          <h3>$29</h3>
        </div>
        <div className="flex mb-5 items-center justify-between  text-[16px] font-medium">
          <h3 className="text-[#545454] font-normal">
            Estimated shipping & Handling
          </h3>
          <h3>$23</h3>
        </div>
        <div className="flex items-center justify-between mb-[52px] text-[16px] font-medium">
          <h3>Total</h3>
          <h3>$2347</h3>
        </div>
        <button className="bg-black text-white text-lg font-medium flex items-center justify-center w-[408px] h-14 rounded-md cursor-pointer hover:bg-gray-800">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Summary;
