import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text0-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div className="">
        <img
          src={assets.exchange_icon}
          alt="exchangeIcon"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold text-center">Easy Exchange Policy</p>
        <p className="text-gray-400 text-center">We offer hassle free exchange policy</p>
      </div>
      
      <div className="">
        <img
          src={assets.quality_icon}
          alt="qualityIcon"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold text-center">7 Days Return Policy</p>
        <p className="text-gray-400 text-center">We offer 7 days free return policy</p>
      </div>
      
      <div className="">
        <img
          src={assets.support_img}
          alt="supportIcon"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold text-center">Best Customer Support</p>
        <p className="text-gray-400 text-center">We offer 24x7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
