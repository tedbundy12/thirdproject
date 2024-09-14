import React from "react";

import global from "../assets/Global.svg";
import netflix from "../assets/Netflix.svg";
import reddit from "../assets/Reddit.svg";
import amazon from "../assets/Amazon.svg";
import discord from "../assets/Discord.svg";
import spotify from "../assets/Spotify.svg";

import viezh from "../assets/Viezh.svg";
import yessica from "../assets/Yessica.svg";
import kim from "../assets/Kim.svg";

function Global() {
  return (
    <div className="mb-[260px]">
      <p className="font-def leading-[50px] text-[#0B132A] text-[35px] text-center font-semibold mb-5">
        Huge Global Network <br /> of Fast VPN
      </p>
      <p className="text-[#4F5665] text-[16px] font-def text-center mb-[155px]">
        See <span className="font-medium">LaslesVPN</span> everywhere to make it
        easier for you when you move <br /> locations.
      </p>

      <img src={global} alt="" className="m-0 m-auto mb-[85px] oneonefivezero:w-full" />

      <div className="flex items-center gap-[65px] justify-center mb-[100px] onetwothreezero:gap-[30px] oneonezerozero:flex-wrap">
        <img src={netflix} alt="" />
        <img src={reddit} alt="" />
        <img src={amazon} alt="" />
        <img src={discord} alt="" />
        <img src={spotify} alt="" />
      </div>
      <p className="text-center text-[35px] text-[#0B132A] font-def leading-[50px] font-semibold mb-5">
        Trusted by Thousands of <br /> Happy Customer
      </p>
      <p className="text-[#4F5665] font-def text-[16px] leading-[30px] text-center mb-[60px]">
        These are the stories of our customers who have joined us with great{" "}
        <br /> pleasure when using this crazy feature.
      </p>

      <div className="flex justify-center gap-[40px] onethreefivezero:flex-wrap">
        <div className="w-[450px] h-[230px] rounded border-[#F53838] border-[2px]">
          <div className="flex items-center px-[30px] py-[30px]">
            <img src={viezh} alt="" />
            <div className="ml-5">
              <p className="font-def font-semibold text-[18px] w-[120px]">
                Viezh Robert
              </p>
              <p className="text-[#4F5665] font-def text-[14px]">
                Warsaw, Poland
              </p>
            </div>
            <p className="flex items-center ml-[108px] gap-[10px]">
              4.5
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1891 6.41802L10.2219 5.84146L8.44844 2.24615C8.4 2.14771 8.32031 2.06802 8.22187 2.01959C7.975 1.89771 7.675 1.99927 7.55156 2.24615L5.77812 5.84146L1.81094 6.41802C1.70156 6.43365 1.60156 6.48521 1.525 6.56334C1.43244 6.65847 1.38143 6.78646 1.38319 6.91918C1.38495 7.0519 1.43933 7.1785 1.53437 7.27115L4.40469 10.0696L3.72656 14.0211C3.71066 14.1131 3.72083 14.2076 3.75592 14.294C3.79102 14.3805 3.84963 14.4554 3.92511 14.5102C4.00059 14.565 4.08992 14.5976 4.18297 14.6042C4.27602 14.6108 4.36907 14.5913 4.45156 14.5477L8 12.6821L11.5484 14.5477C11.6453 14.5993 11.7578 14.6165 11.8656 14.5977C12.1375 14.5508 12.3203 14.293 12.2734 14.0211L11.5953 10.0696L14.4656 7.27115C14.5437 7.19459 14.5953 7.09459 14.6109 6.98521C14.6531 6.71177 14.4625 6.45865 14.1891 6.41802Z"
                  fill="#FEA250"
                />
              </svg>
            </p>
            <div></div>
          </div>
          <p className="font-def text-[#0B132A] text-[16px] px-[30px] my-[-10px] leading-[30px]">
            “Wow... I am very happy to use this VPN, it turned out to be
            more than my expectations and so far there have been no
            problems. LaslesVPN always the best”.
          </p>
        </div>
        <div className="w-[450px] h-[230px] rounded border-[#DDDDDD] border-[2px]">
          <div className="flex items-center px-[30px] py-[30px]">
            <img src={yessica} alt="" />
            <div className="ml-5">
              <p className="font-def font-semibold text-[18px] w-[140px]">
                Yessica Christy
              </p>
              <p className="text-[#4F5665] font-def text-[14px]">
                Shanxi, China
              </p>
            </div>
            <p className="flex items-center ml-[130px] gap-[10px]">
              4.5
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1891 6.41802L10.2219 5.84146L8.44844 2.24615C8.4 2.14771 8.32031 2.06802 8.22187 2.01959C7.975 1.89771 7.675 1.99927 7.55156 2.24615L5.77812 5.84146L1.81094 6.41802C1.70156 6.43365 1.60156 6.48521 1.525 6.56334C1.43244 6.65847 1.38143 6.78646 1.38319 6.91918C1.38495 7.0519 1.43933 7.1785 1.53437 7.27115L4.40469 10.0696L3.72656 14.0211C3.71066 14.1131 3.72083 14.2076 3.75592 14.294C3.79102 14.3805 3.84963 14.4554 3.92511 14.5102C4.00059 14.565 4.08992 14.5976 4.18297 14.6042C4.27602 14.6108 4.36907 14.5913 4.45156 14.5477L8 12.6821L11.5484 14.5477C11.6453 14.5993 11.7578 14.6165 11.8656 14.5977C12.1375 14.5508 12.3203 14.293 12.2734 14.0211L11.5953 10.0696L14.4656 7.27115C14.5437 7.19459 14.5953 7.09459 14.6109 6.98521C14.6531 6.71177 14.4625 6.45865 14.1891 6.41802Z"
                  fill="#FEA250"
                />
              </svg>
            </p>
          </div>
          <p className="font-def text-[#0B132A] text-[16px] px-[30px] my-[-10px] leading-[30px]">
            “I like it because I like to travel far and still can connect with
            high speed.”.
          </p>
        </div>
        <div className="w-[450px] h-[230px] rounded border-[#DDDDDD] border-[2px]">
          <div className="flex items-center px-[30px] py-[30px]">
            <img src={kim} alt="" />
            <div className="ml-5">
              <p className="font-def font-semibold text-[18px] w-[140px]">
                Kim Young Jou
              </p>
              <p className="text-[#4F5665] font-def text-[14px]">
                Seoul, South Korea
              </p>
            </div>
            <p className="flex items-center ml-[108px] gap-[10px]">
              4.5
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1891 6.41802L10.2219 5.84146L8.44844 2.24615C8.4 2.14771 8.32031 2.06802 8.22187 2.01959C7.975 1.89771 7.675 1.99927 7.55156 2.24615L5.77812 5.84146L1.81094 6.41802C1.70156 6.43365 1.60156 6.48521 1.525 6.56334C1.43244 6.65847 1.38143 6.78646 1.38319 6.91918C1.38495 7.0519 1.43933 7.1785 1.53437 7.27115L4.40469 10.0696L3.72656 14.0211C3.71066 14.1131 3.72083 14.2076 3.75592 14.294C3.79102 14.3805 3.84963 14.4554 3.92511 14.5102C4.00059 14.565 4.08992 14.5976 4.18297 14.6042C4.27602 14.6108 4.36907 14.5913 4.45156 14.5477L8 12.6821L11.5484 14.5477C11.6453 14.5993 11.7578 14.6165 11.8656 14.5977C12.1375 14.5508 12.3203 14.293 12.2734 14.0211L11.5953 10.0696L14.4656 7.27115C14.5437 7.19459 14.5953 7.09459 14.6109 6.98521C14.6531 6.71177 14.4625 6.45865 14.1891 6.41802Z"
                  fill="#FEA250"
                />
              </svg>
            </p>
            <div></div>
          </div>
          <p className="font-def text-[#0B132A] text-[16px] px-[30px] my-[-10px] leading-[30px]">
            “This is very unusual for my business that <br /> currently requires
            a virtual private network that has high security.”.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Global;
