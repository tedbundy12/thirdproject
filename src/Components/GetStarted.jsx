import React from "react";

import ilu from "../assets/Illustration.svg";

function GetStarted() {
  return (
    <div className="flex gap-10 justify-center mb-[175px] eightthreezero:flex-wrap eightthreezero:gap-[70px]">
      <div className="left">
        <p className="font-def font-medium leading-[70px] text-[50px] mb-5 onezeroeightfive:text-[45px] eightfivethree:text-[40px] fivezeronine:text-center fourthreezero:text-[35px]">
          Want anything to be <br /> easy with{" "}
          <span className="font-bold">LaslesVPN.</span>
        </p>
        <p className="text-[#4F5665] leading-[30px] text-[16px] mb-[50px] font-def fivezeronine:text-center">
          Provide a network for all your needs with ease and <br className="hidden eightfivezero:block"/> fun using <br className="hidden ninefivezero:block eightfivezero:hidden"/>{" "}
          <span className="font-bold">LaslesVPN</span> <br className="ninefivezero:hidden" /> discover
          interesting features from us.
        </p>
        <div className="fivezeronine:flex fivezeronine:justify-center">
          <button className="bg-[#F53838] text-white font-def w-[250px] h-[60px] font-bold rounded-[10px] border-none shadow-lg shadow-red-200 onezerozerozero:w-[180px] onezerozerozero:h-[50px]">
            Get Started
          </button>
        </div>
      </div>
      <div className="right">
        <img src={ilu} alt="" className="onetwothreezero:w-[500px] onezeroeightfive:w-[400px] onezerozerozero:w-[350px] eightthreezero:w-full" />
      </div>
    </div>
  );
}

export default GetStarted;
