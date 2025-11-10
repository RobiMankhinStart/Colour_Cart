import React from "react";
import Image from "next/image";
import Link from "next/link";
import imgPlayStation from "../../../public/PlayStation.png";
const Advertisement = () => {
  return (
    <div>
      {/* <div className="container"> */}
      <div className="addRow flex justify-between">
        <div className="left flex flex-col">
          <div className="top flex items-center ">
            <Image
              width={370}
              height={350}
              alt="playstation"
              src={imgPlayStation}
            />
            <div className="flex flex-col w-[338px] ">
              <h2 className="text-[49px] font-medium font-inter">
                Playstation 5
              </h2>
              <p className="text-[#909090] text-[14px] font-inter font-medium">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>
          <div className="bot flex justify-between w-[800px] ">
            <div className="flex gap-12 items-center">
              <img
                className="w-[130px]"
                src="/hero__gnfk5g59t0qe_xlarge_2x 1.png"
                alt="head phone"
              />
              <div className="w-[150px]">
                <h3 className="font-inter font-light text-[29px]">
                  Apple AirPods <span className="font-medium">Max</span>
                </h3>
                <p className="text-[14px] font-medium font-inter text-[#909090]">
                  Computational audio. Listen, it's powerful
                </p>
              </div>
            </div>
            <div className="flex w-[390px] gap-4 items-center bg-[#353535] ">
              <img
                className="w-[136px] h-[150px]"
                src="/image 36.png"
                alt="vision"
              />
              <div className="w-[160px] ">
                <h2 className="text-[29px] font-light font-inter text-white">
                  Apple Vision <span className="font-medium">Pro</span>
                </h2>
                <p className="text-[14px] font-medium font-inter text-[#909090]">
                  An immersive way to experience entertainment
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right flex justify-between items-center pl-[56px] bg-[#EDEDED]">
          <div className="w-[360px]">
            <h3 className="text-[64px] font-inter font-thin">
              Macbook <span className="font-medium">Air</span>{" "}
            </h3>
            <p className="text-[#909090] text-[14px] font-inter font-medium">
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <Link
              className=" inline-block border rounded-md text-[16px] font-medium font-inter w[191px] py-4 px-[56px]"
              href={"/shop"}
            >
              Shop Now
            </Link>
          </div>
          <div>
            <img
              className="w-[292px]"
              src="/MacBook Pro 14.png"
              alt="MacBook Pro"
            />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Advertisement;
