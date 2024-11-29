import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <img src={assets.logo2} alt="logo2" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam
            sed arcu malesuada pulvinar. Donec auctor, libero sed laoreet
            fermentum, orci est facilisis ex, ut tristique nunc nisi id est. Sed
            viverra, dui a posuere fermentum, massa felis consectetur velit, at
            lobortis metus ex in velit.
          </p>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us </li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 999-888-7771</li>
            <li>contact@demosecom.com</li>
          </ul>
        </div>
      </div>


    <div className="">
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ demos.com - All Rights Reserved </p>
    </div>

    </div>
  );
};

export default Footer;
