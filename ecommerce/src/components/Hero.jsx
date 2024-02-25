/* eslint-disable no-unused-vars */
import React from "react";
import hero from "../assets/Mask.png";
function Hero() {
  return (
    <>
      <div className="relative">
        <img className="w-[100%] relative " src={hero} alt="" />
        <div className="bg-[#FFF3E3] w-[650px] rounded-lg bottom-36 right-16 py-10 px-12 absolute">
          <span className="poppins tracking-[6px] text-[#333333]">New Arrival</span>
          <h1 className="poppins text-[52px] text-[#B88E2F] leading-[80px]">Discover our new Collection</h1>
          <p className="poppins font-medium text-lg leading-[80px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className=" bg-[#B88E2F] py-4 px-12 text-white">Buy now</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
