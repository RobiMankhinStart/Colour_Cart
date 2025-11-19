import Image from "next/image";
import React from "react";
import banner2 from "../../../public/Banner2.png";

const Sale = () => {
  return (
    <div>
      <div className="w-full relative border h-[300px] sm:h-[400px] md:h-[500px]">
        <Image src={banner2} style={{ objectFit: "cover" }} alt="banner" />
      </div>
    </div>
  );
};

export default Sale;
