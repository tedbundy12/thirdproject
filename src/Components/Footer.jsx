import React from "react";

import logo from "../assets/Logo.svg";
import fb from "../assets/Facebook.svg";
import tw from "../assets/Twitter.svg";
import insta from "../assets/Instagram.svg";

function Footer() {
  return (
    <div className="bg-[#F8F8F8] w-full h-[450px] py-[180px] justify-center flex gap-[250px] oneonefivezero:gap-[100px] oneonefivezero:w-full">
      <div>
        <img src={logo} alt="" className="mb-5" />
        <p className="text-[#4F5665] text-[16px] font-def leading-[30px] mb-[25px]">
          <span className="font-semibold">LaslesVPN</span> is a private virtual
          network that <br /> has unique features and has high security.
        </p>
        <div className="flex items-center ml-[-20px]">
          <img src={fb} alt="" className="mr-[-12px]"/>
          <img src={tw} alt="" className=""/>
          <img src={insta} alt="" className="ml-[-12px]"/>
        </div>
      </div>
      <div className="flex gap-[130px]">
        <div>
            <p className="font-for mb-5 text-[#0B132A] font-semibold text-[18px]">Product</p>
            <p className="font-for text-[#4F5665] text-[16px] mb-[10px]">Download</p>
            <p className="font-for text-[#4F5665] text-[16px] mb-[10px]">Pricing</p>
            <p className="font-for text-[#4F5665] text-[16px] mb-[10px]">Locations</p>
            <p className="font-for text-[#4F5665] text-[16px] mb-[10px]">Server</p>
            <p className="font-for text-[#4F5665] text-[16px] mb-[10px]">Countries</p>
            <p className="font-for text-[#4F5665] text-[16px] mb-[10px]">Blog</p>
        </div>
        <div>
            <p className="font-for mb-5 text-[#0B132A] font-semibold text-[18px]">Engage</p>
            <p className="font-for text-[#4F5665] text-[16px] mb-[10px]">LaslesVPN ?</p>
            <p className="font-for text-[#4F5665] text-[16px] mb-[10px]">FAQ</p>
            <p className="font-for text-[#4F5665] text-[16px] mb-[10px]">Tutorials</p>
            <p className="font-for text-[#4F5665] text-[16px] mb-[10px]">About Us</p>
            <p className="font-for text-[#4F5665] text-[16px] mb-[10px]">Privacy Policy</p>
            <p className="font-for text-[#4F5665] text-[16px] mb-[10px]">Terms of Service</p>
        </div>
        <div>
            <p className="font-for mb-5 text-[#0B132A] font-semibold text-[18px]">Earn Money</p>
            <p className="font-for text-[#4F5665] text-[16px] mb-[10px]">Affiliate</p>
            <p className="font-for text-[#4F5665] text-[16px] mb-[10px]">Become Partner</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
