import React from "react";

import ilu from '../assets/Illustration.svg'

function GetStarted() {
  return (
    <div className="flex gap-10 justify-center mb-[175px]">
      <div className="left">
        <p className="font-def font-medium leading-[70px] text-[50px] mb-5 oneonezerozero:text-[40px]">
          Want anything to be <br /> easy with{" "}
          <span className="font-bold">LaslesVPN.</span>
        </p>
        <p className="text-[#4F5665] leading-[30px] text-[16px] mb-[50px] font-def oneonezerozero:text-[14px]">
          Provide a network for all your needs with ease and fun using{" "}
          <span className="font-bold">LaslesVPN</span> <br /> discover
          interesting features from us.
        </p>
        <div>
          <button className="bg-[#F53838] text-white font-def w-[250px] h-[60px] rounded font-bold rounded-[10px] border-none shadow-lg shadow-red-200">
            Get Started
          </button>
        </div>
      </div>
      <div className="right">
        <img src={ilu} alt="" className="navbarFirst:w-[500px]"/>
      </div>
    </div>
  );
}

export default GetStarted;
