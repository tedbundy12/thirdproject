import React from "react";

import free from "../assets/Free.svg";

function Plan() {
  return (
    <div className="bg-[white] py-[80px]">
      <p className="font-def text-[35px] font-semibold text-center mb-[15px]">
        Choose Your Plan
      </p>
      <p className="text-[#4F5665] leading-[30px] text-center mb-[60px]">
        Let's choose the package that is <br className="hidden fivezeronine:block"/> best for you and explore it happily and{" "}
        <br /> cheerfully.
      </p>

      <div className="flex justify-center m-0 m-auto gap-[50px] oneonefivezero:gap-[20px] onezerofourzero:flex-wrap">
        <div className="w-[330px] h-[760px] border-[2px] border-[#DDDDDD] rounded text-center">
          <img src={free} alt="" className="m-auto pt-[80px] mb-[30px]" />
          <p className="font-def font-medium text-[18px] text-[#0B132A] mb-[30px]">
            Free Plan
          </p>
          <div className="table justify-center m-0 m-auto mb-[100px]">
            <div className="flex items-center gap-[20px] font-def text-[#4F5665] mb-5">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z"
                  fill="#2FAB73"
                />
              </svg>
              <p>Unlimited Bandwitch</p>
            </div>
            <div className="flex items-center gap-[20px] font-def text-[#4F5665] mb-5">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z"
                  fill="#2FAB73"
                />
              </svg>
              <p>Encrypted Connection</p>
            </div>
            <div className="flex gap-[20px] items-center font-def text-[#4F5665] mb-5">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z"
                  fill="#2FAB73"
                />
              </svg>
              <p>No Traffic Logs</p>
            </div>
            <div className="flex gap-[20px] items-center font-def text-[#4F5665] mb-5">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z"
                  fill="#2FAB73"
                />
              </svg>
              <p>Works on All Devices</p>
            </div>
          </div>
          <p className="text-[#0B132A] text-[25px] font-def font-bold mb-5">
            Free
          </p>
          <button className="w-[177px] h-[45px] font-def font-bold text-[#F53838] border-2 border-red-500 text-red-500 rounded-full px-6 py-2 hover:bg-red-500 hover:text-white transition-colors duration-300">
            Select
          </button>
        </div>
        <div className="w-[330px] h-[760px] border-[2px] border-[#DDDDDD] rounded text-center">
          <img src={free} alt="" className="m-auto pt-[80px] mb-[30px]" />
          <p className="font-def font-medium text-[18px] text-[#0B132A] mb-[30px]">
            Standart Plan
          </p>
          <div className="table justify-center m-0 m-auto mb-[50px]">
            <div className="flex items-center gap-[20px] font-def text-[#4F5665] mb-5">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z"
                  fill="#2FAB73"
                />
              </svg>
              <p>Unlimited Bandwitch</p>
            </div>
            <div className="flex items-center gap-[20px] font-def text-[#4F5665] mb-5">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z"
                  fill="#2FAB73"
                />
              </svg>
              <p>Encrypted Connection</p>
            </div>
            <div className="flex gap-[20px] items-center font-def text-[#4F5665] mb-5">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z"
                  fill="#2FAB73"
                />
              </svg>
              <p>Yes Traffic Logs</p>
            </div>
            <div className="flex gap-[20px] items-center font-def text-[#4F5665] mb-5">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z"
                  fill="#2FAB73"
                />
              </svg>
              <p>Works on All Devices</p>
            </div>
            <div className="flex gap-[20px] items-center font-def text-[#4F5665] mb-5">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z"
                  fill="#2FAB73"
                />
              </svg>
              <p>Connect Anywhere</p>
            </div>
          </div>
          <p className="text-[#0B132A] text-[25px] font-def font-bold mb-5">
            $9 <span className="text-[#4F5665] font-normal">/ mo</span>
          </p>
          <button className="w-[177px] h-[45px] font-def font-bold text-[#F53838] border-2 border-red-500 text-red-500 rounded-full px-6 py-2 hover:bg-red-500 hover:text-white transition-colors duration-300">
            Select
          </button>
        </div>
        <div className="w-[330px] h-[760px] border-[2px] border-[#F53838] rounded text-center mb-[150px]">
          <img src={free} alt="" className="m-auto pt-[80px] mb-[30px]" />
          <p className="font-def font-medium text-[18px] text-[#0B132A] mb-[30px]">
            Premium Plan
          </p>
          <div className="table justify-center m-0 m-auto mb-[15px]">
            <div className="flex items-center gap-[20px] font-def text-[#4F5665] mb-5">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z"
                  fill="#2FAB73"
                />
              </svg>
              <p>Unlimited Bandwitch</p>
            </div>
            <div className="flex items-center gap-[20px] font-def text-[#4F5665] mb-5">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z"
                  fill="#2FAB73"
                />
              </svg>
              <p>Encrypted Connection</p>
            </div>
            <div className="flex gap-[20px] items-center font-def text-[#4F5665] mb-5">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z"
                  fill="#2FAB73"
                />
              </svg>
              <p>Yes Traffic Logs</p>
            </div>
            <div className="flex gap-[20px] items-center font-def text-[#4F5665] mb-5">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z"
                  fill="#2FAB73"
                />
              </svg>
              <p>Works on All Devices</p>
            </div>
            <div className="flex gap-[20px] items-center font-def text-[#4F5665] mb-5">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z"
                  fill="#2FAB73"
                />
              </svg>
              <p>Connect Anywhere</p>
            </div>
            <div className="flex gap-[20px] items-center font-def text-[#4F5665] mb-5">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z"
                  fill="#2FAB73"
                />
              </svg>
              <p>Get New Features</p>
            </div>
          </div>
          <p className="text-[#0B132A] text-[25px] font-def font-bold mb-5">
            $12 <span className="text-[#4F5665] font-normal">/ mo</span>
          </p>
          <button className="w-[177px] h-[45px] font-def font-bold text-[white] border-2 border-red-500 hover:text-red-500 rounded-full px-6 py-2 bg-red-500 hover:bg-white hover:text-red-500 transition-colors duration-300 shadow-lg shadow-red-200">
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plan;
