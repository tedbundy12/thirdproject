import React from "react";

function Sub() {
  return (
    <div className="w-[1140px] h-[233px] flex justify-center gap-[380px] items-center py-[58px] rounded absolute bg-white left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div>
        <p className="font-for text-[#0B132A] text-[35px] font-semibold leading-[45px] mb-5">
          Subscribe Now for <br /> Get Special Features!
        </p>
        <p className="text-[#4F5665] font-for text-[16px] ">
          Let's subscribe with us and find the fun.
        </p>
      </div>
      <div>
        <button className="bg-[#F53838] text-white font-def w-[250px] h-[60px] rounded font-bold rounded-[10px] border-none shadow-lg shadow-red-200">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}

export default Sub;
