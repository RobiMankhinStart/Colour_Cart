import Image from "next/image";
import React from "react";
import banner2 from "../../../public/Banner2.png";

const Sale = () => {
  return (
    <div>
      <div className=" h-[300px] sm:h-[400px] md:h-[500px]">
        <Image src={banner2} alt="banner" className="w-full" />
      </div>
    </div>
  );
};

export default Sale;
