import React from "react";

import logo from "../assets/Logo.svg";

function Header() {
  return (
    <div className="pt-[50px] px-[150px] flex items-center justify-between mb-[120px] navbarFirst:px-[50px]">
      <div>
        <img src={logo} alt="" className="w-[150px] h-[36px]" />
      </div>

      <div className="flex gap-[40px] font-def ">
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Testimonials</a>
        <a href="#">Help</a>
      </div>

      <div className="flex gap-[30px] items-center">
        <a href="#" className="font-def font-bold ">
          Sign In
        </a>
        <a
          href="#"
          className="font-def text-[#F53855] border-2 border-red-500 text-red-500 rounded-full px-6 py-2 hover:bg-red-500 hover:text-white transition-colors duration-300"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default Header;
