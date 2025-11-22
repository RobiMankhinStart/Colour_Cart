"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiEdit, FiX } from "react-icons/fi";
import StePTwo from "@/app/components/checkout/StePTwo";
import imagePhone from "../../../../public/imagePhone.png";

import StepIndicators from "@/app/components/checkout/StepIndi";
import StepOne from "@/app/components/checkout/StepOne";
import StepThree from "@/app/components/checkout/StepThree";

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

  const [step, setStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(1);
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* ---- Step Indicators ---- */}
      <StepIndicators step={step} />

      {/* ---- STEP 1: Address ---- */}
      <StepOne step={step} />

      {/* ---- STEP 2 ---- */}
      {step === 2 && <StePTwo />}

      {/* ---- STEP 3: Payment ---- */}
      <StepThree cartProducts={cartProducts} step={step} />

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
