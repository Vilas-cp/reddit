"use client"
import React from "react";
import Image from "next/image";

import {
  BellIcon,
  ChatBubbleLeftIcon,
  GlobeAltIcon,
  HomeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { VideoCameraIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div
      className="flex px-4 py-2 shadow-sm sti
     top-0"
    >
      <div className="relative h-8 w-[100px] flex-shrink-0 cursor-pointer">
        <Image
          src="https://freelogopng.com/images/all_img/1658832030reddit-logo-png.png"
          layout="fill"
          alt=""
        />
      </div>
      <div className="flex items-center  mx-7  lg:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
      <form className="flex flex-1 items-center space-x-2 border rounded-lg border-gray-200 bg-gray-100 px-3 py-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 text-gray-400 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search Reddit"
          className="flex-1 bg-transparent outline-none"
        />
        <button type="submit" hidden />
      </form>
      <div className=" hidden text-gray-500 items-center space-x-2 lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeAltIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatBubbleLeftIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerWaveIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <div className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        </div>
      </div>

      {/* Sign in part */}
      <div className="hidden lg:flex items-center border-gray-100 p-2 cursor-pointer space-x-2">
        <div className="relative h-5 w-5 flex-shrink-0">
          <Image
            src="https://links.papareact.com/23l"
            layout="fill"
            alt=""
            objectFit="contain"
          />
        </div>
        <p className="text-gray-400">Sign in</p>
      </div>
    </div>
  );
};

export default Header;
