import React from "react";

import user from "../assets/User.svg";
import location from "../assets/Location.svg";
import server from "../assets/Server.svg";

function SmallUsers() {
  return (
    <div className="flex justify-center items-center gap-[120px] shadow-sm shadow-white-200 w-[1140px] h-[200px] m-0 m-auto">
      <div className="flex gap-[36.5px] items-center">
        <img src={user} alt="" className="w-[55px] h-[55px]" />
        <div>
          <p className="text-black font-def font-bold text-[25px] mb-[2px]">
            90+
          </p>
          <p className="text-[#4F5665] text-[20px] font-def">Users</p>
        </div>
      </div>
      <hr className="border-[1px] h-[125px] border-[#EEEFF2]" />
      <div className="flex gap-[36.5px] items-center">
        <img src={location} alt="" className="w-[55px] h-[55px]" />
        <div>
          <p className="text-black font-def font-bold text-[25px] mb-[2px]">
            30+
          </p>
          <p className="text-[#4F5665] text-[20px] font-def">Locations</p>
        </div>
      </div>
      <hr className="border-[1px] h-[125px] border-[#EEEFF2]" />
      <div className="flex gap-[36.5px] items-center">
        <img src={server} alt="" className="w-[55px] h-[55px]" />
        <div>
          <p className="text-black font-def font-bold text-[25px] mb-[2px]">
            50+
          </p>
          <p className="text-[#4F5665] text-[20px] font-def">Servers</p>
        </div>
      </div>
    </div>
  );
}

export default SmallUsers;
