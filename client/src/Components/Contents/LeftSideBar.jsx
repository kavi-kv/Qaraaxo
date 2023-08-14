import React from 'react'
import { HiUserCircle } from "react-icons/hi";
import { FcAbout } from "react-icons/fc";
import { AiFillSetting } from "react-icons/ai";
import { BiSolidHelpCircle } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
export default function LeftSideBar() {

  return (
    <div className='main-side-bar'>
        <div className='side-bar-content'>
        <button className="inner-btn flex mb-2 items-center h-12 rounded-lg bg-[#F5F5F5]  w-full hover:bg-gray-200 hover:text-[#000] font-semibold">
                <HiUserCircle className="mr-2 h-8 w-8" />
                Profile
            </button>
            <button className="inner-btn flex mb-2 items-center h-14 rounded-lg bg-[#F5F5F5]  w-full hover:bg-gray-200 hover:text-[#000] font-semibold">
                <FcAbout className="mr-2 h-8 w-8" />
                About
            </button>
            <button className="inner-btn flex mb-2 items-center h-14 rounded-lg bg-[#F5F5F5]  w-full hover:bg-gray-200 hover:text-[#000] font-semibold">
                <AiFillSetting className="mr-2 h-8 w-8" />
                Setting
            </button>
            <button className="inner-btn flex mb-2 items-center h-14 rounded-lg bg-[#F5F5F5]  w-full hover:bg-gray-200 hover:text-[#000] font-semibold">
                <BiSolidHelpCircle className="mr-2 h-8 w-8" />
                Help
            </button>
            <button className="inner-btn flex mb-2 items-center h-14 rounded-lg bg-[#F5F5F5]  w-full hover:bg-gray-200 hover:text-[#000] font-semibold">
                <AiOutlineLogout className="mr-2 h-8 w-8" />
                Logout
            </button>
        </div>
    </div>
  )
}
