"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiEdit, FiX } from "react-icons/fi";
import StePTwo from "@/app/components/checkout/StePTwo";
import imagePhone from "../../../../public/imagePhone.png";

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
  const SubTotal = cartProducts.reduce((acc, item) => acc + item.price, 0);
  const Total = SubTotal + 29 + 23;

  const [step, setStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(1);
  const router = useRouter();

  const steps = ["Address", "Shipping", "Payment"];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* ---- Step Indicators ---- */}
      <div className="flex justify-between mb-8">
        {steps.map((label, i) => {
          const active = step === i + 1;
          const completed = step > i + 1;
          return (
            <div key={i} className="flex flex-col items-center relative">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center
                ${
                  active
                    ? "bg-black text-white"
                    : completed
                    ? "bg-green-500 text-white"
                    : "bg-gray-300"
                }`}
              >
                {i + 1}
              </div>
              <p className="text-sm mt-1">{label}</p>

              {i < 2 && (
                <div
                  className={`absolute top-4 left-10 w-20 h-1
                ${completed ? "bg-green-500" : "bg-gray-300"}`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* ---- STEP 1: Address ---- */}
      {step === 1 && (
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <h3 className="font-semibold">Select Address</h3>

          {addresses.map((addr) => {
            const active = selectedAddress === addr.id;
            return (
              <div
                key={addr.id}
                onClick={() => setSelectedAddress(addr.id)}
                className={`p-4 border rounded-md cursor-pointer flex justify-between
                ${active ? "border-black bg-gray-50" : "border-gray-200"}`}
              >
                <div>
                  <p className="font-medium flex items-center gap-2">
                    {addr.label}
                    <span className="text-xs bg-gray-800 text-white px-2 py-0.5 rounded">
                      {addr.type}
                    </span>
                  </p>
                  <p className="text-gray-500 text-sm">{addr.address}</p>
                  <p className="text-gray-500 text-sm">{addr.phone}</p>
                </div>

                <div className="flex flex-col gap-2">
                  <FiEdit
                    className="text-gray-500 hover:text-black"
                    size={18}
                  />
                  <FiX className="text-gray-500 hover:text-red-500" size={18} />
                </div>
              </div>
            );
          })}

          <button className="text-black font-medium mt-3">
            + Add New Address
          </button>
        </div>
      )}

      {/* ---- STEP 2 ---- */}
      {step === 2 && <StePTwo />}

      {/* ---- STEP 3: Payment ---- */}
      {step === 3 && (
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <h3 className="font-semibold">Payment</h3>
          {cartProducts.length === 0 && (
            <p className="text-gray-500">No item</p>
          )}
          {cartProducts.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center py-4 border-b border-gray-200"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.thumbnail}
                  width={90}
                  height={90}
                  alt={item.title}
                  className="rounded-md"
                />
                <p className="text-lg font-medium">{item.title}</p>
              </div>

              <p className="text-lg font-medium">${item.price}</p>
            </div>
          ))}
        </div>
      )}

      {/* ---- Navigation Buttons ---- */}
      <div className="flex justify-end gap-4 mt-6">
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="border border-gray-400 px-5 py-2 rounded-md cursor-pointer hover:scale-110 duration-200"
          >
            Back
          </button>
        )}

        {step < 3 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="bg-black text-white px-6 py-2 rounded-md cursor-pointer hover:scale-110 duration-200"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => {
              localStorage.removeItem("nextProID");
              setCartProducts([]);
              router.push("/");
            }}
            className="bg-black text-white px-6 py-2 rounded-md cursor-pointer hover:scale-110 duration-200"
          >
            Pay
          </button>
        )}
      </div>
    </div>
  );
}
