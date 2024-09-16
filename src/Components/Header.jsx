import React from "react";

import logo from "../assets/Logo.svg";

function Header() {
  return (
    <div className="pt-[50px] px-[150px] flex items-center justify-between mb-[120px] oneonefivezero:px-[50px] fivezeronine:px-[20px]">
      <div>
        <img src={logo} alt="" className="w-[150px] h-[36px] fourzerozero:w-[120px]" />
      </div>

      <div className="flex gap-[40px] font-def ninefivezero:top-[120px] ninefivezero:absolute ninefivezero:left-1/2 ninefivezero:transform ninefivezero:-translate-x-1/2 ninefivezero:-translate-y-1/2 fivezeronine:gap-[30px] fourthreezero:text-[14px] fourthreezero:gap-[20px]">
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Testimonials</a>
        <a href="#">Help</a>
      </div>

      <div className="flex gap-[30px] items-center fourzerozero:gap-[20px]">
        <a href="#" className="font-def font-bold fourzerozero:text-[14px]">
          Sign In
        </a>
        <a
          href="#"
          className="font-def text-[#F53855] border-2 border-red-500  rounded-full px-6 py-2 hover:bg-red-500 hover:text-white transition-colors duration-300 fourzerozero:px-2"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default Header;
